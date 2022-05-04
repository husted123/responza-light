import React from 'react';

function Modal({ closeModal }) {
    return (
        <div class="modal_background">
            <div class="modal_container">
                <button onClick={() => closeModal(false)}>X</button>
                <div class="title">
                    <div class="title_left">
                        <h1>article title</h1>
                        <h2>category</h2>
                    </div>
                    <h2>Timestamp</h2>
                </div>
                <div class="body">
                    <p>Article text bla bla bla</p>
                </div>
            </div>
        </div>
    )
}

export default Modal;