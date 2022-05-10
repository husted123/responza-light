import React from 'react';
import SearchBar from './SearchBar';
import Categories from './Categories';
// Home view
function Home(props){
    return (
      <div>
        <SearchBar articles={props.articles} placeholder={"Type a problem or question"}/>
        <Categories cat={props.cat} />
      </div>
    )
  }

  export default Home;