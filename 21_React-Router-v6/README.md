

## 🚦 React Router – Full Guide

---

### 🔍 What is React Router?

**React Router** is a standard routing library for React.
It enables navigation between views or pages in a **Single Page Application** without refreshing the browser.

> Without React Router, clicking a link would reload the entire page (default browser behavior). With it, navigation happens inside React — fast and seamless.

---

### ❓ Why Use React Router?

* 📄 Turn your app into **multi-page UI** (Home, About, Contact, etc.)
* 🔁 Allow dynamic routing (e.g. `/product/:id`)
* 💡 Handle nested routes, protected routes, 404s, etc.
* 🔄 Maintain **SPA behavior** with **no page reload**

---

### 📅 When to Use It?

* Your app has more than one view/page
  e.g., Home, Products, Contact, Login, etc.

* You want:

  * Links that don't reload the page
  * URL-based navigation
  * Access to route-specific data (`params`, `search`, etc.)

---

### ⚙️ How React Router Works Internally

React Router:

1. Uses **history API** to manipulate browser URLs without reloading.
2. Watches route changes via `BrowserRouter`.
3. Matches routes via `Route path` against the current URL.
4. Renders the associated component.
5. Allows navigation via `Link` (instead of `<a>`).

---

### 💻 How to Use React Router (with Examples)

#### ✅ Step 1: Install

```bash
npm install react-router-dom
```

---

#### ✅ Step 2: Setup Routing

```jsx
// App.jsx or main.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```

---

#### ✅ Step 3: Use `Link` Instead of `<a>`

From your current `Header.jsx`:

```jsx
<a href="./">Where in the world?</a> // ❌ Causes full reload
```

Convert to:

```jsx
import { Link } from 'react-router-dom';

<Link to="/">Where in the world?</Link> // ✅ SPA behavior
```

---

#### ✅ Step 4: Dynamic Routing

```jsx
<Route path="/country/:name" element={<CountryDetails />} />
```

You can now access the parameter via:

```jsx
import { useParams } from 'react-router-dom';
const { name } = useParams();
```

---

### 🔁 Routing Example Flow

```plaintext
User clicks "Contact" 👉 URL changes to /contact 👉 React Router finds match 👉 renders <Contact />
```

---

### ⚠️ Common Mistakes

| Mistake                     | Solution                                             |
| --------------------------- | ---------------------------------------------------- |
| Using `<a href="">`         | Use `<Link to="">` instead                           |
| Missing `BrowserRouter`     | Wrap your routes inside `BrowserRouter`              |
| Wrong `path` or `element`   | Make sure `path` and `element` props match correctly |
| Trying to navigate manually | Use `useNavigate()` instead of `window.location`     |

---

### ✅ Best Practices

* 🧭 Use `Link` or `NavLink` for internal routing
* 🔁 Use `useNavigate()` for programmatic navigation
* 🧱 Group related routes in nested `Route` blocks
* 🛡️ Use wrappers (e.g. `PrivateRoute`) for auth-protected routes
* 📦 Lazy load routes with `React.lazy()` and `Suspense` for performance

---

### ✨ Bonus Features of React Router

| Feature              | Use                            |
| -------------------- | ------------------------------ |
| `useParams()`        | Get dynamic route segments     |
| `useNavigate()`      | Programmatically change routes |
| `useLocation()`      | Access current location info   |
| `Navigate` component | Redirect users                 |
| `Outlet`             | Render nested routes           |

---

### 🧾 Summary Table

| Feature        | Syntax                         | Purpose                   |
| -------------- | ------------------------------ | ------------------------- |
| Router Wrapper | `<BrowserRouter>`              | Enables routing           |
| Define Routes  | `<Route path="" element={} />` | Map URL to component      |
| Nav Link       | `<Link to="">`                 | Internal navigation       |
| Params         | `useParams()`                  | Get dynamic segments      |
| Navigate       | `useNavigate()`                | Navigate programmatically |

---

### ✅ You’re On Track

Your `Contact.jsx`:

```jsx
export default function Contact() {
  return <div>Contact Us</div>;
}
```

Once you integrate this with a router in `App.jsx` or `main.jsx`, you're building **multi-view SPA** behavior.

---

## 🔧 What You Should Do Next:

* Replace `<a href="./">` in `Header.jsx` with `<Link>` from `react-router-dom`
* Create a main routing file (`App.jsx`) and include `BrowserRouter` + `Routes`
* Define paths for `/`, `/contact`, etc.
* Try dynamic routes like `/country/:name`

---