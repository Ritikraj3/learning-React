import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import SelectMenu from "./components/SelectMenu";
import "./App.css";
import CountriesList from "./components/CountriesList";
import { useState } from "react";
const App = () => {
  const [query, setQuery] = useState("");
  return (
    <>
      <Header />
      <main>
        <div className="search-filter-container">
          <Searchbar setQuery={setQuery}/>
          <SelectMenu />
        </div>
        <CountriesList query={query} />
      </main>
    </>
  );
};

export default App;
