# Sharing images

The default website card is `static/img/todo-social-share-v2.jpg`

Blog posts retain their explicit `featured_image` or `images` selection

Posts without an explicit image generate a 1200 by 630 branded card with their title and author using `assets/social/blog-background.jpg`

Working group pages use `layouts/partials/social/working-group-image.html`

Agentic AI has the approved dedicated card and the other groups generate cards from their titles using `assets/social/working-group-background.jpg`

Translated WG pages use the English title when an English translation exists so the Latin display font can render it reliably

Generated cards are used consistently in Open Graph and Twitter metadata

The default image has a new URL and the Agentic AI image is fingerprinted so the old asset URL is not reused

Run `HUGO=./node_modules/.bin/hugo python3 scripts/test-blog-images.py` to check explicit blog images, generated cards, the site default, and the working group metadata
