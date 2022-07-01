import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__content}>
        <div>
          <span className={styles.logo}>Star Wars</span>
        </div>
        <div>
          <nav className={styles.nav}>
            <a className={styles.nav__item} href={"/"}>
              Planet Page
            </a>
            <a className={styles.nav__item} href={"/"}>
              Resident Page
            </a>
            <a className={styles.nav__item} href={"/"}>
              Resident Details Page
            </a>
          </nav>
        </div>
        <div>
          <div className={styles.header__button__container}></div>
          <button className={styles.header__toggler}></button>
        </div>
      </div>
    </div>
  );
};

export default Header;
