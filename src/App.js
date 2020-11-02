import React from 'react';
import Home from './pages/Home';
// import Deteil from './pages/Deteil';
import SearchResults from './pages/SearchResults'; 
import { Link, Route } from 'wouter';

const App = () => {
  return (
    <div className="App">
      <section className="App-content">
        <Link to="/">
          <h1 className='app-logo' >HOME</h1>
        </Link>
        <Route 
          component={Home}
          path='/'
        />
        <Route 
          component={SearchResults}
          path='/search/:keyword'
        />
        {/* <Route 
          component={Deteil}
          path='/giff/:id'
        /> */}
      </section>
    </div>
  );
}

export default App;
