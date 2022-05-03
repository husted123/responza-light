import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const CategoryDetail = (props) => 
   { 
      let {name} = useParams();
      let x = Number(name)
      const item = props.cat.find( element => element.id === x )
      console.log(item);

       return (   
            <div class="detail_wrapper">
               <h1>Category has ID : {item.id}</h1>
               {item.articles.map(article => ( 
                  <li>
                     <h1>{article.name}</h1>
                     <p>{article.text}</p>
                  </li>
               ))}
            </div>
        );
   };

export default CategoryDetail;