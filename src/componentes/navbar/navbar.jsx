import React, { useState } from "react";
import CartWidget from "../container/cartWidget";
import "../navbar.css";
import { Link, NavLink } from "react-router-dom";


function NavBar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");
    
    
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <NavLink to="/" href="#" className="nav__brand">
        El boticario
      </NavLink>
      <ul className={active}>
        <li className="nav__item">
          <a href="#" className="nav__link">
                Inicio
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Bebidas
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Vasos
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Accesorios
          </a>
        </li>
        <li className="nav__item">
          <Link to="/cart">
          <CartWidget/>
          </Link>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default NavBar;