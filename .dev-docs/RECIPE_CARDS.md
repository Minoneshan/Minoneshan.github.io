# 🎨 Customization Recipe Cards

Quick reference for common edits.

---

## 🏠 Change Homepage Headline

**File:** `index.html`

**Find (lines ~45-50):**
```html
<h1>
  Quantitative Finance, Risk Modeling, and
  <span class="accent-line">Systematic Research</span>
</h1>
<p class="lede">
  I build data-driven models and tools for scenario analysis, portfolio
  risk, derivatives pricing, macro-financial forecasting, and systematic
  investment research.
</p>
```

**Replace with your headline + subheading.**

---

## 👤 Update Your Name & Contact

**Find & Replace in ALL HTML files:**

| Find | Replace |
|------|---------|
| `Mo Minoneshan` | Your Name |
| `you@example.com` | your@email.com |
| `linkedin.com/minoneshan` | linkedin.com/yourprofile |
| `github.com/Minoneshan` | github.com/yourusername |
| `Quantitative Research` | Your Tagline |

**Use VS Code:** `Cmd+Shift+H` → Find & Replace → Replace All

---

## 📊 Change Brand Color

**File:** `assets/css/style.css`

**Find (line ~6):**
```css
--accent: #0f4c81;
--accent-bright: #2563eb;
```

**Replace colors:**
```css
--accent: #your-color-hex;
--accent-bright: #lighter-version;
```

**Affects:**
- Links, buttons, section accents
- Sidebar highlight
- All highlights on the site

---

## 📁 Add a New Project Card to Homepage

**File:** `index.html`

**Find section:** `<!-- Card 4 -->`

**Copy and paste the full `<article class="project-card">` block**

**Update:**
```html
<h3>
  <a href="projects/your-project/index.html">Your Project Title</a>
</h3>
<p class="desc">
  One-sentence description of what this does.
</p>
<div class="tags">
  <span class="tag">Tech1</span>
  <span class="tag">Tech2</span>
  <span class="tag">Domain1</span>
</div>
<div class="card-actions">
  <a href="projects/your-project/demo.html" class="btn btn-secondary btn-sm">Demo</a>
  <a href="projects/your-project/docs.html" class="btn btn-secondary btn-sm">Documentation</a>
  <a href="https://github.com/..." class="btn btn-ghost btn-sm" target="_blank" rel="noopener">GitHub</a>
</div>
```

**Note:** Make sure the folder `projects/your-project/` exists with `index.html`, `demo.html`, `docs.html`.

---

## 📚 Add Documentation Section to Book-Style Docs

**File:** `projects/{name}/docs.html`

### Step 1: Add to sidebar nav

**Find:** `<ul class="docs-nav">`

**Add:**
```html
<li class="nav-part">Your Section Category</li>
<li>
  <a href="#your-section"><span class="num">5</span>Your Section Title</a>
</li>
<li class="sub">
  <a href="#your-subsection"><span class="num">5.1</span>Subsection</a>
</li>
```

### Step 2: Add to main content

**Find:** `<div class="docs-content">`

**Add a new section:**
```html
<section id="your-section">
  <h2><span class="sec-num">5</span>Your Section Title</h2>
  <p>Your text here.</p>
  
  <!-- Include equations if needed -->
  <p>Math: $$f(x) = \int_0^\infty e^{-x^2} dx$$</p>
  
  <!-- Include code blocks if needed -->
  <pre><code class="language-python">
import numpy as np
result = np.mean(data)
  </code></pre>
</section>
```

---

## 🧮 Add Math Equations

**File:** Any `docs.html` file

### Inline math (in text):
```html
The formula is \(e=mc^2\), which is fundamental.
```

### Display math (centered):
```html
<p>$$\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}$$</p>
```

**Note:** KaTeX CDN is already loaded in all `docs.html` files.

---

## 💻 Add Code Blocks

**File:** Any `docs.html` file

### Python:
```html
<pre><code class="language-python">
def calculate_var(returns, alpha=0.95):
    return np.percentile(returns, (1-alpha)*100)
</code></pre>
```

### C++:
```html
<pre><code class="language-cpp">
double price = std::exp(-r * T) * payoff / n_paths;
std::cout << "Price: " << price << std::endl;
</code></pre>
```

### SQL:
```html
<pre><code class="language-sql">
SELECT ticker, AVG(close) as avg_price
FROM prices
GROUP BY ticker;
</code></pre>
```

---

## 🎬 Embed a Streamlit Demo

