import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Logo from '../../logo.png';
import "./Navbar.scss";
/**
* @author
* @class Navbar 
**/

class Navbar extends Component {
    render() {
        return (
            <nav className="navBar">
                <img src={Logo} alt=""/>
                <ul className="nav-links">
                    <li>
                        <a href="/" className="nav-link">home</a>
                    </li>
                    <li>
                        <a href="/" className="nav-link">about</a>
                    </li>
                    <li>
                        <a href="/" className="nav-link active">tours</a>
                    </li>
                </ul>
            </nav>
        )
    }
}


Navbar .propTypes = {}
export default Navbar 