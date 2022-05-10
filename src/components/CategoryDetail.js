import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {useNavigate} from "react-router-dom";
import Modal from './Modal';


const CategoryDetail = (props) => 
   { 
      console.log(props.articles);
      
      const navigate = useNavigate()
      // Get name of category from URL parameters, we can then use name to look up the category properties
      const {name} = useParams();
      const item = props.cat.find( element => element.name === name )

      const filteredArticles = props.articles.filter( (article => article.category === name) )
      console.log(filteredArticles);
      // This state determines whether or not the modal is shown, in the returned html we use conditional rendering to show modal if boolen is true
      // we do this by typing  {openModal && <Modal/>}
      const [openModal, setOpenModal] = useState(false)
      const [articleItem, setArticleItem] = useState({})
      useEffect(() => {
         var element = document.getElementById("root");
         if(openModal === true) {
            element.classList.add("active")
         } else {
            element.classList.remove("active")
         }
       }, [openModal]);
      
       return (   
          <div>
            <div class="detail_wrapper">
               <div class="detail_header">
                  <div class="header_left">
                     <i class={item.logo}></i>
                     <h1>{item.name}</h1>
                  </div>
                  <div class="header_right">

                     <i class="fa-regular fa-circle-left fa-3x" onClick={() => navigate(-1)}></i>

                  </div>
               </div>
               <div class="detail_main">
               {filteredArticles.map(article => ( 
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