import React, { Component } from 'react';
import './Recherche.css';

function goSearch() {
    let aeroDep = document.getElementById("aerodep").value;
    let aeroDes = document.getElementById("aerodes").value;

}

export default class Recherche extends Component {


    render() {

        return (

            <div id="searchzone">
                <div id="content">
                    <input id="aerodep" type="text" ></input>

                    <input id="aerodes" type="text" ></input>
                    <button onClick={goSearch}>Rechercher</button>
                </div>
            </div>
        )
    }
}