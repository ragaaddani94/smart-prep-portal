# PrepMaster: Dynamic Updates Without a Database

This project is designed to be easily updated without needing a backend or a database. It's perfect for free hosting on **GitHub Pages**.

## First-time publish to GitHub ([ragaaddani94](https://github.com/ragaaddani94))

1. On GitHub, create a **new public repository** (no README/license if you use the commands below).
2. In this folder, add the remote and push:

   ```bash
   git remote add origin https://github.com/ragaaddani94/YOUR_REPO_NAME.git
   git push -u origin main
   ```

3. Enable **GitHub Pages**:
   - Repo **Settings** → **Pages** → **Build and deployment** → **Source**: **GitHub Actions**.
4. After the first push, open **Actions** and wait for **Deploy to GitHub Pages** to finish. The live URL will be `https://ragaaddani94.github.io/YOUR_REPO_NAME/`.

## How to Update Content

The website reads data from two JSON files:
1.  `jobs.json`: Contains the latest job openings.
2.  `tech-updates.json`: Contains daily technology updates.

### Step-by-Step Update Guide

1.  **Open the JSON file**: Open either `jobs.json` or `tech-updates.json` in your code editor.
2.  **Add your content**: Add a new item at the top of the list following the existing format.
    *   *Tip*: Keep the latest items at the top so they appear first on the website.
3.  **Save the file**.
4.  **Push to GitHub**:
    ```bash
    git add .
    git commit -m "Update daily jobs and tech news"
    git push origin main
    ```
5.  **Wait for Deployment**: GitHub Pages will automatically detect the change and update your live website within a minute.

## Workflow for Daily Updates

To keep your site fresh:
- Set a reminder to check for new jobs or tech news every morning.
- Use your favorite news sources (like Hacker News, TechCrunch, or LinkedIn) to find content.
- Update the JSON files and push.

## Dynamic Feature Details
- **No Backend Required**: Uses the browser's `fetch` API to read local JSON files.
- **Fast & Lightweight**: Static files load instantly.
- **Responsive Animations**: New items automatically get the scroll-reveal animation.
