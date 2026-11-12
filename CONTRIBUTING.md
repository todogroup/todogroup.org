# Contributing to the TODO Group Website

Welcome to the TODO Group website project! We're glad you're here and excited for your contributions.

## Table of Contents

- [Getting Started](#getting-started)
- [Code of Conduct](#code-of-conduct)
- [Ways to Contribute](#ways-to-contribute)
- [Blog Contribution Guidelines](#blog-contribution-guidelines)
- [Submission Process](#submission-process)
- [Support](#support)

## Getting Started

The TODO Group website serves as the central hub for our community, hosting resources, blog content, guides, and information about OSPOs (Open Source Program Offices). All contributions should align with our mission to provide **vendor-neutral, practical resources** that help organizations run effective open source programs.

### Prerequisites

Before contributing, please ensure you have:
- A [GitHub account](https://github.com/signup)
- Basic familiarity with Git and GitHub workflows
- Node.js and npm installed (for development contributions)

## Code of Conduct

All contributors are expected to adhere to the [TODO Group Code of Conduct](https://github.com/todogroup/governance/blob/main/code-of-conduct.md). By participating in this project, you agree to maintain a respectful, inclusive, and collaborative environment.

## Ways to Contribute

### 🖊️ Blog Posts
Share insights, tutorials, and perspectives on open source program management and OSPO practices.

### 🐛 Bug Reports
Found an issue with the site? Report it via [GitHub Issues](https://github.com/todogroup/issues).

### ✨ Feature Requests
Suggest new features or improvements to enhance the site's usefulness.

### 📝 Documentation
Help improve guides, case studies, and other documentation.

### 🎨 Design & UX
Contribute to the site’s design, layout, and user experience.

### 💻 Code Contributions
Fix bugs, add features, or improve the site’s technical implementation.

## Blog Contribution Guidelines

TODO Group regularly publishes blog posts to amplify knowledge and best practices around open source program management. Contributions must align with our mission and open-source values.

### Content We Welcome
- ✅ OSPO best practices, frameworks, or insights  
- ✅ Case studies and success stories  
- ✅ Research or survey results on open source management  
- ✅ Practical guides and frameworks for OSPO practitioners  
- ✅ Vendor-neutral perspectives and solutions  

### Content We Don’t Publish
- ❌ Promotional or marketing content  
- ❌ Job postings or recruitment ads  
- ❌ Backlink farming / SEO-driven posts  
- ❌ Content without OSPO or open source relevance  
- ❌ Content violating our Code of Conduct  

### Blog Post Structure

All blog posts must include frontmatter:  

```markdown
---
title: "Your Blog Post Title"
author: your-github-username-or-org
date: YYYY-MM-DD
---
```

## Submission Process

1. **Fork the Repository**  
Fork the [TODO Group website repo](https://github.com/todogroup/todogroup.org) to your own GitHub account

2. **Create a New Branch**  
```bash
git checkout -b blog/your-username
```
   
3.	**Add Your Blog Post**
Place your markdown file in the /content/en/blog/ directory


5.	**Test Locally**
Run the site locally to make sure your post renders properly. See [Development Setup](README.md#development-setup) in the README for the commands.

7.	**Submit a Pull Request**
- Push your branch to your fork
- Open a pull request against the main branch of the TODO Group repo
- Provide a clear description of your contribution in the PR body

### Images
- Store images in /static/images/blog/
- Reference them as: `/images/blog/filename.png`

## Support

Open an issue or join the TODO Group Slack and send a message in #project-todo-gh
