# Blog preview images

Every blog post displays a featured image on its article page and in the blog
list. The same image is published in Open Graph and Twitter large-image metadata.
No changes to the theme submodule or existing posts are needed.

## Custom images

Add these fields to a post's front matter:

```yaml
featured_image: /img/blog/my-photo.jpg
featured_image_alt: Contributors discussing open source at the TODO meeting
```

Place that file in `static/img/blog/my-photo.jpg`. A path to a Hugo asset, a
page-bundle image (for example `cover.jpg` beside `index.md`), or an absolute
HTTPS image URL also works. Prefer publicly accessible PNG/JPEG images around
1200 × 630 pixels for social previews. Images retain their original proportions
on the site. Use meaningful alt text; it defaults to the post title.

For compatibility with Hugo's standard social-image convention, the first entry
in `images: ["/img/blog/my-photo.jpg"]` is used when `featured_image` is absent.
An explicit `featured_image` always takes precedence. Neither field changes
images embedded in the article body.

## Automatic TODO banner

Without a custom image, Hugo generates a 1200 × 630 PNG from the post title.
The nominations article, “2027 TODO Steering Committee: Call for Nominations”,
uses this default. Changing its title regenerates its image automatically.
There is no extra build command, browser dependency, or external font request.

`layouts/partials/blog/image.html` resolves images for all three uses. The banner
uses the site's Oswald Bold font, white lettering, dark green `#003c32`, green
`#5aa100`, and the existing TODO logo. Titles wrap using font advance widths;
long titles use a smaller font. Hugo caches the generated assets. The site-level
head override only replaces social metadata for individual blog posts; other
pages retain the theme's metadata.

### Source assets

- `assets/blog/oswald-bold.ttf` is the uncompressed TrueType form of the theme's
  `static/fonts/oswald-v49-latin-700.woff2`, converted with FontTools. Its SIL Open
  Font License is included as `assets/blog/OFL.txt`.
- `data/blog_banner_widths.json` records each character's hmtx advance divided by
  the font's unitsPerEm. Update it with the font if the typography changes.
- `assets/blog/logo.png` is a 302 × 118 rasterization of
  `static/img/todo-logo-on-black.svg`, preserving the logo's original artwork.
- `assets/blog/background.png` is a 1200 × 630 solid `#003c32` canvas with a
  16-pixel `#5aa100` bottom stripe. Logo and title placement live in the partial.

Use the repository's Hugo Extended 0.126.1 and standard production/preview build
commands. Inspect both the blog list and an article at desktop and mobile widths.
Check that each article has exactly one `og:image` and `twitter:image`, with the
same absolute URL as its featured image, and `twitter:card=summary_large_image`.

Run `python3 scripts/test-blog-images.py` (optionally set `HUGO` to the compatible
binary). This builds isolated fixtures for custom-image precedence, static,
external, asset and bundle paths, generated and long titles, the nominations
article, and non-blog social metadata. Clear `resources/_gen/images` after
changing the logo/font source assets when reviewing a locally cached build.
