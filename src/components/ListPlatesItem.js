import React, {Component} from 'react'
import NumberFormat from 'react-number-format';

class ListItemPlates extends Component {

    constructor(plate){
        super()
        this.plate = plate.plate;
    }

    currencyFormat(value) {
        return value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
     }

    render(){
        return (
            <div style={{'display':'flex'}}>
                <div className="listItem borderOrange">
                    <div className="listPlateTitle">
                        <div className="listPlateName"><h4 className="margin20px">{this.plate.name}</h4></div>
                        <div className="listPlatePrice">
                            <h4 className="margin20px margin10pxend">{this.currencyFormat(this.plate.price)}</h4>
                        </div>
                    </div>
                    <p className="margin20px">{this.plate.description}</p>
                </div>
            </div>
        )
    }
}

export default ListItemPlates