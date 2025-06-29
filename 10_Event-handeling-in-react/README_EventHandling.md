
# 🖱️ Event Handling in React

![React](https://img.shields.io/badge/-React-61DAFB?logo=react&style=for-the-badge)
![Events](https://img.shields.io/badge/-Event%20Handling-blue?style=for-the-badge)
![User Interaction](https://img.shields.io/badge/-User%20Interaction-green?style=for-the-badge)

This README covers **Event Handling in React**, a core concept for creating interactive applications. Whether it’s a button click, form submission, or keyboard press—React allows you to handle these events efficiently using synthetic event objects.

---

## 🎯 What is Event Handling in React?

**Event handling** in React means writing functions that run in response to **user actions**, like clicks, key presses, and form submissions.

Unlike traditional DOM event handling, React wraps events into a **SyntheticEvent**, which behaves consistently across all browsers.

---

## ✅ Basic Event Example

```jsx
function App() {
  function handleClick() {
    alert("Button was clicked!");
  }

  return <button onClick={handleClick}>Click Me</button>;
}
```

### Explanation:

- `onClick` is a **camelCase** prop (not lowercase like HTML).
- `handleClick` is a function that runs when the button is clicked.
- React passes a **SyntheticEvent** object to the handler.

---

## 🧠 React SyntheticEvent

React uses a **SyntheticEvent** to normalize events across all browsers.

```jsx
function handleClick(e) {
  console.log(e.type); // "click"
}
```

| Feature         | Description                     |
|-----------------|---------------------------------|
| SyntheticEvent  | Wrapper around native events    |
| Consistent      | Works identically in all browsers |
| Reusable        | Pooled and reused for performance |

---

## 🖊️ Handling Input and Form Events

```jsx
function App() {
  const handleChange = (e) => {
    console.log("Input value:", e.target.value);
  };

  return <input type="text" onChange={handleChange} />;
}
```

### Explanation:

- `onChange` triggers every time the input value changes.
- `e.target.value` contains the input's current value.

---

## ✍️ Form Submit Example

```jsx
function Form() {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    console.log("Form submitted!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <button type="submit">Submit</button>
    </form>
  );
}
```

### Key Point:

- `e.preventDefault()` is necessary to **stop default form behavior**.

---

## 🎯 Passing Arguments to Handlers

```jsx
function App() {
  const handleClick = (name) => {
    alert(`Hello, ${name}`);
  };

  return <button onClick={() => handleClick("Ritik")}>Greet</button>;
}
```

- Use an **arrow function** to pass custom arguments.
- Avoid directly invoking the function in the `onClick` (don’t use `onClick={handleClick("Ritik")}` ❌).

---

## 🔄 Event Binding with `this` (for class components)

```jsx
class MyComponent extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("this is", this);
  }

  render() {
    return <button onClick={this.handleClick}>Click</button>;
  }
}
```

---

## 🧠 Common Event Types

| Event          | Description                       |
|----------------|-----------------------------------|
| `onClick`      | Fires when an element is clicked  |
| `onChange`     | Fires when input value changes    |
| `onSubmit`     | Triggers form submission          |
| `onKeyDown`    | Key is pressed down               |
| `onMouseOver`  | Mouse hovers over an element      |
| `onFocus`      | Element receives focus            |
| `onBlur`       | Element loses focus               |

---

## 🔒 Best Practices

- ✅ Keep handler functions clean and descriptive.
- ✅ Use arrow functions to pass arguments safely.
- ❌ Don’t mutate DOM directly—let React control the UI.
- ✅ Use `e.preventDefault()` when working with forms.

---

## 🏷️ Badges

![React](https://img.shields.io/badge/-React-61DAFB?logo=react&style=flat-square)
![SyntheticEvent](https://img.shields.io/badge/-SyntheticEvent-orange?style=flat-square)
![User Input](https://img.shields.io/badge/-Form%20and%20Input-purple?style=flat-square)
![Best Practices](https://img.shields.io/badge/-Best%20Practices-success?style=flat-square)

---

## 🙌 Author

**Ritik Raj**  
Frontend Developer | Writing Clean and Interactive React Apps

