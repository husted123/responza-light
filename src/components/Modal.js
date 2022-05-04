import React from 'react';

function Modal(props) {
    const article = props.article;

    return (
        <div class="modal_background">
            <div class="modal_container">
            <i class="fa-solid fa-x fa-2x" onClick={() => props.closeModal(false)}></i>
                <div className="modal_content">
                  
                    <div class="title">
                        <div class="title_left">
                            <h1>{article.name}</h1>
                            <h2>category</h2>
                        </div>
                        <h2>{article.timestamp}</h2>
                    </div>
                    <div class="body">
                        <p>{article.longtext}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;