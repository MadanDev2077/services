import React from "react";

const RoundedButton = ({ classes, text, onClick }) => {
  return (
    <button onClick={onClick} className={` button ${classes}`}>
      {text ?? "Click"}
    </button>
  );
};

export default RoundedButton;
