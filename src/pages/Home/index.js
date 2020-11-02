import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';

const Popular = ['Pandas','Osos','Cocodrilos'];

const Home = () => {
    const [ keyword, setKeyword ] = useState('');
    const [path, pushLocation ] = useLocation();

    const handleSubmit = (e) => {
        e.preventDefault();
        pushLocation(`/search/${keyword}`);
    };
    const handleChange = (e) => {
        setKeyword(e.target.value);
    };
    return(
        <div>
            <form onSubmit={ handleSubmit }>
                <input type='text' 
                    value={ keyword } 
                    onChange={ handleChange }
                    className='input-text'
                    placeholder="Busca un gif aqui..."
                />
            </form>
            <h3>Los Giff mas Populares</h3>
            <ul>
                {Popular.map( (nombrePopular) => (
                    <li key={nombrePopular}>
                        <Link to={`/search/${nombrePopular}`}>
                            Giff de {nombrePopular}
                        </Link>
                    </li> 
                ))}
            </ul>
        </div>
    )
}

export default Home;