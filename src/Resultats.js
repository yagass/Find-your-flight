import React, { Component } from 'react';
import './Resultats.css';
// import Recherche from './Recherche.js';



export default class Resultat extends Component {

    render() {
        return (

            <div id="resultzone">
                {
                    this.props.vols.map((flight, i) => {
                        console.log(flight);
                        return (
                            <div id="displayres">
                                {this.props.vols}
                            </div>
                        )
                    })
                }

            </div>
        )
    }
    // componentWillUpdate() {
    //     let that = this;
    //     $.get('http://localhost:4000/vols/' + aerodep, function (data) {
    //         console.log(data);
    //         let Vols = data.map((flight, i) => {

    //             return (
    //                 <DisplayRes key={i} vol={flight}></DisplayRes>
    //             )
    //         })
    //         that.setState({ Vols: Vols });

    //     })
    // }

}

