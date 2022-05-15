import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";


function Articles (props){
    const remove = props.remove;
    const update = props.update
    const articles = props.articles
    const [wordEntered, setWordEntered] = useState("");


    useEffect(() =>{
       update()
       console.log(props.articles);
      },[])

    return(
        <div class="article_wrapper">
            <h3>Edit articles</h3>
            
            <table>
                <tr>
                <div class="article_util">
                <Link to="/create-article" >Create article </Link>
                 </div>
                </tr>
                <tr>
                    <th>Title</th>
                    <th>Timestamp</th>
                    <th>Category</th>
                    <th></th>
                </tr>
                {props.articles.map(article => (
                <tr>
                    <td>{article.name}</td>    
                    <td>{article.timestamp}</td>  
                    <td>{article.category}</td>  
                    <td class="td_icons">
                        <Link to="/edit-article" state={article.id} ><i class="fa-regular fa-pen-to-square fa-xl"></i></Link>
                        <i onClick={() => {remove(article.id)}} class="fa-regular fa-trash-can fa-xl"></i>
                    </td>
                </tr>
                    ))}
         
            </table>
        </div>
    )

}

export default Articles;    