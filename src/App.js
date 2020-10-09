import React from 'react';
import './App.css';
import ListOfGiff from './componentes/ListOfGiff';
import { Link, Route } from 'wouter';

function App() {

  return (
    <div className="App">
      <section className="App-content">
        <Link to="/giff/panda">Giff de Pandas</Link>
        <Link to="/giff/oso">Giff de Osos</Link>
        <Link to="/giff/cocodrilo">Giff de Cocodrilos</Link>
        <Route 
        component={ListOfGiff}
        path='/giff/:keyword'
        />
      </section>
    </div>
  );
}

export default App;
