# 🦉 Night Eye — Fullstack Template

**Night Eye** is a personal fullstack starter template forged for rapid development, dark-themed UIs, and clean project structure.
This monorepo is powered by **Bun workspaces**, allowing both frontend and backend apps to live under a single, organized structure.

> ⚠️ **Important:**
> This is not a production-ready system.
> Night Eye is a **personal evolving template**, unstable and frequently refactored as new ideas are added.

---

## 🗂 Project Structure

```
night-eye/
├── apps/
│   ├── frontend/       # React + Vite + Tailwind + DaisyUI
│   └── backend/        # (Planned) Ktor + Kotlin API
├── assets/             # Shared static assets (e.g., logo)
├── bunfig.toml         # Bun workspace config
└── package.json        # Root monorepo metadata
```

---

## 🛠 Tech Stack

| Layer    | Technology                                               |
| -------- | -------------------------------------------------------- |
| Frontend | React 19, Vite, TailwindCSS, DaisyUI, ESLint             |
| Backend  | (WIP) Ktor + Kotlin                                      |
| Tooling  | Bun Workspaces, ESM modules, GitHub Actions (future) |

---

## ⚠️ Status: Unstable & Under Heavy Development

Night Eye is a **living template**, meaning:

* File structure **will change often**
* Backend (Ktor) is **not implemented yet**
* Components are experimental
* Purpose: **speed up future projects** and reduce repeated setup work

If you clone or fork it, expect breakage.

---

## 📦 Monorepo Setup (Using Bun)

### 🔧 Install Dependencies

```bash
# 1. Clone the repository
git clone https://github.com/your-username/night-eye.git
cd night-eye

# 2. Install all dependencies for all apps
bun install
```

### ▶️ Start Frontend Development Server

```bash
cd apps/frontend
bun run dev
```

Backend will be added soon.

---

## 🎨 Frontend Overview

The frontend uses a clean and modular setup:

* **React 19** (modern, minimal boilerplate)
* **Vite** for fast HMR
* **TailwindCSS + DaisyUI** for a pre-styled dark UI
* Reusable components: pagination, inputs, loaders
* Context-based isolated state stores
* Dark-gothic visual tone to match Night Eye’s theme

Designed for **focus coding**, clean structure, and flexibility.

---

## 🖤 License

Night Eye is licensed under the **ISC License** — minimal restrictions, perfect for personal starter templates.
