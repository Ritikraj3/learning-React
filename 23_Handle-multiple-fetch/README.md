Absolutely, Ritik! Let's now break down the topic:

# 🔄 **Handling Multiple Fetch Calls in React**

---

## 🔍 **What is "Handling Multiple Fetch Calls"?**

In React apps, you often need to:

* Fetch **data from more than one API**
* Fetch **dependent data** (one fetch result depends on another)
* Fetch **parallel data** and merge the results

> **Handling multiple fetches** means executing and managing multiple asynchronous data requests in a way that keeps your UI performant, correct, and easy to maintain.

---

## ❓ **Why Is It Used?**

You need this when:

* You're showing multiple kinds of data at once (e.g. weather + location)
* You depend on user/location data before fetching personalized content
* You want to show related data (e.g. user profile + user posts)

It's a **real-world requirement** in almost every project that consumes APIs.

---

## 📅 **When to Use It?**

Use **multiple fetches** when:

| Situation                                 | Example                            |
| ----------------------------------------- | ---------------------------------- |
| Fetching data from multiple endpoints     | `/users` and `/posts`              |
| One API depends on another                | `/users/:id` → `/posts?userId=...` |
| You need to combine APIs into one display | `/countries`, `/weather`, etc.     |
| Fetching options + data simultaneously    | `/categories`, `/products`         |

---

## ⚙️ **How It Works Internally**

Each `fetch()` returns a **Promise**.
To run multiple fetches:

### ✅ In **parallel** (independent fetches):

```js
Promise.all([fetch1, fetch2])
```

This runs both at the same time and waits for both to complete.

### ✅ In **sequence** (dependent fetches):

```js
fetch1.then(res1 => {
  return fetch2Using(res1)
})
```

---

## 💻 **How to Implement It in React**

### ✅ 1. Parallel Fetch (independent APIs)

```jsx
useEffect(() => {
  async function fetchData() {
    const [res1, res2] = await Promise.all([
      fetch("https://api1.com/data"),
      fetch("https://api2.com/data")
    ]);

    const data1 = await res1.json();
    const data2 = await res2.json();

    // Now you can use both
    setData1(data1);
    setData2(data2);
  }

  fetchData();
}, []);
```

---

### ✅ 2. Sequential Fetch (dependent APIs)

