import PageNav from "../components/PageNav";
import styles from "./Product.module.css";
import React from "react";

export default function AboutThisPage() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <img
          src="logo2.png"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About Bite Alchemy</h2>
          <p>
            Bite Alchemy is a user-friendly web platform that allows individuals
            to input the ingredients they have on hand and receive tailored
            recipe suggestions. 🥕🍅 This innovative approach not only helps
            minimize food waste ♻️ but also inspires creativity in the kitchen.
            Whether you're an experienced cook 👩‍🍳 or just starting out, Bite
            Alchemy makes it easy to transform everyday ingredients into
            delicious meals! 🍽️😋
          </p>
          <p>
            This platform is particularly useful for housewives 🏠 and
            individuals living alone, who often struggle with meal planning. By
            providing quick and easy recipe ideas, Bite Alchemy saves time ⏰
            and encourages users to make the most of their pantry staples. 🥫
            With Bite Alchemy, cooking becomes an enjoyable adventure 🌟,
            empowering users to explore new flavors and dishes without the
            hassle of extensive grocery shopping. 🛒🍲
          </p>
        </div>
      </section>
    </main>
  );
}
