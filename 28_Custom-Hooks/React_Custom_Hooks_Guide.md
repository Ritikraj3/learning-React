# 🔧 React Custom Hooks – Complete Beginner to Advanced Guide

Custom Hooks are one of React’s most **powerful and elegant features**. They allow you to **extract reusable logic** from components and organize your code better.

---

## 🔍 What are Custom Hooks?

A **custom hook** is a JavaScript function whose name **starts with `use`** and **can call other hooks inside it**.

It lets you **reuse stateful logic** across multiple components — without repeating code or using HOCs (Higher Order Components).

---

## ❓ Why Use Custom Hooks?

✅ To remove duplicate logic from components  
✅ To keep components clean and focused  
✅ To isolate concerns (data fetching, form handling, localStorage, etc.)  
✅ To create readable, maintainable, and testable code  

---

## 📅 When to Use Custom Hooks?

| Situation | Use Custom Hook For |
|----------|----------------------|
| Repeating `useEffect()` logic | Create reusable data-fetching hook |
| Shared form state | Handle inputs, errors, validations |
| Working with localStorage | Save/load state from storage |
| Accessing shared features | Like event listeners, timers, etc. |

---

## ⚙️ How Custom Hooks Work

### Basic Structure:

```js
function useMyHook() {
  const [state, setState] = useState(...);

  useEffect(() => {
    // some effect
  }, []);

  return state;
}
```

Then in your component:

```js
const value = useMyHook();
```

✔️ Follows all the **rules of hooks**  
✔️ Can use any React built-in hooks (`useState`, `useEffect`, `useRef`, etc.)  
✔️ Can return anything — state, functions, objects, JSX

---

## 💻 Examples

### ✅ 1. `useLocalStorage` – A custom hook to persist data

```js
import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
```

Usage:

```js
const [isDark, setIsDark] = useLocalStorage("isDarkMode", false);
```

---

### ✅ 2. `useFetch` – Reusable data fetcher

```js
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      const res = await fetch(url);
      const json = await res.json();
      if (!ignore) setData(json);
      setLoading(false);
    }

    fetchData();

    return () => { ignore = true; };
  }, [url]);

  return { data, loading };
}
```

Usage:

```js
const { data, loading } = useFetch("https://api.com/data");
```

---

### ✅ 3. `useWindowWidth` – Track window size

```js
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}
```

Usage:

```js
const width = useWindowWidth();
```

---

## ⚠️ Common Mistakes

| Mistake | Why It's a Problem | Fix |
|--------|---------------------|-----|
| Not starting hook name with `use` | React won’t treat it as a hook | Always prefix with `use` |
| Calling hooks conditionally | Breaks the Rules of Hooks | Never call hooks inside conditions |
| Mixing logic and UI | Hooks should return logic/data, not JSX | Keep UI in components only |

---

## ✅ Best Practices

- 🧩 Use custom hooks for any **repeating state/effect logic**
- ♻️ Split large hooks into smaller, focused hooks
- 🔍 Name clearly: `useForm`, `useUser`, `useToggle`, etc.
- 🧪 Easy to test — just run the hook function in isolation (with testing libs)

---

## 🧾 Summary

| Concept | What it Does |
|--------|----------------|
| Custom Hook | Reusable function with internal hook logic |
| `use` prefix | Required for React to recognize it |
| Reusability | Promotes DRY and clean component structure |
| Flexible | Can return any value or function |

---

## 🧠 Pro Tip

Build hooks from real needs in your components. When you copy/paste the same logic more than once — extract it into a hook.

```js
function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggle = () => setValue(v => !v);
  return [value, toggle];
}
```

---

🔥 Custom Hooks are the secret weapon for clean, modern React code.

Use them to remove clutter, organize logic, and power up your component architecture like a pro!