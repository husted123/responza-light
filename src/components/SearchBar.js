import React from 'react';
import {useState, useEffect} from 'react'
import Modal from './Modal';
import { Link } from 'react-router-dom';
function SearchBar(props) {

  const [openModal, setOpenModal] = useState(false)
  const [articleItem, setArticleItem] = useState({})

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
  
    const handleFilter = (event) => {
      const searchWord = event.target.value;
      setWordEntered(searchWord);
      const newFilter = props.articles.filter((value) => {
        return value.name.toLowerCase().includes(searchWord.toLowerCase());
      });
  
      if (searchWord === "") {
        setFilteredData([]);
      } else {
        setFilteredData(newFilter);
      }
    };
  
    const clearInput = () => {
      setFilteredData([]);
      setWordEntered("");
    };
    
    return (
    <div class="search_wrapper">
        <div class="search">
          <div>
            <h1 class="header">How can we help?</h1>
            <div class="searchInputs">
                <input
                  type="text"
                  placeholder={props.placeholder}
                  value={wordEntered}
                  onChange={handleFilter}
                />
                <div class="searchIcon">
                  {filteredData.length === 0 ? (
                    <i class="fa-regular fa-magnifying-glass"></i>
                  ) : (
                    <i class="fa-regular fa-xmark" onClick={clearInput}></i>
                  )}
                </div>
            </div>
          </div>
          {filteredData.length !== 0 && (
            <div class="dataResult">
              {filteredData.slice(0, 15).map((value, key) => {
                return (
                    <p onClick={() => {setOpenModal(true); setArticleItem(value)}}>{value.name} </p>
                );
              })}
            </div>
          )}
        </div>
        {openModal && <Modal article={articleItem} closeModal={setOpenModal}/>}
      </div>
    );
  }

  export default SearchBar;