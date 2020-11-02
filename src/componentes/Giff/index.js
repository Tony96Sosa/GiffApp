import React from 'react';
import { Link } from 'wouter';
import './style.css';

const Giff = ({title, id, url}) => {
    return (
      <div className="Giff">
        <Link to={`/gif/${id}`} className='Giff-link'>
          <h4>{title}</h4>
          <img loading='lazy' alt={title} src={url} />
        </Link>
      </div>
    )
}

export default Giff;
