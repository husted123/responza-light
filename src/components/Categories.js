import React from 'react';
import {Link} from "react-router-dom";


const Categories = (props) => 
   { 
       return (   
        <div class="categories_wrapper">
        {props.cat.map(category => (
            <Link to={`${category.name}`}>
                <div key={category.id} id={category.id} class="category" >
                <i class={category.logo}></i>
                    <h1>{category.name}</h1>   
                </div> 
            </Link>
        ))}
    </div>
        );
   };

export default Categories;