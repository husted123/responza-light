import dummy from './img/cat-dummy.png'
import {Link} from "react-router-dom";
import { useEffect, useState } from 'react';

const CategoryDetail = (props) => 
   { 
    const [item, setItem] = useState({})
       console.log(props.cat)
       return (   
         <div>
            <h1>item</h1>
         </div>
        );
   };

export default CategoryDetail;