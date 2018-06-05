import React from 'react';

const Header = (props) => {

    return (
        <header>
            <div className="logo">
                <img src={require('../images/newslogo.png')} alt="IT News" /> 
            </div>
            <input type="text" onChange= { props.keywords }/>                
        </header>
        )
}

export default Header;