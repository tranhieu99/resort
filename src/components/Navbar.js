import React, {useState} from 'react'

import Logo from '../images/logo.svg'
import {Link} from 'react-router-dom'
import { FaAlignJustify } from "react-icons/fa";
import classNames from 'classnames'

export default function Navbar(props) {
    const [isOpen,setIsOpen] = useState(false)
   function onHumburgerClick(){
       console.log(isOpen)
        setIsOpen(!isOpen);
    }
    return (
        <nav className = "__navbar ">
            <div className="baongoai __navbar-wrapper">
                <div className = "__navbar-logo-humburger">  
                <div className="logo"> <img src = {Logo} /> </div>
                    <button className= 'humburger' onClick = {onHumburgerClick}>
                        <FaAlignJustify /> 
                     </button>
                </div>
                <ul className = {classNames({
                    '__navbar-menu' : true,
                    '__navbar-menu-show': isOpen,
                    '__navbar-menu-hide' : !isOpen 
                })}>
                    <li>
                        <Link to = "/">Home</Link>
                    </li>
                    <li>
                        <Link to = "/rooms">Rooms</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
