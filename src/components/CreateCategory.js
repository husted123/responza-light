import React from "react"
import { useState } from "react";
import { Link } from "react-router-dom";
import {addDoc} from 'firebase/firestore'

function CreateCategory(props) {


  // get value from input
  const [title, setTitle] = useState()
  const [icon, setIcon] = useState()


  //save article to firestore database
  const saveCategory = async () => {
    await addDoc(props.categoriesRef, {name: title, icon: icon})
  }

    return(
  <div class="createArticle_wrapper"><h3>Create Category</h3>
    <div class="action-buttons">
      <Link to="/categories-list" onClick={saveCategory}>Save</Link>
      <Link to="/categories-list">Back</Link>
    </div>
      <h4> Title </h4>
      <input value={title} onInput={e => setTitle(e.target.value)} id="title" type="text" />
      <h4>Icon <br></br> <span>Get icon code from fontawesome</span></h4>
      <input placeholder="example: fa-house"value={icon} onInput={e => setIcon(e.target.value)} type="text" />

  </div>
    )
}

export default CreateCategory;