import React, { useState, useRef, useEffect } from "react";
import HelpInformation from "./HelpInformation/HelpInformation";
import "./Navbar.css";
import NavbarSearch from "./NavbarSerach/NavbarSearch";

function Navbar() {
  const [color, setColor] = useState(false);
  const navEl = useRef();
  //change nav color when scrolling
  const changeColor = () => {
    navEl.current.focus();
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  const [open, setOpen] = useState(false);
  const container = useRef(null);
  
//   const handleClickOutside = event => {
//     if (container.current && !container.current.contains(event.target)) {
//       setOpen(false);
//     }
//   };

// //   useEffect(() => {
// //     document.addEventListener("mousedown", handleClickOutside);

// //     return () => {
// //       // clean up
// //       document.removeEventListener("mousedown", handleClickOutside);
// //     };
//   });

  return (
    <div className={open ? "header search_input": "header "}>
      <nav ref={navEl} className={color ? "header header-bg" : "header"} >
        <div className="logo">
          <h1>E T Q .</h1>
        </div>
        <div className="menu-bar">
          <ul>
            <li className="link">Shop All</li>
            <li className="link">Sale</li>
            <li className="link">Shoecare</li>
          </ul>
          <ul>
            <li className="link" onClick={() => setOpen(!open)} >
              Search
            </li>
            
            <li className="link">Help</li>
            <li className="link">My account</li>
            <div className="shopping-cart">
              <p>0</p>
            </div>
          </ul>
        </div>
        {open && (
        <NavbarSearch ref={container}></NavbarSearch>
      )}
      <HelpInformation></HelpInformation>
      </nav>
     
    </div>
  );
}

export default Navbar;
