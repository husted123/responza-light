import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink
} from "react-router-dom";

// Import components
import Articles from './components/Articles';
import Nav from './components/Nav';
import SearchBar from './components/SearchBar';
import Categories from './components/Categories';
import CategoryDetail from './components/CategoryDetail';
import categories from "./data.json"
import "./style/style.css";

//This is our data imported from json file
const cat = categories;
// Push all articles to an array 
const articles = []
for (const category of categories) {
  for (const article of category.articles) {
    articles.push(article)
  }
}

//Routing
function App() {
  return (
    <Router>     
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/:name" element={<CategoryOpen />} ></Route>
            <Route path="/admin" element={<><Admin /> <Home /></>}></Route>
            <Route path="/admin/:name" element={<><Admin /> <CategoryOpen /></>} />
            <Route path="/articles" element={<><Admin /> <Articles articles={articles} /></>}></Route>
        </Routes>
    </Router>
  );
}
// Home view
function Home(){
  return (
    <div>
      <SearchBar articles={articles} placeholder={"Type a problem or question"}/>
      <Categories cat={categories} />
    </div>
  )
}

// Category Open View
function CategoryOpen(){
  return(
    <div>
       <SearchBar articles={articles} placeholder={"Type a problem or question"}/>
      <CategoryDetail cat={categories} />
    </div>
  )
}
// Admin View
function Admin() {
  return (
    <div>
     <Nav/>
    </div>
  )
}


export default App;
