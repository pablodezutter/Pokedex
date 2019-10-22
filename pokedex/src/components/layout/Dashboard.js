import React, { Component } from 'react'
import PokemmonList from '../pokemon/PokemonList';
export default class Dashboard extends Component {
    render() {
        return (
            <div className="row">
                <div className='col'>
                    <PokemmonList/>
                </div>
                
            </div>
        )
    }
}
