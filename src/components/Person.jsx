import React from "react";

const Person = (props) => {
  return (
    <>
      {Object.entries(props).map(([key, value]) => (
        <p>
          {key}: {value}
        </p>
      ))}
    </>
  );
};

export default Person;
