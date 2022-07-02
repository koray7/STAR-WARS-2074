import React from "react";
import styles from "./Header.module.scss";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { useState } from "react";

import { NavLink, useNavigate } from "react-router-dom";
import "../../styles/index.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggler = () => setMenuOpen((p) => !p);

  return (
    <div className={styles.header}>
      <div className={styles.header__content}>
        <div>
          <span className={styles.logo}>Star Wars 2074</span>
        </div>
        <div>
          <nav
            className={`${styles.nav} ${menuOpen ? styles[`nav--open`] : {}}`}
          >
            <NavLink
              className={styles.nav__item}
              to={"/"}
              onClick={menuToggler}
            >
              Planet Page
            </NavLink>
            <NavLink
              className={styles.nav__item}
              to={"/residents"}
              onClick={menuToggler}
            >
              Resident Page
            </NavLink>

            <div className={styles.nav__button__container}>
              <Button />
            </div>
          </nav>
        </div>
        <div>
          <div className={styles.header__button__container}>
            <Button />
          </div>
          <button className={styles.header__toggler} onClick={menuToggler}>
            {!menuOpen ? <BiMenuAltRight /> : <AiOutlineCloseSquare />}
          </button>
        </div>
      </div>
    </div>
  );
};

const Button = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button className={styles.button} onClick={() => navigate("/")}>
        Home
      </button>
    </div>
  );
};

export default Header;
