import React from "react";
import styles from "./Header.module.scss";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggler = () => setMenuOpen((p) => !p);

  return (
    <div className={styles.header}>
      <div className={styles.header__content}>
        <div>
          <span className={styles.logo}>Star Wars</span>
        </div>
        <div>
          <nav
            className={`${styles.nav} ${menuOpen ? styles[`nav--open`] : {}}`}
          >
            <a className={styles.nav__item} href={"/"}>
              Planet Page
            </a>
            <a className={styles.nav__item} href={"/"}>
              Resident Page
            </a>
            <a className={styles.nav__item} href={"/"}>
              Resident Details Page
            </a>
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
            <BiMenuAltRight />
          </button>
        </div>
      </div>
    </div>
  );
};

const Button = () => {
  return <button className={styles.button}>Click me</button>;
};

export default Header;
