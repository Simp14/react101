import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
    render() {
        return (
            <header>
                <div id='logo-container'>
                    <img className='logo' src='./images/logo.png'/>
                </div>
            </header>
        )
    }
}

export default Header;