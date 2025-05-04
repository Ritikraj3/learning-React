
import Searchbar from "./Searchbar";
import SelectMenu from "./SelectMenu";
import CountriesList from "./CountriesList";
import { useState } from "react";


export default function Home() {
    const [query, setQuery] = useState("");
  return (
    <main>
        <div className="search-filter-container">
          <Searchbar setQuery={setQuery}/>
          <SelectMenu />
        </div>
        <CountriesList query={query} />
      </main>
  )
}
