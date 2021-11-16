import React from 'react'
import { Link } from 'react-router-dom';

const ListItem = props => {
    return (
        <div style={{'display':'flex'}}>
            <Link to='/listplates' state={{restaurant: props.restaurant ? props.restaurant.name : ''}} className="listItem">
                <div className="listItem">
                    <h4 className="margin20px">{props.restaurant ? props.restaurant.name : ''}</h4>
                    <p className="margin20px">{props.restaurant ? props.restaurant.menuItems.length : ''} pratos</p>
                </div>
            </Link>
            <Link to='/addplate' state={{restaurant: props.restaurant ? props.restaurant.name : ''}} className="margin15pxtop"><i className="material-icons iconHeader">add_circle_outline</i></Link>
        </div>
    )
}

export default ListItem