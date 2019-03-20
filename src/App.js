import React, { Component } from 'react';
// import './App.css';

import Recherche from './Recherche.js';
import Header from './Header.js';
import Resultat from './Resultats.js';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Recherche></Recherche>
        <Resultat></Resultat>

      </div>
    );
  }
}


