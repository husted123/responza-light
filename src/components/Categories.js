import React from 'react';
import dummy from './img/cat-dummy.png'
import CategoryDetail from './CategoryDetail';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from "react-router-dom";


const Categories = (props) => 

   { 
       console.log(props.cat)
       return (   
        <Router>
            <div class="categories_wrapper">
                {props.cat.map(category => (
                    <Link to={`/${category.id}`}>
                        <div key={category.id} id={category.id} class="category" >
                            <img alt="dummy" src={dummy}></img>
                            <h1>{category.name}</h1>   
                        </div> 
                    </Link>
                ))}
            <Routes>
            <Route path="/" exact component ={Categories}></Route>
            <Route path="/:id" exact component={CategoryDetail} ></Route>
            </Routes>
            </div>
        </Router>
        );
   };

export default Categories;