import React from "react";
import Card from "./Card";
import Person from "./Person";

const PersonList = ({ persons }) => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {persons.map((person) => (
        <Card>
          <Person {...person}></Person>
        </Card>
      ))}
    </div>
  );
};

export default PersonList;
