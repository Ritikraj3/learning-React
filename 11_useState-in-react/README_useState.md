
# 🔄 useState Hook in React.js

![React](https://img.shields.io/badge/-React-61DAFB?logo=react&style=for-the-badge)
![Hooks](https://img.shields.io/badge/-React%20Hooks-blueviolet?style=for-the-badge)
![useState](https://img.shields.io/badge/-useState-green?style=for-the-badge)

This README explains everything about the `useState` hook in React—one of the most essential hooks for adding state to functional components.

---

## 🧠 What is `useState`?

`useState` is a **React Hook** that lets you add **state** to your functional components. It allows your component to "remember" values across renders and update the UI whenever the state changes.

### 🔧 Syntax

```jsx
const [state, setState] = useState(initialValue);
```

- `state`: The current value of the state.
- `setState`: A function to update the state.
- `initialValue`: The default value when the component first renders.

---

## ✅ Basic Counter Example

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

### 🔍 Breakdown

- `useState(0)`: Initializes `count` with 0.
- `setCount(count + 1)`: Updates the count and re-renders the component.

---

## 🎯 Why useState is Important

| Feature | Benefit |
|---------|---------|
| ✅ Add local state | Without converting to a class component |
| 🔁 Trigger re-renders | Automatically re-renders UI on change |
| ⚡ Multiple states | Use multiple `useState` calls for complex UIs |

---

## 🧩 Handling Strings and Objects

### 📄 String State

```jsx
const [name, setName] = useState("Ritik");
```

```jsx
<input value={name} onChange={(e) => setName(e.target.value)} />
```

### 📦 Object State

```jsx
const [user, setUser] = useState({ name: "Ritik", age: 22 });

const updateName = () => {
  setUser(prev => ({ ...prev, name: "Raj" }));
};
```

> Always **spread the previous object** to avoid overwriting other properties.

---

## 📋 useState with Arrays

```jsx
const [items, setItems] = useState([]);

const addItem = () => {
  setItems(prev => [...prev, { id: items.length, value: Math.random() }]);
};
```

> ✅ Don’t mutate the array directly. Always use `...prev` to copy.

---

## 💡 Updating State Safely

If your next state depends on the previous one, always use a function:

```jsx
setCount(prevCount => prevCount + 1);
```

> Safer and avoids bugs due to asynchronous updates.

---

## 🚫 Common Mistakes

| Mistake | Why it’s wrong |
|--------|------------------|
| ❌ Directly modifying state | `count++` won’t re-render |
| ❌ Not using `setState` | React won’t know the state changed |
| ❌ Forgetting async nature | Updates don’t reflect immediately |

---

## 🛠 Best Practices

- ✅ Use separate state variables for unrelated data
- ✅ Use updater function when depending on previous state
- ✅ Keep state minimal and clean

---

## 🔄 When useState Re-renders?

A component **re-renders** when:
- You call the setter function (e.g., `setCount()`)
- The new value is **different** from the old one

> Note: If the value doesn’t change, React skips re-rendering for performance.

---

## 🧠 Summary

| Concept | What it Does |
|--------|----------------|
| `useState()` | Declares state in a function component |
| `setState()` | Updates the state value |
| Re-rendering | Happens when state changes |
| Hooks | Must be called at top level of the component |

---

## 🏷️ Badges

![React](https://img.shields.io/badge/-React-61DAFB?logo=react&style=flat-square)
![useState](https://img.shields.io/badge/-useState-green?style=flat-square)
![Hooks](https://img.shields.io/badge/-React%20Hooks-blueviolet?style=flat-square)
![Functional Components](https://img.shields.io/badge/-Functional%20Component-orange?style=flat-square)

---

## 🙌 Author

**Ritik Raj**  
Frontend Developer | Learning and Sharing React Hooks Everyday

