# 🌐 React Context API – In-Depth Guide

The **React Context API** is a powerful feature for **state management** that allows you to share data (like global state, themes, authentication, etc.) between components without passing props manually at every level.

---

## 🔍 What is Context API?

The Context API provides a way to pass data through the component tree without having to pass props down manually at every level.

> Think of it as a global state or shared environment that can be accessed from any component inside your app.

---

## ❓ Why Use Context API?

- ✅ Avoid "prop drilling" (passing props through multiple layers)
- ✅ Centralize state that multiple components rely on
- ✅ Improve code readability and maintainability

---

## 📅 When to Use Context API?

| Use Case | Example |
|----------|---------|
| Theme toggling | Light / Dark mode across the app |
| User authentication | Login status, user profile info |
| Language switching | Multi-language support (i18n) |
| Global settings | Configurations shared across screens |

---

## ⚙️ How It Works

Context consists of 3 steps:

1. **Create the Context**
2. **Provide the Context**
3. **Consume the Context**

### Step 1: Create Context

```js
import { createContext } from "react";

export const ThemeContext = createContext();
```

### Step 2: Provide Context

Wrap the root or desired component tree with the Provider.

```js
export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

In `App.jsx`:

```js
<ThemeProvider>
  <App />
</ThemeProvider>
```

### Step 3: Consume Context

Use `useContext()` in any child component.

```js
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Header() {
  const { isDark, setIsDark } = useContext(ThemeContext);

  return (
    <button onClick={() => setIsDark(!isDark)}>
      Switch to {isDark ? "Light" : "Dark"} Mode
    </button>
  );
}
```

---

## ⚠️ Common Mistakes

| Mistake | Solution |
|--------|----------|
| Using context without wrapping in provider | Always wrap your app with the Provider |
| Too many contexts | Use wisely; otherwise use Redux/Zustand |
| Over-updating values | Memoize if needed to avoid unnecessary renders |

---

## ✅ Best Practices

- ⛓ Break large context into smaller ones (e.g. ThemeContext, AuthContext)
- ⚙️ Combine with `useReducer` for complex logic
- 📦 Create a custom hook like `useTheme()` for cleaner access
- 🧪 Always provide fallback/default values

---

## 🧾 Summary

| Term | Role |
|------|------|
| `createContext()` | Creates the context container |
| `Context.Provider` | Supplies the context value to children |
| `useContext()` | Retrieves the value in any descendant |

The Context API is perfect for medium-complexity state sharing. For larger apps, you might consider Redux, Zustand, or Recoil.

---

## 🧠 Pro Tip

Use a `useTheme` custom hook:

```js
export function useTheme() {
  return useContext(ThemeContext);
}
```

Then call `const { isDark, setIsDark } = useTheme()` anywhere — clean and efficient!

---

🚀 Use Context API to avoid prop drilling, centralize shared logic, and make your components beautifully decoupled and scalable.