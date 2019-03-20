import React, { Component } from 'react';
import './Resultats.css';
import $ from 'jquery';
import DisplayRes from './DisplayRes.js';
// import Recherche from './Recherche.js';



export default class Resultat extends Component {

    constructor() {
        super();
        this.state = {
            Vols: []
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


    render() {
        return (

            <div id="resultzone">
                {
                    this.state.Vols.map((flight, i) => {
                        console.log(flight);
                        return (
                            <div id="displayres">
                                {this.state.Vols}
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

