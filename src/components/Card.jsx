import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../App";
import styles from "./Card.module.css";

const Card = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`${styles.card} ${
        theme === "light" ? styles.lightTheme : styles.darkTheme
      }`}
    >
      {children}
    </div>
  );
};

export default Card;
