import React from "react";
import Button from "./Button";

const list = [
  "flex",
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Soccer",
  "Cricket",
  "Valentines",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((button, index) => (
        <Button key={index} name={button} />
      ))}
    </div>
  );
};

export default ButtonList;
