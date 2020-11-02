import React, { useState, useEffect } from 'react';
import ListOfGiff from '../../componentes/ListOfGiff';
import Spinner from '../../componentes/Spinner';
import getGiff from '../../services/getGiff';

 const SearchResults = ( { params } ) => {
  const { keyword } = params;
  const [loading, setLoading] = useState(false);
  const [giffs, setGiffs]= useState([]);

  useEffect( () => {
    setLoading(true)
    getGiff({keyword}).then(giffs => {
      setGiffs(giffs)
      setLoading(false)
    })
  },[keyword]);

  return(
    <>
      {loading 
      ? <Spinner />
      : <ListOfGiff giffs={ giffs } />
      }
    </>
  )
}

export default SearchResults;