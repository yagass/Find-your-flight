import React, { Component } from 'react';

export default class DisplayRes extends Component {
    render() {

        return (
            <div className="displayres">
                <div>
                    <img src={this.props.logo} />
                    <p>Company : {this.props.vol.company} départ:{this.props.vol.aerodep} arrivée :{this.props.vol.aerodep} Heure de départ: {this.props.vol.hdep} Heure d'arrivée:{this.props.vol.harr} prix: {this.props.vol.prix}  </p>
                </div>
            </div>
        )
    }
}