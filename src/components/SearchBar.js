import React from 'react';
import {useState, useEffect} from 'react'
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import Modal from './Modal';

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
    <div>
        <div class="search">
          <div class="searchInputs">
            <input
              type="text"
              placeholder={props.placeholder}
              value={wordEntered}
              onChange={handleFilter}
            />
            <div class="searchIcon">
              {filteredData.length === 0 ? (
                <SearchIcon />
              ) : (
                <CloseIcon id="clearBtn" onClick={clearInput} />
              )}
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