import React from 'react'
import { Link } from "react-router-dom";
import Logo from "../images/logo.svg";
const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="navbar">
                    <Link to="#" className='brandName'><img src={Logo} alt="" /></Link>
                    <Link to="#" className='btn btn-primary'>Get Early Access</Link>
                </div>
            </div>
        </header>
    )
}

export default Header
