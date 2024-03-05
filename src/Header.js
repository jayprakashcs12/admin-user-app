import React from 'react';
import "./css/header.css";
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <React.Fragment>
            <nav>
                <input type="checkbox" id="check" />
                <label htmlFor="check" className="checkbtn">
                    <FontAwesomeIcon icon={faBars} />
                </label>
                <label className="logo">Software</label>
                <ul className='pro-unorder'>
                    <li className='pro-list'><NavLink className="pro-link" to="/">Home</NavLink></li>
                    <li className='pro-list'><NavLink className="pro-link" to="/about-us">About Us</NavLink></li>
                    <li className='pro-list'><NavLink className="pro-link" to="/our-services">Our Services</NavLink></li>
                    <li className='pro-list'><NavLink className="pro-link" to="/contact-us">Contact Us</NavLink></li>
                </ul>
            </nav>
        </React.Fragment>
    )
}

export default Header;

