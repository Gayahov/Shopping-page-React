import React, { useState, useRef, useEffect } from "react";
import CartButton from "./CartButton/CartButton";
import HelpInformation from "./HelpInformation/HelpInformation";
import MyAccount from "./MyAccount/MyAccount";
import NavbarSearch from "./NavbarSearch/NavbarSearch";
import "./Header.css"

function Header() {
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
  const headerContentRef = useRef();
  const accountContentRef = useRef();

  headerContentRef.current = headerContent;
  console.log(openHeader);

  /////// open
  const headerContentChange = (content) => () => {
    setHeaderContent(content); // help
    headerContentRef.current = content; //help
    if (content === headerContentRef.current) {
      setOpenHeader(!openHeader);
      setOpenMyAccount(false);
    }
    if (content !== headerContent) {
      setOpenHeader(true);
    }
  };

  const accountContentChange = (content) => () => {
    setAccountContent(content);
    accountContentRef.current = content;
    if (content === accountContentRef.current) {
      setOpenMyAccount(!openMyAccount);
      setOpenHeader(false);
    }
    if (content !== accountContent) {
      setOpenMyAccount(true);
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
          <div className={openMyAccount ? "account-section height" : "account-section"}>
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
                  <>
                <MyAccount />
                  <div className="overlay" onClick={accountContentChange("my_account")}></div>
                    </>
              ) : accountContent === "cart_btn" ? (
                  <>
                <CartButton />
                <div className="overlay"  onClick={accountContentChange("cart_btn")}></div>
                
                </>
              ) : null
            ) : null}
          </div>
        </div>
        {openHeader ? (
          headerContent === "search" ? (
              <>
            <NavbarSearch />
            <div className="overlay"  onClick={accountContentChange("search")}></div>
            </>
          ) : headerContent === "help" ? (
              <>
              <div className="overlay"  onClick={accountContentChange("help")}></div>
            <HelpInformation />
            </>
          ) : null
        ) : null}
      </nav>
    </div>
  );
}

export default Header;