
However, here’s the complete **README content for the topic: Images in React**, including your example using `new URL(..., import.meta.url).href`. You can copy and paste it into your `README.md` file:

---

# 🖼️ Working with Images in React

![React Image](https://img.shields.io/badge/-Images%20in%20React-61dafb?logo=react\&style=for-the-badge)

This README explains how to handle and render **images in React** apps using different methods, including the ES Module-based `URL` constructor technique commonly used with bundlers like Vite or Parcel.

---

## 🧾 How to Add and Use Images in React

There are different ways to use images in a React app, depending on how you structure your project and what tools (like Parcel, Vite, CRA) you use.

---

## ✅ Method 1: Direct Import (Common in CRA)

```jsx
import logo from './assets/images/logo.png';

function App() {
  return <img src={logo} alt="Logo" />;
}
```

* This method is simple and works when you are using Create React App or Webpack.
* The image is bundled by the build tool and given a unique URL for performance and caching.

---

## ✅ Method 2: Static Public Folder (in `public/`)

```jsx
// File: public/logo.png
function App() {
  return <img src="/logo.png" alt="Logo" />;
}
```

* Use this when the image does not need to be processed by the build tool.
* Useful for favicons or static branding assets.

---

## ✅ Method 3: Using `new URL(..., import.meta.url).href` (Vite/Parcel)

```js
const LeftArrow = new URL("../assets/images/left.png", import.meta.url).href;
const RightArrow = new URL("../assets/images/right.png", import.meta.url).href;
```

### 📌 What Does This Do?

* `new URL(path, import.meta.url)` creates a full URL relative to the current module.
* `.href` gets the actual file path, which is then passed to `<img src={...} />`.

### 🧠 Why Use This?

| Benefit            | Explanation                                     |
| ------------------ | ----------------------------------------------- |
| 🧠 Cleaner Imports | You don’t need to `import` multiple image files |
| 🚀 Great with Vite | Especially useful when assets are deeply nested |
| ✅ Fully Typed      | Helps in environments like TypeScript           |
| 📦 Fully Bundled   | Ensures the image is optimized by the bundler   |

---

## 🔁 Example Component Using All Techniques

```jsx
import React from 'react';
import logo from './assets/logo.png';

const left = new URL("./assets/left.png", import.meta.url).href;

function ImageGallery() {
  return (
    <div>
      <img src={logo} alt="Imported Logo" />
      <img src={left} alt="Left Arrow" />
      <img src="/favicon.ico" alt="Public Folder Image" />
    </div>
  );
}
```

---

## 🧪 Bonus: Inline SVG

You can also inline SVGs for better control:

```jsx
import { ReactComponent as LogoIcon } from './logo.svg';

function Header() {
  return <LogoIcon width={50} height={50} />;
}
```

---

## 🧠 Best Practices

| Tip                                  | Why                              |
| ------------------------------------ | -------------------------------- |
| ✅ Use `.href` for Vite/Parcel assets | Ensures correct relative paths   |
| ✅ Alt attributes                     | Accessibility for screen readers |
| ✅ Optimize images                    | Compress before bundling         |
| ✅ Use WebP if possible               | Better performance               |

---

## 🏷️ Badges

![React](https://img.shields.io/badge/-React-61DAFB?logo=react\&style=flat-square)
![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite\&logoColor=white\&style=flat-square)
![Images](https://img.shields.io/badge/-Images%20Handling-blue?style=flat-square)

---

## 🙌 Author

**Ritik Raj**
Frontend Developer | Working with Modern React and Asset Pipelines

---

[Back to Table of Contents](../README.md)