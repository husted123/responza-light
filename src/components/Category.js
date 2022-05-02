import React from 'react';
import dummy from './img/cat-dummy.png'
const Category = (props) => {
    return (
 <div id={props.id} class="category">
     <img alt="dummy" src={dummy}></img>
     <h1>{props.name}</h1>
 </div>
);
}
export default Category;