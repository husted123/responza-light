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

import Styling from './components/Styling';
import CreateArticle from './components/CreateArticle';

// Data and CSS
import "./style/style.css";


function App() {
  // get categories from database
  const [categories, setCategories] = useState([]);
  const categoriesRef = collection(db, "categories")
  useEffect(() => {
    const getCategories = async () => {
      const data = await getDocs(categoriesRef)
      setCategories(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    };

    getCategories()
  }, [])
  console.log(categories);
  // get articles from database
  const [articles, setArticles] = useState([]);
  const articlesRef = collection(db, "articles")
  useEffect(() => {
    const getArticles = async () => {
      const data = await getDocs(articlesRef)
      setArticles(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    };

    getArticles()
  }, [articles, articlesRef])

  const deleteArticle = async (id) => {
    const articleDoc = doc(db, "articles", id);
    await deleteDoc(articleDoc)
  } 

  return (
    <Router>     
        <Routes>
            <Route path="/" element={<Home articles={articles} cat={categories}/>} />
            <Route path="/:name" element={<CategoryOpen articles={articles} cat={categories}/>} ></Route>
            <Route path="/admin" element={<><Admin /> <Home  articles={articles} cat={categories}/></>}></Route>
            <Route path="/admin/:name" element={<><Admin /> <CategoryOpen  articles={articles} cat={categories}/></>} />
            <Route path="/articles" element={<><Admin /> <Articles articles={articles} remove={deleteArticle} /></>}></Route>
            <Route path="/styling" element={<><Admin /> <Styling /></>}> </Route>
            <Route path="/create-article" element={<><Admin /><CreateArticle articlesRef={articlesRef} articles={articles}/></>}></Route>
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
