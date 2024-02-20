import React, { useContext, useState } from "react";
import { getContrastYIQ } from "../helpers";
import "./brand.scss";
import Mycontext from "../Context/Context";
import { CopyToClipboard } from "react-copy-to-clipboard";

export const Brand = ({ brand }) => {
  const { selectedBrands, setSelectedBrands, setCopied } =
    useContext(Mycontext);

  const HandleBrands = () => {
    if (selectedBrands.includes(brand.slug)) {
      setSelectedBrands(selectedBrands.filter((item) => item !== brand.slug));
    } else {
      setSelectedBrands([...selectedBrands, brand.slug]);
    }
  };

  return (
    <div
      className={`boxes ${
        selectedBrands.includes(brand.slug) ? "selected" : ""
      } `}
    >
      <h5 onClick={HandleBrands}>{brand.title}</h5>
      <div className="colors">
        {brand.colors.map((color, index) => (
          <CopyToClipboard
            key={index}
            text={color}
            onCopy={() => setCopied(color)}
          >
            <div
              className="color"
              style={{
                backgroundColor: `#${color}`,
                color: getContrastYIQ(color),
              }}
            >
              <span>{color}</span>
            </div>
          </CopyToClipboard>
        ))}
      </div>
      <br></br>
    </div>
  );
};
