Absolutely, Ritik! 🌐
Let’s now break down:

# 📦 Passing Data with React Router

(Your **project reference** will be added subtly as a hidden **Easter egg** 👀)

---

## 🔍 What Does "Passing Data with React Router" Mean?

React Router is used to **navigate between components**, but sometimes we need to **pass extra data** while routing — like:

* A country name or ID to load its detail page
* A search term or filter applied before navigation
* A product or user object to the detail view (without fetching again)

React Router gives us several tools to **pass and access this data safely** between pages/components.

---

## ❓ Why Pass Data Between Routes?

✅ **Avoid Re-fetching**: Pass already-available data (e.g., object) to save extra network calls
✅ **Maintain context**: Keep UI state like search filters, pagination, or selected tab
✅ **Improve UX**: Faster rendering, fewer delays

---

## 📅 When to Use This?

| Scenario                          | When You Should Pass Data                     |
| --------------------------------- | --------------------------------------------- |
| Navigating from a list to details | e.g., from `/countries` to `/countries/india` |
| Retaining UI state                | Keep filters/sort/search active across routes |
| Avoiding redundant API calls      | If you already have the data in memory        |
| Sending additional metadata       | Like source page, user session, etc.          |

---

## 💻 Ways to Pass Data in React Router

### ✅ 1. URL Parameters (`/route/:id`)

**✅ Most common. Use when data is tied to the URL itself.**

#### 🧠 How it Works

```jsx
<Route path="/country/:name" element={<CountryDetail />} />
```

Navigate with:

```jsx
<Link to={`/country/${country.name.common}`}>{country.name.common}</Link>
```

Access inside `CountryDetail`:

```js
import { useParams } from 'react-router-dom';

const { name } = useParams(); // 'India'
```

✅ Used in your project to pass the **country name** from CountryCard to CountryDetail — nice hidden egg 🥚

---

### ✅ 2. **Search Params / Query Strings** (`?key=value`)

Great for filters, sorters, page numbers.

#### 📦 Example

```jsx
<Link to={`/products?category=shoes&sort=price`} />
```

Access in component:

```js
import { useSearchParams } from "react-router-dom";

const [params] = useSearchParams();
const category = params.get("category"); // "shoes"
const sort = params.get("sort");         // "price"
```

✅ Works well when users should see or share the filter state in URL

---

### ✅ 3. **Route State (`useNavigate` / `Link state`)**

Use when you want to **pass non-URL data** (like objects).

#### 🧠 How it Works

```jsx
// When navigating
<Link to="/details" state={{ user: userObject }} />
```

Or programmatically:

```js
navigate("/details", { state: { user: userObject } });
```

Inside `/details`:

```js
import { useLocation } from 'react-router-dom';

const { state } = useLocation();
console.log(state.user); // userObject
```

✅ Useful when you don’t want to show data in URL
⚠️ But **data will reset on page reload** — not persisted like URL params

---

### ✅ 4. **Context API or Redux (Global State)**

When navigating between **unrelated routes or deep components**, it's better to **lift state globally** and access it anywhere.

For example:

```js
// AppContext.jsx
export const AppContext = createContext();

// wrap in App.jsx
<AppContext.Provider value={{ selectedCountry }}>
  <Routes>...</Routes>
</AppContext.Provider>

// Access anywhere
const { selectedCountry } = useContext(AppContext);
```

✅ Use for data like: theme, user session, cart, active country
❌ Not recommended for one-time lightweight navigation

---

## ⚠️ Common Mistakes

| Mistake                                   | Fix                                             |
| ----------------------------------------- | ----------------------------------------------- |
| Trying to access `state` without checking | Always check `if (state)` before using          |
| Reloading the page after using `state`    | Use `params` or `query` if you need persistence |
| Hardcoding paths                          | Use route helpers or variables                  |
| Overusing context for route-specific data | Prefer `state` or `params` when localized       |

---

## ✅ Best Practices

* 🔑 Use **params** for identifying resources (`/product/:id`)
* 🧾 Use **query strings** for filters/searches (`?search=laptop`)
* 📦 Use **state** for sending temporary complex data (objects, session flags)
* 🌐 Use **context or Redux** when state must live across many components/pages
* 🚫 Don’t mix state & URL for same data — leads to bugs

---

## 👀 Easter Egg Reference (In Project)

In your app:

### ✅ You pass country data via **params**:

From `CountryCard.jsx`:

```jsx
<Link className="country-card" to={`/${name}`}>
```

To `CountryDetail.jsx`:

```jsx
const { country } = useParams();
fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
```

🥚 That's a textbook use of **route params** for a detail view. Excellent real-world use!

---

## 🧾 Summary Table

| Method            | Syntax               | Best For               | Persistent? |
| ----------------- | -------------------- | ---------------------- | ----------- |
| **Params**        | `/route/:id`         | Identifiers            | ✅           |
| **Search Params** | `?key=value`         | Filters, search        | ✅           |
| **State**         | `{ state: { obj } }` | Temporary, object data | ❌           |
| **Context/Redux** | `useContext()`       | Shared/global state    | ✅           |

---