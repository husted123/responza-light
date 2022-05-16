import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import {db} from './firebase-config'
import { collection, getDocs, deleteDoc, doc} from 'firebase/firestore'

// Import components
import CategoryOpen from './components/CategoryOpen';
import Home from './components/Home';
import Articles from './components/Articles';
import Nav from './components/Nav';
import EditArticle from './components/EditArticle';
import CreateArticle from './components/CreateArticle';
import CreateCategory from './components/CreateCategory';
import CategoriesList from './components/CategoriesList';

// Data and CSS
import "./style/style.css";



function App() {

  let count = 0;
  const updateCount = () => {
    count = count++;
  }
  // get categories from database
  const [categories, setCategories] = useState([]);
  const categoriesRef = collection(db, "categories")
  
  const getCategories = async () => {
    const data = await getDocs(categoriesRef)
    setCategories(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
  };


  // get articles from database
  const [articles, setArticles] = useState([]);
  const articlesRef = collection(db, "articles")

  const getArticles = async () => {
    const data = await getDocs(articlesRef)
    setArticles(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
  };


  const deleteArticle = async (id) => {
    const articleDoc = doc(db, "articles", id);
    await deleteDoc(articleDoc);
    getArticles()
  } 
  
  const deleteCategory = async (id) => {
    const categoryDoc = doc(db, "categories", id);
    await deleteDoc(categoryDoc)
    getCategories()
  } 

  
  useEffect(() =>{
    getCategories()
    getArticles()
  },[])


  return (
    <Router>     
        <Routes>
            <Route path="/" element={<Home articles={articles} cat={categories}/>} />
            <Route path="/:name" element={<CategoryOpen articles={articles} cat={categories}/>} ></Route>
            <Route path="/admin" element={<><Admin /> <Home  articles={articles} cat={categories}/></>}></Route>
            <Route path="/admin/:name" element={<><Admin /> <CategoryOpen  articles={articles} cat={categories}/></>} />
            <Route path="/articles" element={<><Admin /> <Articles articles={articles} remove={deleteArticle} update={getArticles}  /></>}></Route>
            <Route path="/categories-list" element={<><Admin /> <CategoriesList cat={categories} remove={deleteCategory} update={getCategories} count={count}/></>}></Route>
            <Route path="/create-article" element={<><Admin /><CreateArticle cat={categories} articlesRef={articlesRef}  articles={articles} /></>}></Route>
            <Route path="/create-category" element={<><Admin /><CreateCategory categoriesRef={categoriesRef} cat={categories}  /></>}></Route>
            <Route path="/edit-article" element={<><Admin /><EditArticle cat={categories} articlesRef={articlesRef} articles={articles}/></>}></Route>
        </Routes>
    </Router>
  );
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
