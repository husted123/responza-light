import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";


function CategoriesList (props){
    const remove = props.remove;
    const update = props.update
    const categories = props.cat
    
    
    // collects articles from db on first render, then stops
    useEffect(() => {
       update();
      }, []);
    return(
        <div class="article_wrapper">
            <h3>Edit Categories</h3>
            
            <table>
                <tr>
                <div class="article_util">
                <input placeholder="Search for articles"  ></input>
                <Link to="/create-category">Create category </Link>
                 </div>
                </tr>
                <tr>
                    <th>Title</th>
                    <th>Icon</th>
                    <th></th>
                </tr>
                {categories.map(category => (
                <tr>
                    <td>{category.name}</td>    
                    <td>{category.icon}</td>  
                    <td class="td_icons">
                        <i onClick={() => {remove(category.id)}} class="fa-regular fa-trash-can fa-xl"></i>
                    </td>
                </tr>
                    ))}
         
            </table>
        </div>
    )
}

export default CategoriesList;    