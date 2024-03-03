//?React-icons
import { BsArrowRightShort } from "react-icons/bs";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoYoutube } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";

//Images
import bicycleAnimation from "../../src/assets/images/bicycle-animation.gif";

//!Links
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="newsletter">
            <h1 className="mewsletterTitle">Become an insider</h1>
            <p className="newsletterSubtitle">
              Receive exclusive offers, hydration news, and more when you
              subscribe.
            </p>
            <form>
              <div className="form">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email address"
                />
                <BsArrowRightShort fill="#96a4b0" className="arrow" />
              </div>
            </form>
            <ul className="socialLinks">
              <li className="social">
            
                <Link>
                  <BiLogoFacebook />
                </Link>
              </li>
              <li className="social">
          
                <Link>
                  <BiLogoInstagram />
                </Link>
              </li>
              <li className="social">
          
                <Link>
                  <BiLogoYoutube />
                </Link>
              </li>
              <li className="social">
            
                <Link>
                  <BiLogoTwitter />
                </Link>
              </li>
            </ul>

            <ul className="footerLegalLinks">
              <li>
                <Link className="legal">Terms & Privacy</Link>
              </li>
              <li>
                <Link className="legal">Accesibility</Link>
              </li>
            </ul>
          </div>

          <div className="linkListWrapper">
            <div className="linkList">
              <ul className="myLinkList">
                <li className="linkItem">
                  <Link className="myLinkItem">FAQ</Link>
                </li>
                <li className="linkItem">
                  <Link className="myLinkItem">Reviews</Link>
                </li>
                <li className="linkItem">
                  <Link className="myLinkItem">Contact</Link>
                </li>
                <li className="linkItem">
                  <Link className="myLinkItem">Find a retailer</Link>
                </li>
                <li className="linkItem">
                  <Link className="myLinkItem">Corporate gifting</Link>
                </li>
              </ul>
            </div>
            <div className="linkList">
              <ul className="myLinkList">
                <li className="linkItem">
                  <Link className="myLinkItem">basq magazine</Link>
                </li>
                <li className="linkItem">
                  <Link className="myLinkItem">Press</Link>
                </li>
                <li className="linkItem">
                  <Link className="myLinkItem">Our story</Link>
                </li>
                <li className="linkItem">
                  <Link className="myLinkItem">Affiliate program</Link>
                </li>
                <li className="linkItem">
                  <Link className="myLinkItem">Ambassador program</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="bicycleAnimation">
            <img src={bicycleAnimation} alt="bicycleDriwingMan" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
