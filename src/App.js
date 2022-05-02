import React from 'react';
// Import components
import Search from "./components/Search"
import Categories from './components/Categories';
import categories from "./data.json"
import "./style/style.css";

function App() {
  const cat = categories;
  return (
    <div className="App">
     <Search />
     <Categories cat={categories} />
    </div>
  );
}

export default App;
