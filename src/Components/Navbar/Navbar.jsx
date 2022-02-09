import React, {useState} from 'react';
import './Navbar.css';


function  Navbar()  {

    //change nav color when scrolling
    const [color, setColor]= useState(false)
    const changeColor= ()=>{
        if (window.scrollY >= 90){
            setColor(true)
        }else {
            setColor(false)
        }
    }
    window.addEventListener("scroll",changeColor)
    return (
        <nav className={color ? "header header-bg" : "header"}>
        <div className='logo'> <h1>E T Q .</h1></div>
        <div className='menu-bar'>
            <ul>
                <li>Shop All</li>
                <li>Sale</li>
                <li>Shoecare</li>
            </ul>
            <ul>
                <li>Search</li>
                <li>Help</li>
                <li>My account</li>
            </ul>
            

        </div>
        <div className='shopping-cart'> <p>0</p></div>
        </nav>
    )
};

export default Navbar;