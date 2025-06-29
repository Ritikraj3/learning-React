# 20_useEffect-in-react

```js
useEffect(() => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => {
      setCountriesData(data);
    });
}, []);
```

Let me now **deep dive** into the `useEffect` hook — explaining **everything** you need to master it 🔍

---

## 🔷 1. What is `useEffect`?

`useEffect` is a **React Hook** that lets you perform **side effects** in function components.

> **Side Effects** = any operation that affects something outside the scope of the current function, like:

* Fetching data from an API
* Setting up subscriptions
* Changing the DOM
* Using `setTimeout` / `setInterval`
* Logging, analytics, etc.

In class components, we used:

* `componentDidMount()`
* `componentDidUpdate()`
* `componentWillUnmount()`

In functional components, **`useEffect` replaces all of those**.

---

## ❓ 2. Why is `useEffect` used?

To make React components interact with **external systems** or **do things after render**, because React's rendering is pure and shouldn't contain side effects.

**Use it when:**

* You need to **fetch data**
* You want to **respond to state or props changes**
* You want to **cleanup resources** (timers, subscriptions)
* You want to **run code once** after the initial render

---

## 📅 3. When to use `useEffect`?

There are 3 typical cases:

| Case                     | Dependency Array  | When It Runs                |
| ------------------------ | ----------------- | --------------------------- |
| Run once (on mount)      | `[]`              | After initial render        |
| Run on state/prop change | `[dep1, dep2]`    | When any dependency changes |
| Run on every render      | *(no second arg)* | Every render cycle          |

---

## ⚙️ 4. How does `useEffect` work internally?

* After the component renders, React runs the effect **asynchronously**.
* If you return a function inside `useEffect`, React treats it as a **cleanup function** and runs it:

  * Before running the next effect (in update)
  * Or before component unmounts

React internally tracks the **dependencies** to decide whether to run the effect again or not.

```js
useEffect(() => {
  // effect logic

  return () => {
    // cleanup logic
  };
}, [dependencies]); // React shallow compares these to last run
```

---

## 💻 5. How to use it (with Examples)

### ✅ Example 1: Run Once on Mount (your case)

```js
useEffect(() => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => setCountriesData(data));
}, []); // Empty array = run once after initial render
```

### ✅ Example 2: Run on state change

```js
useEffect(() => {
  console.log("Query changed to:", query);
}, [query]);
```

### ✅ Example 3: Cleanup side effects

```js
useEffect(() => {
  const intervalId = setInterval(() => {
    console.log("Tick");
  }, 1000);

  return () => {
    clearInterval(intervalId); // cleanup when component unmounts
  };
}, []);
```

---

## ⚠️ 6. Common Mistakes

1. **Forgetting the dependency array** — causes effect to run on every render.
2. **Wrong dependencies** — leads to stale data or missed updates.
3. **Using async directly in `useEffect`** (❌)

   ```js
   useEffect(async () => { ... }); // ❌ Don't do this
   ```

   ✅ Instead:

   ```js
   useEffect(() => {
     async function fetchData() {
       const res = await fetch(...);
       ...
     }
     fetchData();
   }, []);
   ```
4. **Modifying state inside useEffect without dependencies** — may cause infinite loops.

---

## ✅ 7. Best Practices

* ✅ **Use multiple `useEffect`s** for unrelated logic (separation of concerns)
* ✅ Always define dependencies accurately — enable **eslint-plugin-react-hooks**
* ✅ **Avoid memory leaks** — always clean up timers, listeners, etc.
* ✅ Use a custom hook (`useFetch`, etc.) for repeated patterns

---

## 🧠 Bonus Tips:

### 👉 Optional Chaining for safety:

```js
capital={country.capital?.[0]} // good use!
```

### 👉 Conditional logic:

Avoid putting conditions inside `useEffect` when possible — instead structure dependency arrays and external flags.

### 👉 Debouncing with `useEffect`:

Great for search filters, etc.

---

## 🧾 Summary Table

| Concept              | Example                                 | Notes                       |
| -------------------- | --------------------------------------- | --------------------------- |
| Mount-only effect    | `useEffect(() => {...}, [])`            | Like `componentDidMount`    |
| Watch a value        | `useEffect(() => {...}, [query])`       | Like `componentDidUpdate`   |
| Cleanup              | `return () => {...}` inside `useEffect` | Like `componentWillUnmount` |
| Avoid infinite loops | Use correct dependencies                | Overlooked often            |

---

## ✅ You're using `useEffect` correctly!

In your component:

```js
useEffect(() => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => {
      setCountriesData(data);
    });
}, []);
```

This:

* Fetches data only once when the component mounts ✅
* Uses `setCountriesData` to update the state ✅
* Triggers rerender to show filtered country cards ✅

---
