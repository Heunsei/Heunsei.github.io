import React from "react";
import styles from "./Navigator.module.css";

const Navigator = (): React.JSX.Element => {
  return (
    <header className={styles.navigatorContainer}>
      <ul>
        <li>
          <a href="">INTRO</a>
          <a href="">ABOUT</a>
          <a href="">PROJECTS</a>
          <a href="">CONTACT</a>
        </li>
      </ul>
    </header>
  );
};

export default Navigator;
