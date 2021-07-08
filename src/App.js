import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';
import Personaje from './Personaje.js';

function App() {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/384')
      .then(respuesta => respuesta.json())
      .then(json => {
        setState(json.image)
      })
  }, [])

  return (
    <div>
      <Route exact path='/'>
        <Link to='/personaje'>
          <img src={state} />
        </Link>
      </Route>
      <Route exact path='/personaje' component={Personaje} />
    </div>
  );
}

export default App;
