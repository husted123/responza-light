import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {Link} from "react-router-dom";
import Modal from './Modal';

const CategoryDetail = (props) => 
   { 
      // Get name of category from URL parameters, we can then use name to look up the category properties
      let {name} = useParams();
      const item = props.cat.find( element => element.name === name )
      // This state determines whether or not the modal is shown, in the returned html we use conditional rendering to show modal if boolen is true
      // we do this by typing  {openModal && <Modal/>}
      const [openModal, setOpenModal] = useState(false)
      const [articleItem, setArticleItem] = useState({})
       return (   
          <div>
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
                  <div class="article_container" onClick={() => {setOpenModal(true); setArticleItem(article)}} >
                     <div class="container_left">
                        <i class="fa-solid fa-circle-arrow-right fa-2x"></i>
                        <div>
                           <h1>{article.name}</h1>
                           <p>{article.text}</p>
                        </div>
                     </div>
                        <h2>{article.timestamp}</h2>
                  </div>
               ))}
               </div>
            </div>
            {openModal && <Modal article={articleItem} closeModal={setOpenModal}/>}
         </div>
        );
   };

export default CategoryDetail;