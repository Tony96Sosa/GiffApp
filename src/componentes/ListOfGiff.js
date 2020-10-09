import React, { useState, useEffect } from 'react';
import getGiff from '../services/getGiff';
import Giff from './Giff'

 const ListOfGiff = ( { params } ) => {
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

  if(loading) return <h1>CARGANDO</h1>

  return(
    <>
      {
        giffs.map( ({ id, title, url }) =>
          <Giff
            id={id}
            key={id} 
            title={title} 
            url={url}
          />
        )
      }
    </>
  )
}

export default ListOfGiff;