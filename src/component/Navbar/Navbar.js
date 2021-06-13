import React from 'react'
import { MenuItems } from './MenuItems';
import './Navbar.css';
function Navbar() {
    return (
        <nav className="NavbarItems">
            <p className="navbar-logo">Pupil</p>
            <ul className="nav-menu">
                {MenuItems.map((item, index)=>{
                    return(
                        <il key={index}>
                            <a className={item.className} href={item.url}>{item.title}</a>
                        </il>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navbar;