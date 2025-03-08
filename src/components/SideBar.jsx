import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import Logo from "./Logo";
// import AppNav from "./AppNav";
// import { Outlet } from "react-router-dom";
import { ingredients } from "../context/ingredientsContext";
function SideBar() {
  const [activeIDs, setActiveIDs] = useState([]);

  function toggleHandler(index) {
    if (activeIDs.includes(index)) {
      console.log("filtering");
      setActiveIDs(activeIDs.filter((id) => id !== index));
    } else {
      console.log("adding");
      setActiveIDs((activeIDs) => [...activeIDs, index]);
      console.log(activeIDs);
    }
  }

  return (
    <div className={styles.sidebar}>
      <Logo />
      {/* <AppNav /> */}
      {/* <p>list of countries</p> */}
      {/* <Outlet /> */}
      <div className={styles.category}>
        <div>
          <span>
            {ingredients ? (
              ingredients.map((ingre, index) => (
                <a
                  key={index}
                  className={`${styles.item} ${
                    activeIDs.includes(index) ? styles.selected : null
                  }`}
                  onClick={() => toggleHandler(index)}
                >
                  {ingre}
                </a>
              ))
            ) : (
              <h2>ingredients not found</h2>
            )}
          </span>
        </div>
      </div>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy;All Rights To Bite Alchemy {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}

export default SideBar;
