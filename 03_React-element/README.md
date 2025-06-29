
# ⚛️ React Element – Manual Element Creation Without JSX

This project demonstrates how to create a React UI **without using JSX**, relying instead on the fundamental `React.createElement()` method. This method shows how React elements are created under the hood and gives you deeper insight into React’s core behavior.

---

## 📌 What is a React Element?

A **React Element** is a plain JavaScript object that describes a DOM node and its attributes. It is the smallest building block of a React application.

**JSX** (which looks like HTML in JavaScript) is just syntactic sugar. Underneath, JSX is compiled to `React.createElement()` calls.

---

## 🔍 Project Breakdown

This project builds a nested component structure using `React.createElement()` to create a:
- Container `<div>`
- `<section>` with:
  - A paragraph `<p>`
  - An image `<img>` with inline styling
  - A form with two labeled inputs

### 🧱 1. Creating the Main Container

```js
const container = React.createElement(
  'div',
  { className: 'container', id: 'container' },
  [/* children go here */]
);
```

This code creates a `<div>` element with class and ID attributes, and it will act as the main container.

---

### 🧩 2. Nested Section with Content

Inside the container, we use a `<section>` that contains multiple nested elements:

```js
React.createElement('section', { key: 1 }, [
  React.createElement('p', { key: 2 }, 'I am learning React.js'),
  React.createElement('img', {
    key: 3,
    style: { width: 200, backgroundColor: 'black', borderRadius: 8, padding: 32 },
    src: "https://upload.wikimedia.org/wikipedia/commons/3/30/React_Logo_SVG.svg"
  }),
  // form goes here
]);
```

- The `<p>` element displays simple text.
- The `<img>` tag includes inline styles for width, background, border radius, and padding.
- Each child is wrapped inside the `section` using an array.

---

### 🧾 3. Adding a Form with Input Fields

```js
React.createElement('form', { key: 1 }, [
  React.createElement('div', { className: 'input-container' }, [
    React.createElement('label', { htmlFor: 'username', style: { cursor: 'pointer' } }, 'username'),
    React.createElement('input', { id: 'username' })
  ]),
  React.createElement('div', { className: 'input-container' }, [
    React.createElement('label', { htmlFor: 'password', style: { cursor: 'pointer' } }, 'username'),
    React.createElement('input', { id: 'password', type: 'password' })
  ])
]);
```

Each `div` inside the form contains a `label` and an `input`. The `htmlFor` and `id` attributes are used for accessibility and linking the label to the input.

---

## 🛠️ Rendering the Element to the DOM

```js
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(container);
```

This part uses React 18+ syntax to mount your React element tree to the actual DOM.

---

## 🔁 JSX Equivalent

JSX equivalent of the above manual code:

```jsx
<div className="container" id="container">
  <section>
    <p>I am learning React.js</p>
    <img
      style={{ width: 200, backgroundColor: 'black', borderRadius: 8, padding: 32 }}
      src="https://upload.wikimedia.org/wikipedia/commons/3/30/React_Logo_SVG.svg"
    />
    <form>
      <div className="input-container">
        <label htmlFor="username">username</label>
        <input id="username" />
      </div>
      <div className="input-container">
        <label htmlFor="password">username</label>
        <input id="password" type="password" />
      </div>
    </form>
  </section>
</div>
```

---

## 📦 Advanced Tip – Plain Object Representation

Every React element is internally represented as a plain object like this:

```js
const h2 = {
  $$typeof: Symbol.for('react.element'),
  type: "h2",
  ref: null,
  props: {
    className: "subheading",
    children: "Hello React"
  }
};
```

This is what React uses under the hood.

---

## 🧠 Why Use `React.createElement()`?

| Benefit | Why it matters |
|---------|----------------|
| 📖 Learn Internals | Understand what JSX compiles down to. |
| 🧰 Tool Building | Useful when writing custom tools/libraries. |
| 🐞 Debugging | Helpful when JSX is not allowed or misbehaving. |

---

## 🏁 Getting Started

1. Add this script in an HTML file with a `div#root`.
2. Include React and ReactDOM from CDN or a bundler like Parcel/webpack.
3. Copy your code block and run it.

---

## 🙌 Author

**Ritik Raj**  
Beginner React Developer | Exploring Fundamentals

---

## 🏷️ Badges

![React](https://img.shields.io/badge/-React.js-61DAFB?logo=react&logoColor=white&style=flat-square)
![JS](https://img.shields.io/badge/-Vanilla%20JS-F7DF1E?logo=javascript&logoColor=black&style=flat-square)
![No JSX](https://img.shields.io/badge/-No%20JSX-black?style=flat-square&logo=react)
