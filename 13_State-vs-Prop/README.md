Here's the complete and detailed README content on **State and Props in React**, written for easy readability and practical understanding. You can copy-paste it into a `README.md` file.

---

# 📦 State vs Props in React

![React](https://img.shields.io/badge/-React-61DAFB?logo=react\&style=for-the-badge)
![State](https://img.shields.io/badge/-State-green?style=for-the-badge)
![Props](https://img.shields.io/badge/-Props-blue?style=for-the-badge)
![ReactConcepts](https://img.shields.io/badge/-Core%20Concepts-ff9800?style=for-the-badge)

Understanding the difference between **State** and **Props** is crucial for building dynamic and maintainable React applications. This guide breaks down their purpose, behavior, and use cases in a clean and easy-to-understand format.

---

## 🔄 What is State in React?

**State** is a built-in object used to store **local, dynamic data** in a component.

### 📌 Key Characteristics of State:

* Local to the component
* Can change over time
* Triggers re-renders when updated
* Managed using `useState` in functional components

### ✅ Example:

```jsx
import React, { useState } from "react";

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

🧠 Here, `count` is internal to `Counter` and updates only affect that component.

---

## 📬 What are Props in React?

**Props** (short for **properties**) are used to **pass data from parent to child** components.

### 📌 Key Characteristics of Props:

* Read-only (immutable)
* Passed down from parent to child
* Enables reusable components
* Accessed via the component’s arguments

### ✅ Example:

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return <Welcome name="Ritik" />;
}
```

🧠 Here, `name="Ritik"` is passed from `App` to `Welcome` as a prop.

---

## 🧠 Major Differences Between State and Props

| Feature        | State                            | Props                                  |
| -------------- | -------------------------------- | -------------------------------------- |
| Ownership      | Managed by the component itself  | Received from parent component         |
| Mutability     | Mutable (via `setState`)         | Immutable                              |
| Purpose        | Handle internal data             | Receive external data                  |
| Usage          | With `useState()` hook           | Passed via component attributes        |
| Component Type | Mostly in interactive components | In reusable, presentational components |

---

## 🔄 Using Both Together

```jsx
function Welcome({ name }) {
  return <p>Welcome, {name}!</p>;
}

function App() {
  const [user, setUser] = useState("Ritik");

  return <Welcome name={user} />;
}
```

* `App` holds the **state**
* `Welcome` receives that data as **props**

This is the core of parent-child component communication.

---

## 📛 Common Mistakes

| Mistake                                | Why It's Wrong                           |
| -------------------------------------- | ---------------------------------------- |
| ❌ Trying to change props in child      | Props are read-only                      |
| ❌ Using props as state without copying | Leads to unexpected side-effects         |
| ❌ Confusing source of data             | Makes debugging harder and logic unclear |

---

## ✅ Best Practices

* Use **props** to make components reusable and configurable
* Use **state** to manage data that changes during user interaction
* Keep components **pure** when possible by relying only on props

---

## 🧠 Summary

| Concept  | State                      | Props                    |
| -------- | -------------------------- | ------------------------ |
| Editable | ✅ Yes                      | ❌ No                     |
| Defined  | Inside the component       | By the parent component  |
| Purpose  | To handle dynamic behavior | To pass data to children |
| Tools    | useState, useReducer, etc. | JSX attributes           |

---

## 🏷️ Badges

![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square)
![Props](https://img.shields.io/badge/-Props-blue?style=flat-square)
![State](https://img.shields.io/badge/-State-green?style=flat-square)
![Component Communication](https://img.shields.io/badge/-Component%20Communication-orange?style=flat-square)

---

## 🙌 Author

**Ritik Raj**
Frontend Developer | Learning to Master the Core Concepts of React

---

