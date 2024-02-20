import React from "react";
import { getContrastYIQ } from "../helpers";

const Copied = ({ color }) => {
  return (
    <div className="copied" style={{ backgroundColor: `#${color}` }}>
      {" "}
      <span style={{ color: getContrastYIQ(color) }}>
        Copied #{color} to clipboard
      </span>
    </div>
  );
};

export default Copied;
