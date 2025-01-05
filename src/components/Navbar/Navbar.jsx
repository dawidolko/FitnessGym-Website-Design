import "./Navbar.scss";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../ShopContext/ShopContext";

const Navbar = () => {
  const { totalCartItems } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  const [navBgc, setNavBgc] = useState(false);

  useEffect(() => {
    const changeBgc = () => {
      setNavBgc(window.scrollY > 10);
    };
    window.addEventListener("scroll", changeBgc);

    return () => {
      window.removeEventListener("scroll", changeBgc);
    };
  }, []);

  return (
    <nav className={navBgc ? "navbar navbar__bgc" : "navbar"}>
      <div className="navbar__container container">
        <Link to="/FitnessGym/" className="navbar__logo">
          <p className="navbar__logo-text">FitnessGym</p>
        </Link>
        <ul
          className={
            isOpen ? "navbar__links navbar__links-active" : "navbar__links"
          }>
          <li>
            <NavLink
              className="navbar__link"
              to="/FitnessGym/"
              onClick={closeNav}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar__link"
              to="/FitnessGym/about"
              onClick={closeNav}>
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar__link"
              to="/FitnessGym/shop"
              onClick={closeNav}>
              SHOP
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar__link"
              to="/FitnessGym/faq"
              onClick={closeNav}>
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar__link"
              to="/FitnessGym/blog"
              onClick={closeNav}>
              BLOG
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar__link"
              to="/FitnessGym/contact"
              onClick={closeNav}>
              CONTACT
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar__cart-link"
              to="/FitnessGym/cart"
              onClick={closeNav}>
              <div className="navbar__cart">
                <span className="navbar__quantity">{totalCartItems()}</span>
                <FaShoppingCart className="navbar__basket" />
              </div>
            </NavLink>
          </li>
        </ul>
        <div className="navbar__hamburger" onClick={handleClick}>
          {isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
