import React from "react"


function Articles (props){
    const articles = props.articles;
    console.log(articles);
    return(
        <div class="article_wrapper">
            <h3>Edit articles</h3>
            
            <table>
                <tr>
                <div class="article_util">
                <input placeholder="Search for articles"></input>
                <button>Create article</button>
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
                        <i class="fa-regular fa-trash-can fa-xl"></i>
                    </td>
                </tr>
                    ))}
         
            </table>
        </div>
    )
}

export default Articles;