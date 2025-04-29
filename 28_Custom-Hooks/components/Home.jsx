import Searchbar from "./Searchbar";
import SelectMenu from "./SelectMenu";
import CountriesList from "./CountriesList";
import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Home() {
  const [query, setQuery] = useState("");
  const [isDark] = useContext(ThemeContext);

  return (
    <main className={`${isDark ? "dark" : ""}`}>
      <div className="search-filter-container">
        <Searchbar setQuery={setQuery} />
        <SelectMenu />
      </div>
      <CountriesList query={query} />
    </main>
  );
}
