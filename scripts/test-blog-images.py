#!/usr/bin/env python3
"""Integration checks; run with HUGO=/path/to/hugo python3 scripts/test-blog-images.py."""
import json
import os
from pathlib import Path
import shutil
import subprocess
import tempfile
from html.parser import HTMLParser
from urllib.parse import urlsplit

ROOT = Path(__file__).resolve().parents[1]


class Page(HTMLParser):
    def __init__(self, path):
        super().__init__()
        self.meta = {}
        self.images = []
        self.feed(path.read_text())

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "meta":
            key = attrs.get("property", attrs.get("name"))
            self.meta.setdefault(key, []).append(attrs.get("content"))
        if tag == "img" and "blog-featured-image" in attrs.get("class", ""):
            self.images.append(attrs)


def check():
    with tempfile.TemporaryDirectory(prefix="blog-images-") as tmp:
        tmp = Path(tmp)
        # Test content is isolated; never write fixtures into the real content tree.
        content = tmp / "content"
        shutil.copytree(ROOT / "content", content)
        blog = content / "en/blog"
        cases = {
            "static": {"featured_image": "/img/todo-social-share.png"},
            "external": {"featured_image": "https://example.com/cover.jpg"},
            "legacy": {"images": ["/img/todo-social-share.png"]},
            "precedence": {"featured_image": "/img/todo-social-share.png", "images": ["/ignored.png"]},
            "asset": {"featured_image": "blog/background.png"},
            "bundle": {"featured_image": "cover.png"},
            "generated": {},
            "long": {"title": "A very long title about open source collaboration and governance " * 5},
        }
        for name, params in cases.items():
            folder = blog / ("image-test-" + name)
            folder.mkdir()
            front = {"author": "todogroup", "title": "Image test: quotes \" & accents café", "date": "2020-01-01", "featured_image_alt": "Custom accessible description", **params}
            (folder / "index.md").write_text(json.dumps(front) + "\n\nTest body.\n")
            if name == "bundle":
                shutil.copyfile(ROOT / "assets/blog/background.png", folder / "cover.png")
        # Per-language contentDir overrides the site's contentDir, so override all.
        config = tmp / "content.json"
        config.write_text(json.dumps({"languages": {lang: {"contentDir": str(content / folder)} for lang, folder in [("en", "en"), ("ja", "ja"), ("zh-cn", "zh-cn")]}}))
        dest = tmp / "public"
        subprocess.run([os.environ.get("HUGO", "hugo"), "--config", str(ROOT / "config/_default/hugo.yaml") + "," + str(config), "--configDir", str(ROOT / "config"), "--destination", str(dest), "--cacheDir", str(tmp / "cache"), "--baseURL", "https://preview.example/", "--buildDrafts", "--buildFuture"], cwd=ROOT, check=True)
        for name in cases:
            page = Page(dest / "blog" / ("image-test-" + name) / "index.html")
            image = page.images[0]
            assert page.meta["og:image"] == page.meta["twitter:image"] == [image["src"]], name
            assert page.meta["twitter:card"] == ["summary_large_image"], name
            assert urlsplit(image["src"]).scheme == "https", name
            if name == "external":
                assert image["src"] == "https://example.com/cover.jpg"
            elif name in ("static", "legacy", "precedence"):
                assert image["src"] == "https://preview.example/img/todo-social-share.png"
            else:
                assert (dest / urlsplit(image["src"]).path.lstrip("/")).is_file(), name
            if name not in ("generated", "long"):
                assert image["alt"] == "Custom accessible description", name
            else:
                assert (image["width"], image["height"]) == ("1200", "630"), name
        nominations = Page(dest / "blog/2026-09-11-sc-nominations-2027/index.html")
        assert nominations.meta["og:image"] == [nominations.images[0]["src"]]
        home = Page(dest / "index.html")
        assert home.meta["og:image"] == ["https://preview.example/img/todo-social-share.png"]
        assert not home.images
        print("PASS: eight image cases, nominations banner, and unchanged home social image")


if __name__ == "__main__":
    check()
