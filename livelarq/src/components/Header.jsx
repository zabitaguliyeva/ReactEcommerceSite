import React, { useContext, useEffect, useState } from "react";

import { Link, NavLink, useLocation } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { PiShoppingCartLight } from "react-icons/pi";
import logo from "../assets/images/logo.svg";

import { Cart } from "./Cart";
import { CartContext } from "../pages/CartContext";

import { useTranslation } from "react-i18next";

import { BsArrowRight } from "react-icons/bs";
import dropdownShopAlldrink from "../assets/images/content_section-drinkware.png";
import dropdownShopAllPuri from "../assets/images/content_section-purification.png";
import dropdownShopAllHome from "../assets/images/content_section-home2.png";
import Menu from "./Menu";

const Header = () => {
  const { t, i18n } = useTranslation();
  const { cart } = useContext(CartContext);
  const findTotalQuantity = cart.reduce(
    (acc, product) => acc + product.quantity,
    0
  );
  const path = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [path.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <header className={`header ${isSticky ? "sticky" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="navBarMenu" onClick={toggleMenu}>
            {isOpenMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
          </div>

          <nav>
            <ul className="navlink">
              <li className="navItem">
                <div className="navLinkWithDropdown">
                  <NavLink className="leftItemLink underline-hover" to="/shop">
                  {t(`shopAll`)}
                    <div className="dropdownContent">
                      <div className="upDownContents">
                        <div className="upContent">
                          <div className="shopNow"  onClick={()=>setIsOpen(null)}>
                            Explore All
                            <BsArrowRight className="arrow" />
                          </div>
                          <ul className="dropdownLists">
                            <li>Filters & Accessories</li>
                            <li>Gift sets</li>
                            <li>Corporate gifting</li>
                          </ul>
                        </div>
                        <div className="downContent">
                          <ul className="dropdownLists">
                            <li>
                              <div className="learnMore">LEARN MORE</div>
                            </li>
                            <li>PureVis™ technology</li>
                            <li>Nano Zero technology</li>
                          </ul>
                        </div>
                      </div>
                      <div className="dropdownImg">
                        <img src={dropdownShopAlldrink} alt="" />
                      </div>
                      <div className="dropdownImg">
                        <img src={dropdownShopAllPuri} alt="" />
                      </div>
                      <div className="dropdownImg">
                        <img src={dropdownShopAllHome} alt="" />
                      </div>
                    </div>
                  </NavLink>
                </div>
              </li>
              <li className="navItem">
                <NavLink className="leftItemLink underline-hover" to="/shop">
                {t(`purification`)}
                </NavLink>
              </li>
              <li className="navItem">
                <NavLink className="leftItemLink underline-hover" to="/">
                {t(`home`)}
                </NavLink>
              </li>
              <li className="navItem">
                <NavLink className="leftItemLink underline-hover" to="/shop">
                {t(`drinkware`)}
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="logo">
            <Link to="/" className="larqLogo">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <nav>
            <ul className="navlink rightNav">
              <li className="navItem">
                <div className="languageBtn">
               
                  <button
                    onClick={() => {
                      i18n.changeLanguage("az");
                    }}
                    className="languageButton"
                  >
                    {t("languages.az")}
                  </button>
                  <button
                    onClick={() => {
                      i18n.changeLanguage("en");
                    }}
                    className="languageButton"
                  >
                    {t("languages.en")}
                  </button>
                </div>
              </li>
              <li className="navItem">
                <NavLink className="itemLink" to="/faq">
                {t(`faq`)}
                </NavLink>
              </li>
              <li className="navItem">
                <NavLink className="itemLink" to="/login">
                  {t(`login`)}
                </NavLink>
              </li>
              <li className="cartItem" onClick={() => setIsOpen(true)}>
              {t(`cart`)} <span className="cartCounter">{findTotalQuantity}</span>
              </li>
            </ul>
          </nav>

          <div className="userArea">
            <div className="shopCartLight" onClick={() => setIsOpen(true)}>
              <PiShoppingCartLight />
              <div className="shoppingIconCounter">{findTotalQuantity}</div>
            </div>
          </div>
        </div>
      </div>
      <Cart isOpen={isOpen} setisOpen={setIsOpen} />
      <Menu isOpenMenu={isOpenMenu} setisOpenMenu={setIsOpenMenu} />
    </header>
  );
};

export default Header;
