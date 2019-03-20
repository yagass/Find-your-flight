import React, { Component } from 'react';
// import './App.css';

import $ from 'jquery';
import DisplayRes from './DisplayRes.js';

import Recherche from './Recherche.js';
import Header from './Header.js';
import Resultat from './Resultats.js';


export default class App extends Component {

  constructor () {
      super();
      this.state = {
        Vols : []
      }
    }

  componentWillMount() {
      let that = this;
      $.get('http://localhost:4000/vols', function (data) {
          console.log(data);
          let Vols = data.map((flight, i) => {

              return (
                  <DisplayRes key={i} vol={flight}></DisplayRes>
              )
          })
          that.setState({ Vols: Vols });

      })
  }

  affichageVols = (rechercheDep, rechercheDes) => {
    console.log(rechercheDep, rechercheDes);
    const that = this;
    $.get('http://localhost:4000/vols/' + rechercheDep, function (data) {
      this.setState({Vols: data})
    });
  }


  render() {
    return (
      <div className="App">
        <Header></Header>
        <Recherche affichageVols={this.affichageVols}></Recherche>
        <Resultat vols={this.state.Vols}></Resultat>

      </div>
    );
  }
}


