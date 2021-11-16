import React from 'react'
import CurrencyInput from 'react-currency-input';
import { useLocation } from 'react-router-dom'

const AddPlate = props => {
    let location = useLocation()
    return(
        <div>
            <div onClick={() => window.history.back()}><i className="material-icons iconHeader navBackBtn">keyboard_arrow_left</i></div>
            <div className="addPlate">
                <h2 className="colorCustom">{location.state.restaurant}</h2>
                <label htmlFor="name">Nome do Prato</label>
                <input type="text" id="name" placeholder="Prato"  className="iptAddPlate margin10pxBottom"/>
                <label htmlFor="value" >Valor</label>
                <CurrencyInput prefix="R$" decimalSeparator=","  className="width100px iptAddPlate margin10pxBottom"/>
                <label htmlFor="value" >Descrição</label>
                <textarea id="value" rows="6" maxLength="200" placeholder="Insira uma descrição"  className="txtAreaAddPlate"></textarea>
                <p className="fontSize14px margin10pxBottom">*A descrição deve conter até 200 caracteres.</p>
                <button type="submit" className="btnAddPlate">Salvar</button>
            </div>
        </div>
    )
}

export default AddPlate