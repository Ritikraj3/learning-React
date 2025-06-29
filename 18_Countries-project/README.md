Based on the uploaded files, here is a complete and structured `README.md` file for your **"Where in the World?"** React project that displays a list of countries using reusable components like `CountryCard`, `Header`, `Searchbar`, `SelectMenu`, and `CountriesList`.

---

# 🌍 Where in the World? – Country Explorer App

![React](https://img.shields.io/badge/-React-61DAFB?logo=react\&style=for-the-badge)
![Modular Components](https://img.shields.io/badge/-Modular%20Components-green?style=for-the-badge)
![CSS Scoped](https://img.shields.io/badge/-Scoped%20CSS-blueviolet?style=for-the-badge)

---

## 📘 Overview

This React project is a responsive, modular **country explorer web app**. It uses reusable components to display a list of countries with the ability to search and filter by region. It consumes local or API-based country data (`countriesData`) and presents it using cards.

---

## 🧩 Component Structure

### ✅ 1. `CountriesList.jsx`

* **Maps** through the entire list of countries and renders a `CountryCard` for each.
* Uses `.map()` to dynamically generate country info.

```jsx
<CountryCard
  key={country.name.common}
  name={country.name.common}
  flag={country.flags.svg}
  population={country.population}
  region={country.region}
  capital={country.capital?.[0]}
/>
```

---

### ✅ 2. `CountryCard.jsx`

* Reusable visual component for each country.
* Displays:

  * Flag
  * Country name
  * Population
  * Region
  * Capital
* Wraps the card in a clickable `<a>` tag linking to `country.html?name=...`.

```jsx
<a className="country-card" href={`./country.html?name=${name}`}>
  <img src={flag} alt={`${name} flag`} />
  <div className="card-text">
    <h3>{name}</h3>
    <p><b>Population:</b> {population}</p>
    <p><b>Region:</b> {region}</p>
    <p><b>Capital:</b> {capital}</p>
  </div>
</a>
```

---

### ✅ 3. `Header.jsx`

* Displays the main title **"Where in the world?"**
* Includes a theme toggle element (icon included but currently static).

```jsx
<header>
  <h2><a href="./">Where in the world?</a></h2>
  <p><i className="fa-regular fa-sun"></i> Light Mode</p>
</header>
```

---

### ✅ 4. `Searchbar.jsx`

* Provides an input field with a search icon.
* Placeholder text: “Search for a country”.
* (You can later connect it to filter logic using state.)

```jsx
<input type="text" placeholder="Search for a country" />
```

---

### ✅ 5. `SelectMenu.jsx`

* A region filter dropdown with the following options:

  * America
  * Africa
  * Europe
  * Asia
  * Oceania

```jsx
<select>
  <option hidden>Filter by Region</option>
  ...
</select>
```

---

## 🧠 Features & Functionality

| Feature          | Description                                  |
| ---------------- | -------------------------------------------- |
| 🌍 Country Cards | Flag, name, population, region, and capital  |
| 🔍 Search Bar    | (Search field present, logic to be added)    |
| 🌐 Region Filter | Dropdown to filter by region                 |
| ☀️ Theme Toggle  | Visual element present (logic optional)      |
| 📦 Modular Code  | Uses multiple components for clean structure |

---

## 📁 Folder Structure

```
/src
  ├── components/
  │   ├── CountriesList.jsx
  │   ├── CountryCard.jsx
  │   ├── Header.jsx
  │   ├── Searchbar.jsx
  │   └── SelectMenu.jsx
  └── countriesData.js
```

---

## 🚀 How to Run This App

```bash
npm install
npm run dev   # (if using Vite)
# OR
npm start     # (if using CRA)
```

---

## 🔄 Suggested Enhancements

* Add **state management** to control search & filter logic.
* Implement **dark/light mode toggle** using `useState` and `localStorage`.
* Integrate **REST Countries API** for real-time data fetching.
* Add **pagination or lazy loading** for large datasets.

---

## 🏷️ Badges

![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square)
![Clean UI](https://img.shields.io/badge/-Responsive%20UI-blue?style=flat-square)
![Reusable](https://img.shields.io/badge/-Reusable%20Components-green?style=flat-square)
![Modular](https://img.shields.io/badge/-Modular%20Design-yellow?style=flat-square)

---

## 🙌 Author

**Ritik Raj**
Frontend Developer | Building modern, modular React interfaces 🌐

---