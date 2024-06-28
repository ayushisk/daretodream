import React from 'react'
import { useGlobalContext } from './context';


const Search = () => {
  const {query, searchPost} = useGlobalContext();
  return<>
    <div>
      <h1>Hey, There👋...This is My Tech News App</h1>
      <form>
        <div>
          <input input="text" placeholder='search here'
              value={ query }
              onChange={(e) => searchPost(e.target.value)}
          />
        </div>
      </form>
    </div>
  </>
};

export default Search