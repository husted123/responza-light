import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {Link} from "react-router-dom";

const CategoryDetail = (props) => 
   { 
      let {name} = useParams();
      const item = props.cat.find( element => element.name == name )
      console.log(item);
      console.log(props.dummy);
       return (   
            <div class="detail_wrapper">
               <div class="detail_header">
                  <div class="header_left">
                     <i class={item.logo}></i>
                     <h1>{item.name}</h1>
                  </div>
                  <div class="header_right">
                     <Link to="/">
                     <i class="fa-regular fa-circle-left fa-3x"></i>
                     </Link>
                  </div>
               </div>
               <div class="detail_main">
               {item.articles.map(article => ( 
                  <li>
                     <h1>{article.name}</h1>
                     <p>{article.text}</p>
                  </li>
               ))}
               </div>
            </div>
        );
   };

export default CategoryDetail;