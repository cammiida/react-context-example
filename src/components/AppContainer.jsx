import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../App";
import Card from "./Card";
import styles from "./AppContainer.module.css";
import PersonList from "./PersonList";

const persons = [
  {
    firstName: "Mark",
    age: 35,
  },
  { firstName: "Ada", age: 207 },
  { firstName: "Karen", age: 44 },
];

const AppContainer = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log("themeContext: ", theme);

  return (
    <div
      className={`${styles.container} ${
        theme === "light" ? styles.light : styles.dark
      }`}
    >
      <h1>Listing Persons App</h1>
      <label className={styles.switch}>
        <input value={theme} onChange={toggleTheme} type="checkbox" />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
      <div className={styles.contentContainer}>
        <PersonList persons={persons}></PersonList>
      </div>
    </div>
  );
};

export default AppContainer;
