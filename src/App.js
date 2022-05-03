import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// Import components
import Search from "./components/Search"
import Categories from './components/Categories';
import CategoryDetail from './components/CategoryDetail';
import categories from "./data.json"
import "./style/style.css";

// eslint-disable-next-line no-unused-vars
const cat = categories;

function App() {
  return (
    <Router>   
          <Search />
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:name" exact element={<CategoryDetail cat={categories} />} ></Route>
      </Routes>
    </Router>
  );
}

function Home(){
  return (
    <div className="App">
    <Categories cat={categories} />
   </div>
  )
}

export default App;
