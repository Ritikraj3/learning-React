
# 🔍 How `useState` Works in React

![React](https://img.shields.io/badge/-React-61DAFB?logo=react&style=for-the-badge)
![useState](https://img.shields.io/badge/-useState%20Working-green?style=for-the-badge)
![ReactHooks](https://img.shields.io/badge/-React%20Hooks-blueviolet?style=for-the-badge)

This guide explains the **internal working of `useState`** in React—how React manages state under the hood and triggers re-renders.

---

## 🔄 What is `useState`?

`useState` is a React Hook that allows function components to hold **state values**.

```js
const [state, setState] = useState(initialValue);
```

- `state` is the current value.
- `setState` is the function used to change that value.
- Changing state re-renders the component with the new state.

---

## 🧪 What Happens Behind the Scenes?

1. **Initial render:**

   - React sets up a **hook array** internally.
   - Each call to `useState` is stored in a specific index in that array.
   - Example: `useState(0)` stores 0 in index 0.

2. **State update:**

   - When you call `setState(newValue)`, React updates the value at the same index in the array.
   - Then it **schedules a re-render**.

3. **Re-render:**

   - The component is called again.
   - The `useState` call returns the **updated value** from the hook array.

---

## 📦 Internal Hook Mechanism (Conceptual)

React tracks hooks using an internal structure like:

```js
let hooks = []; // one per component instance
let index = 0;  // reset to 0 on every render

function useState(initialValue) {
  const currentIndex = index;

  if (hooks[currentIndex] === undefined) {
    hooks[currentIndex] = initialValue;
  }

  function setState(newValue) {
    hooks[currentIndex] = newValue;
    renderComponent(); // triggers re-render
  }

  index++;
  return [hooks[currentIndex], setState];
}
```

> This is just a simplified simulation for understanding.

---

## ⚠️ Why Order Matters

Since hooks rely on array indexing:
- You must **call them in the same order** on every render.
- You **can’t conditionally call** `useState` or any other hook.

✅ **Correct:**

```js
const [count, setCount] = useState(0);
const [name, setName] = useState("React");
```

❌ **Incorrect:**

```js
if (someCondition) {
  const [count, setCount] = useState(0); // ❌ breaks hooks order
}
```

---

## 🧠 How Re-render Happens

1. `setState(newValue)` is called.
2. React updates the hook’s value in memory.
3. It triggers the virtual DOM diffing.
4. React applies minimal changes to the real DOM.
5. Component function runs again, and new state values are returned.

---

## 💡 Tip: Functional Updates

If the new state depends on the old one:

```js
setState(prev => prev + 1);
```

This ensures the update is based on the latest value, especially in async scenarios.

---

## 🔁 Summary of Lifecycle

| Step | Description |
|------|-------------|
| 1️⃣ useState() | Initializes and stores a value |
| 2️⃣ setState() | Updates the value |
| 3️⃣ Re-render | Component runs again |
| 4️⃣ New Value | New state is returned from useState |

---

## 🏷️ Badges

![State Management](https://img.shields.io/badge/-State%20Management-00C853?style=flat-square)
![Hooks Internals](https://img.shields.io/badge/-Hooks%20Internals-FF9800?style=flat-square)
![Virtual DOM](https://img.shields.io/badge/-Virtual%20DOM-4CAF50?style=flat-square)

---

## 🙌 Author

**Ritik Raj**  
Explaining React Hooks Internals for Real Understanding 🚀

