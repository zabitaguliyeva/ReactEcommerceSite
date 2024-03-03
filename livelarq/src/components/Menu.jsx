import React from "react";
import dropdownShopAlldrink from "../assets/images/content_section-drinkware.png";
import dropdownShopAllPuri from "../assets/images/content_section-purification.png";
import dropdownShopAllHome from "../assets/images/content_section-home2.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const Menu = ({ isOpenMenu, setisOpenMenu }) => {
  // Check if isOpenMenu is true, and render the component accordingly
  if (!isOpenMenu) {
    return null; // Return null if isOpenMenu is false to hide the component
  }

  return (
    <section className="menu">
      <div className="menuContainer">
        <div className="navContainer">
         
            <Link to="/shop" className="menuNavigator navColorsBrown">
              <div className="menuNavImg">
                <img src={dropdownShopAllPuri} alt="purification navigation" />
              </div>
              <div className="menuNavContent">
                <h4>Purification</h4>
                <p>Filter or purify water on the go</p>
              </div>
            </Link>
      
         
            <Link to="/" className="menuNavigator  navColorsGray">
              <div className="menuNavImg">
                <img src={dropdownShopAllHome} alt="purification navigation" />
              </div>
              <div className="menuNavContent">
                <h4>Home</h4>
                <p>Equip your home with Nano Zero Filtration</p>
              </div>
            </Link>
         
           <Link className="menuNavigator navColorsBlue">
           <div className="menuNavImg">
              <img src={dropdownShopAlldrink} alt="purification navigation" />
            </div>
            <div className="menuNavContent">
              <h4>Drinkware</h4>
              <p>Hydrate effortlessly on the go</p>
            </div>
           </Link>
          </div>
  
   <div className="dropdownLinkWrapper">
   <Link to="/shop" className="shopNow">
          Explore All
          <BsArrowRight className="arrow" />{" "}
        </Link>
        <ul className="menuLinks">
          <li>
            <Link to={"/"}>Filters & Accessories</Link>
          </li>
          <li>
            <Link >Gift sets</Link>
          </li>
          <li>
            <Link to={"/"}>Corporate gifting</Link>
          </li>
          <li>
            <Link to={"/faq"} onClick={()=>setisOpenMenu(null)}>FAQ</Link>
          </li>
          <li>
            <Link to={"/login"} onClick={()=>setisOpenMenu(null)}>Login</Link>
          </li>
        </ul>
       
   </div>
      </div>
    </section>
  );
};

export default Menu;