**File:** `projects/{name}/demo.html`

**Find:**
```html
<div style="margin-top: 28px; border: 1px dashed...">
  <div>Demo placeholder...</div>
</div>
```

**Replace with:**
```html
<iframe 
  src="https://your-app-name.streamlitapp.com" 
  width="100%" 
  height="640"
  style="border: none; border-radius: var(--radius);">
</iframe>
```

---

## 📓 Embed a Jupyter Notebook

**File:** `projects/{name}/demo.html`

**Replace demo div with:**
```html
<iframe 
  src="https://nbviewer.jupyter.org/github/yourname/your-repo/blob/main/notebook.ipynb" 
  width="100%" 
  height="640"
  style="border: none; border-radius: var(--radius);">
</iframe>
```

---

## 🤗 Embed Hugging Face Spaces

**File:** `projects/{name}/demo.html`

**Replace demo div with:**
```html
<iframe 
  src="https://huggingface.co/spaces/yourname/space-name/embed" 
  width="100%" 
  height="640"
  style="border: none; border-radius: var(--radius);">
</iframe>
```

---

## 📋 Update Experience Timeline

**File:** `index.html`

**Find:** `<div class="timeline">`

**Replace/update items:**
```html
<div class="timeline-item">
  <div>
    <div class="role">Your Job Title</div>
    <div class="org">Company Name</div>
  </div>
  <div class="when">May 2024 - Aug 2024</div>
</div>
```

---

## 🏷️ Update Research Areas

**File:** `index.html`

**Find:** `<div class="pill-grid">`

**Update pills:**
```html
<span class="pill">Your Expertise 1</span>
<span class="pill">Your Expertise 2</span>
<span class="pill">Your Expertise 3</span>
```

---

## 📝 Create a Technical Note

**File:** `notes.html`

**Find:** `<div class="card-grid">`

**Add a card:**
```html
<article class="project-card">
  <h3><a href="#">Your Note Title</a></h3>
  <p class="desc">
    One-line description of what this note covers.
  </p>
  <div class="tags">
    <span class="tag">Topic1</span>
    <span class="tag">Topic2</span>
  </div>
  <div class="card-actions">
    <a href="projects/your-note/note.html" class="btn btn-secondary btn-sm">Read note →</a>
  </div>
</article>
```

---

## 🎨 Change Button Styles

**File:** `assets/css/style.css`

**Find:** `.btn-primary`, `.btn-secondary`, `.btn-ghost`

**Update backgrounds/colors:**
```css
.btn-primary {
  background: var(--bg-dark);  /* Change color here */
  color: #fff;
}

.btn-secondary {
  background: #fff;
  color: var(--accent);         /* Change color here */
  border-color: var(--border-strong);
}
```

---

## 📱 Test on Mobile

**Chrome DevTools:**
- Press `Cmd+Shift+M` (macOS) or `Ctrl+Shift+M` (Windows/Linux)
- Resize to test different screen sizes
- Check buttons are clickable, nav toggle works

---

## 🚀 Deploy Changes

**Terminal:**
```bash
cd /Users/minoneshan/Github/Personal_Website/Minoneshan.github.io

# 1. Stage changes
git add .

# 2. Commit with descriptive message
git commit -m "Update project documentation for stress scenario engine"

# 3. Push to GitHub
git push origin main

# 4. Wait 2-3 minutes
# 5. Visit https://minoneshan.github.io to see changes live
```

---

## ❓ Common Questions

**Q: I updated HTML but changes don't show on GitHub Pages.**  
A: Wait 2-3 min for GitHub to rebuild. Check that you pushed to `main` branch.

**Q: Math isn't rendering in my docs.**  
A: Ensure KaTeX CDN is loaded in `<head>`. Use `$$...$$` for display math, `\(...\)` for inline.

**Q: Code syntax highlighting isn't working.**  
A: Check that Prism CDN is loaded and use correct language class: `class="language-python"`.

**Q: How do I add a new page?**  
A: Create a new `.html` file, copy header/footer from existing page, add nav links, push.

**Q: Can I use JavaScript frameworks?**  
A: Yes, but not needed! This site works great with vanilla JS. If you want React/Vue, use a build tool and deploy to Vercel instead.

---

## 📚 More Resources

- **Full guide:** See `README.md`
- **Quick setup:** See `QUICK_START.md`
- **Build overview:** See `BUILD_SUMMARY.md`

---

**Happy customizing!** Questions? Check the guides above or just experiment — it's all plain HTML!
