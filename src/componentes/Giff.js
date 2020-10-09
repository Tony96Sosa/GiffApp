import React from 'react';
import './Giff.css';

const Giff = ({title, id, url}) => {
    return <a href={`#${id}`} className="Giff">
            <h4>{title}</h4>
            <h6>ID: {id}</h6>
            <img alt={title} src={url} />
          </a>
}

export default Giff;