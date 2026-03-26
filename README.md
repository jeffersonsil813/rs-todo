# ✅ ToDo List

A modern, fast, and locally persistent task management app — built with React and Vite.

---

## 📌 About the Project

**ToDo List** is a web application for managing your daily tasks. You can create, view, and organize tasks in a simple and intuitive way, with data saved directly in the browser — no backend or database required.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- `npm` or `yarn`

### Installation & Running

**With npm:**
```bash
npm i
npm run dev
```

**With yarn:**
```bash
yarn
yarn dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🛠️ Tech Stack

| Technology | Description |
|---|---|
| [React](https://react.dev/) | Main library for building the UI |
| [Vite](https://vitejs.dev/) | Lightning-fast build tool for modern development |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling directly in JSX |
| [React Router](https://reactrouter.com/) | Client-side routing between pages |
| [Class Variance Authority](https://cva.style/) | Type-safe component variant management |

---

## 💾 Highlight: `useLocalStorage`

> One of the coolest parts of this project!

Instead of manually accessing `localStorage` with `getItem`, `setItem`, and `JSON.parse` scattered across the codebase, the **`useLocalStorage`** hook was used — it wraps all that logic and exposes an interface identical to `useState`:

```js
const [tasks, setTasks] = useLocalStorage('tasks', [])
```

That's it. Data persists across sessions with zero extra complexity. ✨

---

## 📁 Project Structure

```
RS-TODO/
├── public/                  # Static public assets
├── src/
│   ├── assets/              # Images and static resources
│   ├── components/          # Small, reusable atomic components
│   ├── core-components/     # Larger components composed from smaller ones
│   ├── helpers/             # Utility functions
│   ├── hooks/               # Custom hooks (e.g. useLocalStorage)
│   ├── models/              # TypeScript types and interfaces
│   ├── pages/               # Application pages (consumed by React Router)
│   ├── App.tsx              # Root component and route configuration
│   ├── index.css            # Global styles
│   └── main.tsx             # Application entry point
├── index.html
├── vite.config.ts
└── package.json
```

---

## 🧩 Component Architecture

The project follows a **layered composition** approach:

- **`components/`** — Small, atomic, and reusable pieces (buttons, inputs, badges, etc.)
- **`core-components/`** — More complex components built by combining the smaller ones

This separation keeps the codebase organized, makes maintenance easier, and encourages reuse — avoiding duplication and giving each piece a single, clear responsibility.

---

## 👤 Author

Made with 💙 by me.
