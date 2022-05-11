import React from "react"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {updateDoc, doc} from 'firebase/firestore'
import { useLocation } from 'react-router-dom';
import { db } from "../firebase-config";

function EditArticle(props) {
    // Get id of article
    const location = useLocation();
    const articleID = location.state;

    let today = new Date();
    let date=today.getDate() + "-"+ parseInt(today.getMonth()+1) +"-"+today.getFullYear();

    // get value from input
    const [title, setTitle] = useState()
    const [category, setCategory] = useState()
    const [resume, setResume] = useState()
    const [text, setText] = useState()

    //save article to firestore database
    const editArticle = async (articleID) => {
        const articleDoc = doc(db, "articles", articleID)
        const newFields = {name : title, category: category, resume: resume, text:text, timestamp: date}
        await updateDoc(articleDoc, newFields)
    }

    return(
  <div class="createArticle_wrapper"><h3>Create Article</h3>
    <div class="action-buttons">
      <Link to="/articles" onClick={() => editArticle(articleID)}>Save</Link>
      <Link to="/articles">Back</Link>
    </div>
      <h4> Title </h4>
      <input value={title} onInput={e => setTitle(e.target.value)} id="title" type="text" />
      <h4>Category</h4>
      <select value={category} onInput={e => setCategory(e.target.value)}>
        {props.cat.map( category => (<option value={category.name}>{category.name}</option>))}
      </select>
      <h4>Resume</h4>
      <input value={resume} onInput={e => setResume(e.target.value)} class="resume_input"type="text" />
      <h4>Text</h4>
      <textarea value={text} onInput={e => setText(e.target.value)} ></textarea>
  </div>
    )
}

export default EditArticle 