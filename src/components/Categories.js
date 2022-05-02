import React from 'react';
import Category from './Category';

const Categories = (props) => 

   { 
       console.log(props.cat)
       return (   
       <div class="categories_wrapper">
        {props.cat.map(category => (
            <Category name={category.name} id={category.id}/>
        ))}
        </div>
        );
   };

export default Categories;