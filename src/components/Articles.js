import React from "react"
import { Link } from "react-router-dom";


function Articles (props){
    const articles = props.articles;
    const remove = props.remove;
    return(
        <div class="article_wrapper">
            <h3>Edit articles</h3>
            
            <table>
                <tr>
                <div class="article_util">
                <input placeholder="Search for articles"></input>
                <Link to="/create-article">Create article </Link>
                 </div>
                </tr>
                <tr>
                    <th>Title</th>
                    <th>Timestamp</th>
                    <th>Category</th>
                    <th></th>
                </tr>
                {articles.map(article => (
                <tr>
                    <td>{article.name}</td>    
                    <td>{article.timestamp}</td>  
                    <td>{article.category}</td>  
                    <td class="td_icons">
                        <i class="fa-regular fa-pen-to-square fa-xl"></i>
                        <i onClick={() => {remove(article.id)}} class="fa-regular fa-trash-can fa-xl"></i>
                    </td>
                </tr>
                    ))}
         
            </table>
        </div>
    )
}

export default Articles;