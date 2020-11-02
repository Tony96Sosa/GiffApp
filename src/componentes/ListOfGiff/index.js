import React from 'react';
import Giff from '../Giff';
import './style.css';

 const ListOfGiff = ( { giffs } ) => {
  return(
    <div className='ListOfGifs' >
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
    </div>
  )
}

export default ListOfGiff;