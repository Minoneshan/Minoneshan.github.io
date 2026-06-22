# 🚀 Quick Start: Customize Your Portfolio Site

## 1. Core Updates (5 minutes)

### Update your info everywhere:

**Find and replace in all HTML files:**

| Find | Replace with |
|------|--------------|
| `Mo Minoneshan` | Your name |
| `you@example.com` | Your email |
| `Quantitative Research` | Your tagline |
| `linkedin.com/minoneshan` | Your LinkedIn URL |
| `github.com/Minoneshan` | Your GitHub URL |

**Easy way:** Use VS Code Find & Replace (`Cmd+Shift+H`) with "Replace All" on `.html` files.

### Update your resume:

Replace `Minoneshan_Resume.pdf` with your own PDF (keep the same filename).

---

## 2. Homepage (10 minutes)

Edit `index.html`:

1. **Hero section** (top of page)
   - Change headline: `<h1>Your custom headline...</h1>`
   - Change subheading: `<p class="lede">Your custom description...</p>`

2. **Featured projects** — replace the 4 project cards with yours
   - Keep the same structure, update titles, descriptions, links
   - Add/remove project cards as needed

3. **Research areas** — update the pills at the bottom
   - Edit `<span class="pill">...</span>` items

4. **Experience** — update the timeline
   - Edit the `<div class="timeline-item">` entries

---

## 3. Projects Page (15 minutes)

Edit `projects.html`:

1. **Update intro text** at the top
2. **Add your project cards** — copy the structure from existing ones
3. **Filter tags** — customize data-tags in `data-tags="risk ml"` to match your filters

**Pro tip:** Each project needs a folder under `projects/your-project/` with:
- `index.html` (landing page)
- `demo.html` (demo stub)
- `docs.html` (documentation)

---

## 4. Add a New Project (20 minutes)

### Step 1: Create folder
```bash
mkdir projects/my-project
```

### Step 2: Copy template files
```bash
cp -r projects/stress-scenario-engine/* projects/my-project/
```

### Step 3: Update the three files

**`projects/my-project/index.html`:**
- Change title, description
- Update Problem, Methods, Outputs sections

**`projects/my-project/demo.html`:**
- Replace placeholder `<div>` with your `<iframe>` (or delete it for now)

**`projects/my-project/docs.html`:**
- Update sidebar nav structure (sections, subsections)
- Fill in the content with your methodology, results, etc.
- Update links at the top/bottom

### Step 4: Add card to projects.html
```html
<article class="project-card" data-tags="your-tags">
  <h3><a href="projects/my-project/index.html">My Project</a></h3>
  <p class="desc">Short description...</p>
  <div class="tags">
    <span class="tag">Python</span>
    <span class="tag">Risk</span>
  </div>
  <div class="card-actions">
    <a href="projects/my-project/demo.html" class="btn btn-secondary btn-sm">Demo</a>
    <a href="projects/my-project/docs.html" class="btn btn-secondary btn-sm">Documentation</a>
    <a href="https://github.com/..." class="btn btn-ghost btn-sm">GitHub</a>
  </div>
</article>
```

---

## 5. Documentation Pages (Deeper Dives)

Each project's `docs.html` uses a **book-style layout** with:
- Searchable sidebar (left)
- Main content (right)
- Chapter navigation
- Math support (KaTeX)
- Code syntax highlighting (Prism)

### Structure

**Sidebar nav:**
```html
<li><a href="#intro"><span class="num">1</span>Introduction</a></li>
<li><a href="#methods"><span class="num">2</span>Methodology</a></li>
<li class="sub"><a href="#methods-1"><span class="num">2.1</span>Method 1</a></li>
```

**Main content:**
```html
<section id="intro">
  <h2><span class="sec-num">1</span>Introduction</h2>
  <p>Your text here.</p>
</section>

<section id="methods">
  <h2><span class="sec-num">2</span>Methodology</h2>
  <p>Include math: $$\int_0^\infty f(x) dx$$</p>
  <pre><code class="language-python">your_code_here()</code></pre>
</section>
```

---

## 6. Embed Interactive Demos

Replace demo placeholders with iframes:

### Streamlit
```html
<iframe 
  src="https://your-app.streamlitapp.com" 
  width="100%" height="640"
  style="border: none; border-radius: var(--radius);">
</iframe>
```

### Hugging Face Spaces
```html
<iframe 
  src="https://huggingface.co/spaces/yourname/your-space/embed" 
  width="100%" height="640"
  style="border: none; border-radius: var(--radius);">
</iframe>
```

### Jupyter Notebook (nbviewer)
```html
<iframe 
  src="https://nbviewer.jupyter.org/github/yourname/repo/blob/main/notebook.ipynb" 
  width="100%" height="640"
  style="border: none; border-radius: var(--radius);">
</iframe>
```

---

## 7. Brand Colors (Optional)

Edit `assets/css/style.css` top section:

```css
:root {
  --accent: #0f4c81;           /* Change to your brand color */
  --accent-bright: #2563eb;
  --bg: #ffffff;
  --bg-dark: #0b1220;
  /* ... etc ... */
}
```

---

## 8. Test Locally

```bash
# Simple HTTP server
python3 -m http.server 8000

# Visit: http://localhost:8000
```

---

## 9. Deploy to GitHub Pages

```bash
git add .
git commit -m "Update portfolio"
git push origin main

# Wait ~2 min, visit: https://minoneshan.github.io
```

---

## 📋 Checklist Before Going Live

- [ ] Updated all instances of your name
- [ ] Updated contact info (email, LinkedIn, GitHub)
- [ ] Replaced resume PDF
- [ ] Updated homepage hero + featured projects
- [ ] Added your actual projects
- [ ] Tested all links locally
- [ ] Checked on mobile (Cmd+Shift+M)
- [ ] Pushed to GitHub
- [ ] Verified site is live at `https://minoneshan.github.io`

---

## 🎯 Pro Tips

1. **Keep it professional** — this is for recruiters, not flashiness
2. **Show your thinking** — methodology > buzzwords
3. **Include validation** — backtests, error metrics, limitations
4. **Make it interactive** — demos should work, not be stubs
5. **Update regularly** — fresh projects, polished docs

---

## 🆘 Troubleshooting

| Issue | Solution |
|-------|----------|
| Links broken | Check relative paths (use `../../` to go up directories) |
| Sidebar search not working | Make sure `docs.js` is loaded in `<script>` tag |
| Math not rendering | Check KaTeX CDN is loaded, use `$$..$$` or `\(...\)` |
| Code not highlighted | Verify Prism CDN is loaded, use `class="language-python"` etc |
| GitHub Pages not updating | Wait 2-3 min, check Settings → Pages → Deploy from `main` branch |

---

Happy building! Questions? Check the full `README.md` for details.
