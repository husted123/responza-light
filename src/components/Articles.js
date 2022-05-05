import React from "react"


function Articles (props){
    const articles = props.articles;
    console.log(articles);
    return(
        <div class="article_wrapper">
            <h3>Edit articles</h3>
            <div>
                <input></input>
                <button></button>
            </div>
            <table>
                <tr>
                    <th>Title</th>
                    <th>Timestamp</th>
                    <th>Category</th>
                </tr>
                {articles.map(article => (
                <tr>
                    <td>{article.name}</td>    
                    <td>{article.timestamp}</td>  
                    <td>{article.category}</td>  
                </tr>
                    ))}
         
            </table>
        </div>
    )
}

export default Articles;