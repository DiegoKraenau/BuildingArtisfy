import Logo from '../../../images/logo-light.png';
import LogoDark from '../../../images/logo-dark.png';
import "./_navbar.scss";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [state, setState] = useState(false);


    const handleScroll = () => {
        if (window.scrollY > 120) {
            setState(true);
        } else {
            setState(false);
        }
    }

    useEffect(() => {

        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }

    }, [])




    return (
        <div className={`navbar ${state ? 'whiteBg' : 'transparent'}`}>
            <div className="navbar-content container">
                <div className="navbar-left">
                    <img src={state ? LogoDark : Logo} alt="logo" />
                </div>
                <input type="checkbox" id="check"></input>
                <label htmlFor="check" className={`checkbtn ${state ? 'black':'white'}`}>
                    <i className="fa fa-bars"></i>
                </label>
                <ul className="navbar-right">
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <a href="/#">Help</a>
                    </li>
                    <li>
                        <a href="/#">About</a>
                    </li>
                    <li>
                        <a href="/#">Information</a>
                    </li>
                </ul>
            </div>
        </div>

    );
}

export default Navbar;