import React, { useState, useRef, useEffect } from "react";
import CartButton from "./CartButton/CartButton";
import HelpInformation from "./HelpInformation/HelpInformation";
import MyAccount from "./MyAccount/MyAccount";
import "./Navbar.css";
import SearchComponent from "./SearchComponent/SearchComponent";

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

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  const [openHeader, setOpenHeader] = useState(false);
  const [headerContent, setHeaderContent] = useState(null);
  const [openMyAccount, setOpenMyAccount] = useState(false);
  const [accountContent, setAccountContent] = useState(false);

  const headerContentChange = (content) => () => {
    setHeaderContent(content);
    if (content === headerContent) {
      setOpenHeader(!openHeader);
    }
  };
  const accountContentChange = (content) => () => {
    setAccountContent(content);
    if (content === accountContent) {
      setOpenMyAccount(!openMyAccount);
    }
  };
 
  return (
    <div className={openHeader ? "header search_input" : "header "}>
      <nav ref={navEl} className={color ? "header header-bg" : "header"}>
        <div className="menu-bar">
          <div className="page-information">
            <h1 className="logo">E T Q .</h1>
            <ul>
              <li className="link">Shop All</li>
              <li className="link">Sale</li>
              <li className="link">Shoecare</li>
            </ul>
          </div>
          <div
            className={
              openMyAccount ? "account-section height" : "account-section"
            }
          >
            <ul>
              <li className="link" onClick={headerContentChange("search")}>
                Search
              </li>

              <li className="link" onClick={headerContentChange("help")}>
                Help
              </li>
              <li className="link" onClick={accountContentChange("my_account")}>
                My account
              </li>
              <div
                className="shopping-cart"
                onClick={accountContentChange("cart_btn")}
              >
                <p>0</p>
              </div>
            </ul>
            {openMyAccount ? (
              accountContent === "my_account" ? (
                <MyAccount />
              ) : accountContent === "cart_btn" ? (
                <CartButton />
              ) : null
            ) : null}
          </div>
        </div>
        {openHeader ? (
          headerContent === "search" ? (
            <SearchComponent />
          ) : headerContent === "help" ? (
            <HelpInformation />
          ) : null
        ) : null}
      </nav>
    </div>
  );
}

export default Navbar;
