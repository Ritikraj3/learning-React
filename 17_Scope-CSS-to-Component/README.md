Here’s a fully explained and structured **README** for the topic **Scoped CSS to Component in React**, covering:

* Why we need scoped CSS
* How to achieve it (different methods)
* Best practices
* Code examples

---

# 🎯 Scoped CSS to Component in React

![React](https://img.shields.io/badge/-React-61DAFB?logo=react\&style=for-the-badge)
![Scoped CSS](https://img.shields.io/badge/-Scoped%20CSS-blueviolet?style=for-the-badge)
![Component Styling](https://img.shields.io/badge/-Component%20Styling-green?style=for-the-badge)

---

## 🔍 What is Scoped CSS?

Scoped CSS means applying styles **only to a specific component**, without affecting others globally.

In traditional CSS, styles are **global** — one component’s CSS can unintentionally affect another.

> ❌ Bad practice:

```css
h1 {
  color: red;
}
```

> ✅ Scoped: Style only the element inside the `Button` component.

---

## 💡 Why Use Scoped CSS?

| Benefit                  | Description                                            |
| ------------------------ | ------------------------------------------------------ |
| 🛡 Prevent style leakage | Styles don’t affect other components                   |
| ♻️ Reusability           | Components can be used multiple times without conflict |
| 🎨 Easier maintenance    | You know exactly where styles live                     |
| 🚀 Encourages modularity | Matches the component-based philosophy of React        |

---

## 📦 Common Ways to Scope CSS in React

---

### 1️⃣ **CSS Modules** ✅ (Most Recommended)

* File should be named like: `Component.module.css`

```css
/* Button.module.css */
.button {
  background-color: royalblue;
  color: white;
  border: none;
  padding: 8px 16px;
}
```

```jsx
// Button.jsx
import styles from './Button.module.css';

function Button() {
  return <button className={styles.button}>Click Me</button>;
}
```

🧠 ✅ **Fully scoped** — no name collisions, no global effect.

---

### 2️⃣ **Styled Components** (Using `styled-components` library)

```bash
npm install styled-components
```

```jsx
import styled from 'styled-components';

const Button = styled.button`
  background-color: royalblue;
  color: white;
  padding: 8px 16px;
  border: none;
`;

function App() {
  return <Button>Click Me</Button>;
}
```

🧠 ✅ Styles are scoped automatically by generating unique class names.

---

### 3️⃣ **Inline Styles** (Not ideal for everything)

```jsx
function AlertBox() {
  return (
    <div style={{ backgroundColor: "yellow", padding: "10px" }}>
      This is an alert
    </div>
  );
}
```

⚠️ Works only for simple, static styling.
❌ Cannot handle pseudo-selectors (`:hover`) or media queries.

---

### 4️⃣ **Tailwind CSS** (Utility-first classes scoped by usage)

```html
<button className="bg-blue-500 text-white px-4 py-2 rounded">
  Click Me
</button>
```

✅ Tailwind classes apply **only to that element**, avoiding scope pollution.

---

## 📁 Folder Example Using CSS Module

```
/src
  └── components
        └── Card/
              ├── Card.jsx
              ├── Card.module.css
```

---

## ⚠️ What to Avoid

| Mistake                       | Why it’s bad                            |
| ----------------------------- | --------------------------------------- |
| ❌ Using plain `.css` files    | Styles can bleed into other components  |
| ❌ Same class names everywhere | Global clashes lead to unpredictable UI |
| ❌ Styling from `App.css` only | Defeats the purpose of component scope  |

---

## 🧠 Best Practices

* ✅ Use **CSS Modules** or **Styled Components**
* ✅ Keep styling in the same folder as component
* ✅ Use meaningful class names (`btnPrimary`, `cardWrapper`)
* ✅ Don’t rely on `App.css` for component-level styles

---

## 🧪 BONUS: Custom Naming in CSS Modules

```css
/* Header.module.css */
.title {
  color: red;
}
```

```jsx
<h1 className={styles['title']}>Welcome</h1>
```

✅ You can safely use `"title"` in multiple modules without a clash.

---

## 🏁 Summary Table

| Method            | Scoped? | Dynamic Styling | Media Queries | Recommended |
| ----------------- | ------- | --------------- | ------------- | ----------- |
| CSS Modules       | ✅ Yes   | ❌ No            | ✅ Yes         | ✅ Best      |
| Styled-components | ✅ Yes   | ✅ Yes           | ✅ Yes         | ✅ Advanced  |
| Inline Styles     | ✅ Yes   | ✅ Limited       | ❌ No          | ⚠️ Limited  |
| Tailwind CSS      | ✅ Yes   | ❌ (via classes) | ✅ Yes         | ✅ Modular   |

---

## 🏷️ Badges

![CSS Modules](https://img.shields.io/badge/-CSS%20Modules-blue?style=flat-square)
![Scoped Styles](https://img.shields.io/badge/-Scoped%20Styles-green?style=flat-square)
![Tailwind](https://img.shields.io/badge/-Tailwind%20CSS-purple?style=flat-square)
![Styled Components](https://img.shields.io/badge/-Styled--components-pink?style=flat-square)

---

## 🙌 Author

**Ritik Raj**
Frontend Developer | Writing modular, scoped, and maintainable styles with React

---

Would you like this README in downloadable `.md` format?
Or shall I move on to the next topic — maybe **List Rendering**, **Keys**, or **useEffect Hook**?
