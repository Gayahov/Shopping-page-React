import React, {useState,useRef} from 'react';
import './Navbar.css';


function Navbar()  {
    console.log("rendered")
    //change nav color when scrolling
    const [color, setColor]= useState(false);
    const navEl = useRef(null);
    const changeColor= ()=>{
        navEl.current.focus();
        if (window.scrollY >= 90){
            setColor(true)
        }else {
            setColor(false)
        }
    }
    const SearchInput = () =>{
        console.log("hi")
    }
    window.addEventListener("scroll",changeColor)
    return (
        <nav >
        <div className='logo'><h1>E T Q .</h1></div>
        <div className='menu-bar'>
            <ul>
                <li className="link">Shop All</li>
                <li className="link">Sale</li>
                <li className="link">Shoecare</li>
            </ul>
            <ul>
                <li className="link" onClick={SearchInput}>Search</li>
                <li className="link">Help</li>
                <li className="link">My account</li>
            </ul>
        </div>
        <div className='shopping-cart'> <p>0</p></div>
    
        </nav>
        
    )
};

export default Navbar;