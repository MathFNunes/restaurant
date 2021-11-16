import React, { Component } from 'react'

import ListItem from './ListRestaurantsItem'
import restaurants from '../data/Teste front-end.json';

class List extends Component {

    constructor(props){
        super(props)
        this.restaurants = restaurants;
    }

    render(){
        return(
            <div id='list' className="list">
                <div className="listHeader">
                    <h2 className="colorCustom">Lugares</h2>
                    <p>{this.restaurants.length} foram cadastrados</p><br />
                </div>
                <div>
                    <ul className="press">
                        {
                            Object.keys(this.restaurants).map(key => {
                                return <ListItem key={key} restaurant={this.restaurants[key]}/>
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default List