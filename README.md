# 🚀 FullStack Best Practices

A full-stack learning and practice repository — combining **Frontend (React + Vite)** and **Backend (Node.js + Express)** with proper Git and deployment workflows.

---

## 🧠 About This Project

This project focuses on understanding and implementing modern **Full Stack Development** using:
- **Frontend:** React (Vite)
- **Backend:** Node.js + Express
- **Version Control:** Git & GitHub  
- **API Handling:** Axios & CORS
- **Deployment:** Render / Netlify / Vercel

The goal is to understand **how both sides communicate**, manage **CORS issues**, and use **modern Git workflows** effectively.

---

## 📂 Folder Structure

```
FullStack_best_practices/
│
├── backend/
│   ├── node_modules/
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

---

## ⚙️ Backend Setup (Node.js + Express)

### Install Dependencies
```bash
npm i express
```

### Start the Server
```bash
node server.js
```

### Notes
- Use `type: "module"` in `package.json` for **modern JS (ES Modules)**.
- If using **CommonJS**, use `require` instead of `import`.

---

## 💻 Frontend Setup (React + Vite)

### Create React App using Vite
```bash
npm create vite@latest
```

### Install Dependencies
```bash
npm i
npm i axios
```

### Run Development Server
```bash
npm run dev
```

---

## 🌐 Handling CORS (Cross-Origin Resource Sharing)

When your frontend and backend run on **different ports**, you’ll face CORS issues.

### ✅ Option 1: Use the CORS Package (Backend)
Install:
```bash
npm i cors
```
Use in your server:
```js
import cors from "cors";
app.use(cors());
```

### ✅ Option 2: Add Proxy (Frontend)
In your frontend `package.json`, add:
```json
"proxy": "http://localhost:5000"
```

This forwards all frontend requests to your backend and resolves CORS automatically.

---

## 🧩 Git & GitHub Commands (With Explanations)

### 🪜 Basic Setup
```bash
git init                             # Initialize local repo
git add .                            # Stage all files
git commit -m "message"               # Commit changes
git branch -M main                   # Rename branch to main
git remote add origin <repo-url>     # Link local to GitHub repo
git push -u origin main              # Push for the first time
```

---

## ⚠️ When Push Is Rejected (Common Git Error)

If you see:
```
! [rejected] main -> main (non-fast-forward)
error: failed to push some refs to ...
```
It means your **local repo is behind the remote repo**.

---

### 🧩 Solution 1 — Merge Both (Recommended)
If you want to **keep both local and remote changes**:
```bash
git pull origin main --allow-unrelated-histories
git push origin main
```

---

### 💣 Solution 2 — Overwrite Remote (Not Recommended)
If you want to **ignore remote changes** and push your local project as is:
```bash
git push origin main --force
```

---

## 🧰 Common Git Commands Reference

| Command | Description |
|----------|-------------|
| `git status` | Check current changes |
| `git log` | View commit history |
| `git diff` | See file differences |
| `git clone <url>` | Clone a remote repository |
| `git branch` | View all branches |
| `git checkout <branch>` | Switch branches |
| `git merge <branch>` | Merge another branch |
| `git pull` | Fetch + merge remote changes |
| `git push` | Upload commits to GitHub |

---

## 🧠 Things Learned

1. How to use **Express.js** for backend API creation.  
2. Understanding **modern JS (ES Modules)** vs **CommonJS** syntax.  
3. Using **Axios** for frontend-backend communication.  
4. Solving **CORS** using proxy or backend middleware.  
5. Managing **Git conflicts** and understanding **push errors**.  
6. Proper **folder structuring** for a full-stack app.  
7. Linking local and remote repos safely.  

---

## 🚀 Deployment Options

| Platform | Used For | Notes |
|-----------|-----------|-------|
| **Render** | Backend | Free tier available; supports Node.js |
| **Netlify / Vercel** | Frontend | Fast CI/CD + easy deploy from GitHub |
| **GitHub Pages** | Static sites | Frontend only |

---

## 🧩 Render Deployment Notes

If Render doesn’t auto-deploy:
- Ensure your GitHub repo is **connected** properly.
- Set **Start Command** as `node server.js`.
- Set **Root Directory** to `backend/` if your backend is inside that folder.
- You can manually trigger deploy from the Render dashboard.

---

## 💬 Final Note

This repository acts as a **hands-on playground** for learning Full Stack development and mastering Git collaboration.

> “Build. Break. Fix. Learn. Repeat.” 💪

---

**Author:** Rajat Raj  
**GitHub:** [@Rajatcodingwarrior](https://github.com/Rajatcodingwarrior)