```jsx
useEffect(() => {
  async function fetchData() {
    const userRes = await fetch("https://api.com/user");
    const user = await userRes.json();

    const postsRes = await fetch(`https://api.com/posts?userId=${user.id}`);
    const posts = await postsRes.json();

    setUser(user);
    setPosts(posts);
  }

  fetchData();
}, []);
```

---

### ✅ 3. Combine Fetched Results

```jsx
useEffect(() => {
  async function fetchData() {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const countries = await res.json();

    const enrichedCountries = await Promise.all(
      countries.map(async (country) => {
        const weatherRes = await fetch(`https://api.weather.com/current?city=${country.capital}`);
        const weather = await weatherRes.json();

        return {
          ...country,
          weather
        };
      })
    );

    setCountries(enrichedCountries);
  }

  fetchData();
}, []);
```

⚠️ **Note:** The example above is expensive if many countries are returned — batch wisely.

---

## ⚠️ **Common Mistakes**

| Mistake                                          | Why it's bad                          | Fix                                    |
| ------------------------------------------------ | ------------------------------------- | -------------------------------------- |
| Calling multiple fetches without `Promise.all()` | They don’t wait for each other        | Use `Promise.all()`                    |
| Not handling loading and error states            | Leads to broken UI                    | Use loading/error state                |
| Fetching in loops without throttling             | Overloads the API                     | Use batching or conditional logic      |
| Sequential fetch when unnecessary                | Slower UI                             | Parallelize if fetches are independent |
| Using `await` in `map()` without `Promise.all()` | Results in nested unresolved promises | Wrap in `Promise.all()`                |

---

## ✅ **Best Practices**

* 📦 Wrap fetch logic inside an `async` function inside `useEffect`
* 🕐 Show loading indicators while fetching
* 🛡️ Use `try...catch` for error handling
* ✅ Cancel requests on unmount (with AbortController) if needed
* 🔁 Debounce or cache data if you’re refetching often
* ⚡ Optimize expensive concurrent fetches with batching or lazy loading

---

## 🧠 Bonus: Custom Hook for Multiple Fetches

```js
function useMultipleFetch(urls) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAll() {
      try {
        const responses = await Promise.all(urls.map(url => fetch(url)));
        const results = await Promise.all(responses.map(res => res.json()));
        setData(results);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchAll();
  }, [urls]);

  return { data, loading };
}
```

---

## 🧾 Summary Table

| Type             | Pattern                           | Use                                     |
| ---------------- | --------------------------------- | --------------------------------------- |
| Parallel Fetch   | `Promise.all([fetch1, fetch2])`   | Independent APIs                        |
| Sequential Fetch | `fetch1().then(res => fetch2())`  | Dependent APIs                          |
| Enrich data      | `map() + fetch` + `Promise.all()` | Merge multiple API results              |
| Custom Hook      | `useMultipleFetch()`              | Reusable pattern for multiple endpoints |

---
## ✅ You're Ready!

Whenever you build dashboards, country lists, weather apps, user pages — multiple fetches will be everywhere.

---
---
---
---

---

# 🔄 Handling **Multiple Fetch Calls in React**

**→ With your actual project code implementation!**

---

## 🔍 What is “Handling Multiple Fetch Calls”?

It means making **more than one API request** (usually asynchronously) inside your component and handling:

* ✅ Parallel requests (independent)
* ✅ Sequential/dependent requests (chained)
* ✅ Aggregated responses
* ✅ Side-effect management (e.g., loading, error, state updates)

---

## ❓ Why Use Multiple Fetch Calls?

In your **CountryDetail** component, you’re:

1. First fetching a **specific country’s full details**
2. Then, using its `borders` array (country codes) to **fetch details of each border country by code**
3. Finally, combining that data and rendering it

This is a **real-world use case**:

* One API result depends on another (chained/conditional fetch)
* You use `Promise.all` to batch-fetch multiple follow-up calls

---

## ✅ How You Did It – Your Project (Perfect Example)

Here’s the most important part of your code from `CountryDetail.jsx`:

```js
useEffect(() => {
  fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
    .then((res) => res.json())
    .then(([data]) => {
      setCountryData({
        name: data.name.common,
        nativeName: Object.values(data.name.nativeName)[0].common,
        population: data.population,
        region: data.region,
        subregion: data.subregion,
        capital: data.capital,
        flag: data.flags.svg,
        tld: data.tld,
        languages: Object.values(data.languages).join(", "),
        currencies: Object.values(data.currencies).map((c) => c.name).join(", "),
        borders: [],
      });

      if (!data.borders) data.borders = [];

      Promise.all(data.borders.map((border) =>
        fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((res) => res.json())
          .then(([borderCountry]) => borderCountry.name.common)
      ))
      .then((borders) => {
        setCountryData((prev) => ({ ...prev, borders }));
      });
    })
    .catch(() => setNotFound(true));
}, [countryName]);
```

---

## ⚙️ What’s Happening Internally?

### 🔁 Step-by-step:

1. First fetch:

   * Calls `name/${countryName}` → Gets complete data for one country.
2. On `.then()`, it extracts info and **sets initial state** (without borders).
3. Then:

   * If `borders` exist → loops over each border code.
   * Uses `Promise.all()` to **batch fetch each border’s full name** in parallel.
4. Finally:

   * Combines the names and updates the state with `setCountryData`.

✔️ This is a **sequential + parallel** fetch combo.

---

## ✅ Code Breakdown: Best Practices Shown in Your Code

| Feature            | Description                                | Your Code ✅ |
| ------------------ | ------------------------------------------ | ----------- |
| `useEffect`        | Side-effect for fetching                   | ✔️          |
| Initial fetch      | Uses `fetch()` to get country data         | ✔️          |
| Chained fetch      | Second fetch depends on first result       | ✔️          |
| Multiple fetch     | `Promise.all([...])` for border countries  | ✔️          |
| Final state update | Merge all data using functional `setState` | ✔️          |

---

## ⚠️ Common Mistakes You Avoided

* ❌ Not using `Promise.all()` for multiple fetches → You did ✔️
* ❌ Updating state too early → You waited for all borders ✔️
* ❌ Fetching borders even when `borders` is undefined → You used fallback `data.borders = []` ✔️

---

## ✅ Tips & Enhancements

| Area               | Suggestion                                                                    |
| ------------------ | ----------------------------------------------------------------------------- |
| 🧪 Error Handling  | Add `.catch()` to individual border fetch for more safety                     |
| 🔁 AbortController | Cancel ongoing requests on unmount (optional improvement)                     |
| ⚡ Optimization     | Debounce or lazy-load border countries if performance drops on slower devices |

---

## 🧠 Summary Table

| Pattern               | Used in Your Project          | What it Means                          |
| --------------------- | ----------------------------- | -------------------------------------- |
| **Sequential fetch**  | `country → borders`           | Next fetch depends on previous result  |
| **Parallel fetch**    | `Promise.all([...])`          | Fetch border countries in batch        |
| **Conditional fetch** | `if(!data.borders)`           | Only fetch if borders exist            |
| **Safe state update** | `setCountryData(prev => ...)` | Avoids race conditions                 |
| **Graceful fallback** | `setNotFound(true)`           | Shows fallback if country is not found |

---

## 🔁 Compare with CountriesList.jsx

That component has **only a single fetch**:

```js
useEffect(() => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => setCountriesData(data));
}, []);
```

✔️ Good for initial load
❌ Doesn’t involve multiple fetches — so less complex

---

## 🏆 Final Thoughts

Your implementation in `CountryDetail.jsx` is a **perfect example** of:

✅ Sequential + Parallel + Conditional + Merged fetch
✅ Real-world use of `Promise.all`
✅ Clean and practical state updates in React

---

Let me know if you’d like me to:

* Refactor this into a **custom hook**
* Add **loading state or error boundaries**
* Suggest **debouncing/lazy-loading** for performance

Also — send your **next topic/component** whenever you're ready, and I’ll break it down like this! 🚀
