import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import SelectMenu from "./components/SelectMenu";

import "./App.css";
import CountriesList from "./components/CountriesList";
const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className="search-filter-container">
          <Searchbar/>
          <SelectMenu />
        </div>
        <CountriesList />
      </main>
    </>
  );
};

export default App;
