# anusinghg.github.io

Personal portfolio, blog, and `/now` page for **Anubhav Singh** (`@anusinghg`), hosted on GitHub Pages.

- **Live Website:** [https://anusinghg.github.io](https://anusinghg.github.io)
- **Blog Endpoint:** [https://anusinghg.github.io/blog](https://anusinghg.github.io/blog)
- **Now Endpoint:** [https://anusinghg.github.io/now](https://anusinghg.github.io/now)

---

## Structure & Customization

All content across the homepage, `/blog`, and `/now` is configured in a single file: **[`config.js`](./config.js)**.

```text
.
├── index.html          # Main landing page (/)
├── blog/index.html     # Blog index & article reader (/blog & /blog/?post=<slug>)
├── now/index.html      # Current focus page (/now)
├── config.js           # Single source of truth for bio, projects, blog posts & skills
└── styles.css          # Minimal light/dark theme stylesheet
```

### Adding a New Blog Post
Open [`config.js`](./config.js) and add a new object to the `posts` array:
```js
{
  slug: "my-new-post",
  title: "My New Post Title",
  date: "2026-10-25",
  readingTime: "3 min read",
  tags: ["AI", "Engineering"],
  summary: "Short summary shown on the blog card.",
  content: `<p>Full article HTML content here...</p>`
}
```
