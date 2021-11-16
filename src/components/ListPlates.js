import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import ListItemPlates from './ListPlatesItem'
import restaurants from './../data/Teste front-end.json';

const ListPlates = props => {
    let location = useLocation();
    let plates = restaurants.filter(x => x.name === location.state.restaurant)[0].menuItems;

    return(
        <div>
            <div onClick={() => window.history.back()}><i className="material-icons iconHeader navBackBtn">keyboard_arrow_left</i></div>
            <div id='list' className="list">
                <div className="listHeader">
                    <h2 className="colorCustom">{location.state.restaurant}</h2>
                    <p>{plates.length} pratos</p><br />
                </div>
                <div>
                    <ul className="press">
                        {
                            Object.keys(plates).map(key => {
                                return <ListItemPlates key={key} plate={plates[key]}/>
                            })
                        }
                    </ul>
                </div>
                <footer className="listPlatesFooter">
                    <Link to='/addplate' state={{restaurant: location.state.restaurant ? location.state.restaurant : ''}} className="margin15pxtop"><i className="material-icons iconHeader fontSize colorCustom">add_circle</i></Link>
                </footer>
            </div>
        </div>
    );
}

export default ListPlates