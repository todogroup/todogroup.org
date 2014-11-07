# Publishing a Blog on todogroup.org

Publishing a blog on http://todogroup.org/blog is pretty straightforward. It is always a good idea to have someone else review your post before publishing. 

## Writing your post

1. All posts are written using Markdown
2. Your title should be in the front-matter, and not the body of the post
3. To preview the post, build the site (see [README](https://github.com/todogroup/todogroup.github.io/blob/master/README.md))
4. The filename should include the publishing date and title in the format: `YYYY-MM-DD-title-as-slug.md`
5. The front-matter should include:

````
---
title: This is a Test of the Emergency Broadcast System
author: your_github_username
---
````

## Submitting your post

1. Fork the repository
2. Create a new branch
3. Add your blog post to `_posts`
4. Push your branch to GitHub
5. Open a pull request
