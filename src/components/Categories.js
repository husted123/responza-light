import React from 'react';
import dummy from './img/cat-dummy.png'
import {Link} from "react-router-dom";


const Categories = (props) => 
   { 
       return (   
        <div class="categories_wrapper">
        {props.cat.map(category => (
            <Link to={`/${category.id}`}>
                <div key={category.id} id={category.id} class="category" >
                    <img alt="dummy" src={dummy}></img>
                    <h1>{category.name}</h1>   
                </div> 
            </Link>
        ))}
    </div>
        );
   };

export default Categories;