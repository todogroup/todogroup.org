#!/usr/bin/env python3
"""Check the generated Netlify form contract before deployment."""
from html.parser import HTMLParser
from pathlib import Path
import sys

class FormPage(HTMLParser):
    def __init__(self, html):
        super().__init__()
        self.forms, self.fields, self.labels, self.links = [], {}, set(), []
        self.feed(html)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "form":
            self.forms.append(attrs)
        if tag in ("input", "textarea") and "name" in attrs:
            self.fields[attrs["name"]] = attrs
        if tag == "label":
            self.labels.add(attrs.get("for"))
        if tag == "a":
            self.links.append(attrs.get("href"))

root = Path(sys.argv[1] if len(sys.argv) > 1 else "public")
application = "/community/2027-steering-committee-application/"
thanks = "/community/2027-steering-committee-thanks/"
p = FormPage((root / application.strip("/") / "index.html").read_text())
assert len(p.forms) == 1
form = p.forms[0]
assert form["name"] == "steering-committee-2027"
assert form["method"].upper() == "POST"
assert form["action"] == thanks
assert form["data-netlify"] == "true"
assert form["netlify-honeypot"] == "bot-field"
assert p.fields["form-name"]["value"] == form["name"]
assert p.fields["bot-field"]["tabindex"] == "-1"
required = {name for name, attrs in p.fields.items() if "required" in attrs}
assert required == {"name", "email", "contributions", "motivation", "bio"}
assert p.fields["email"]["type"] == "email"
assert p.fields["photo-url"]["type"] == "url"
assert p.fields["photo-url"]["pattern"] == "https://.*"
for name in ("name", "email", "contributions", "motivation", "expertise", "bio", "photo-url"):
    assert p.fields[name]["id"] in p.labels, name
assert (root / thanks.strip("/") / "index.html").is_file()
article = FormPage((root / "blog/2026-09-11-sc-nominations-2027/index.html").read_text())
assert application in article.links
assert not any("forms.gle/" in (link or "") for link in article.links)
print("PASS: Netlify form identity, POST destination, honeypot, fields, labels and article link")
