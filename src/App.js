import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// Import components
import dummy from './components/img/cat-dummy.png'
import SearchBar from './components/SearchBar';
import Categories from './components/Categories';
import CategoryDetail from './components/CategoryDetail';
import categories from "./data.json"
import "./style/style.css";

const cat = categories;

const articles = []
for (const category of categories) {
  for (const article of category.articles) {
    articles.push(article)
  }
}
//in app i created my routing for the categories, search component stays in place, while the categories lead to category detail view
function App() {
  return (
    <Router>  
          <SearchBar articles={articles} placeholder={"Type a problem or question"}/>
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:name"  element={<CategoryDetail cat={categories} logo={dummy} />} ></Route>
      </Routes>
    </Router>
  );
}

function Home(){
  return (

    <Categories cat={categories} />

  )
}

export default App;
