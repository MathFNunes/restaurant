import React, {Component} from 'react'

class Header extends Component {

    constructor(props){
        super(props);
        
    }
    
    render(){
        return(
            <div>
                <nav>
                    <div className="headerDiv">
                        <h2>share eat</h2>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header