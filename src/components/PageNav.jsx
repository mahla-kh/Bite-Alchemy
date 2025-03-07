import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import React from "react";
import Logo from "./Logo";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/AboutMe">About Me !</NavLink>
        </li>
        <li>
          <NavLink to="/AboutPage">About This Page</NavLink>
        </li>
        <li>
          <NavLink to="/Login" className={styles.ctaLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
