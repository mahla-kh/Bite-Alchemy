import styles from "./Homepage.module.css";
import React from "react";
import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>
          You bring the ingredients
          <br /> we bring the magic !
          <br />
        </h1>
        <h2>
          Bite Alchemy whisks up your kitchen adventures
          <br />a flavor map sizzling with every bite you can dream of. Never
          let a delicious memory slip away
        </h2>
        <Link to="/cook" className="cta">
          Cook It Up !
        </Link>
      </section>
    </main>
  );
}
