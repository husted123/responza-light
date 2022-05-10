import React from 'react';
import SearchBar from './SearchBar';
import CategoryDetail from './CategoryDetail';

// Category Open View
function CategoryOpen(props){
    return(
      <div>
         <SearchBar articles={props.articles} placeholder={"Type a problem or question"}/>
        <CategoryDetail cat={props.cat} articles={props.articles} />
      </div>
    )
  }

export default CategoryOpen