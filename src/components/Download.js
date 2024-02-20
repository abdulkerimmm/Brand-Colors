import React, { useContext, useEffect, useState } from "react";
import Mycontext from "../Context/Context";
import { GrClose, GrDownload, GrLink } from "react-icons/gr";
import { Link } from "react-router-dom";

const Download = () => {
  const { selectedBrands, brandArray, setSelectedBrands } =
    useContext(Mycontext);
  const [downloadUrl, setDownloadUrl] = useState();
  const [cssMethod, setCssMethod] = useState("css");

  useEffect(() => {
    if (selectedBrands.length > 0) {
      let output = "";
      switch (cssMethod) {
        case "css":
          output += ":root {\n";
          selectedBrands.map((slug) => {
            let brand = brandArray.find((brand) => brand.slug === slug);
            brand.colors.map((color, key) => {
              output += `--${slug}-${key}: #${color};\n`;
            });
          });
          output += "}";
          break;

        case "scss":
          selectedBrands.map((slug) => {
            let brand = brandArray.find((brand) => brand.slug === slug);
            brand.colors.map((color, key) => {
              output += `\$${slug}-${key}: #${color};\n`;
            });
          });
          break;

        case "less":
          selectedBrands.map((slug) => {
            let brand = brandArray.find((brand) => brand.slug === slug);
            brand.colors.map((color, key) => {
              output += `@${slug}-${key}: #${color};\n`;
            });
          });
          break;
      }

      const blob = new Blob([output]);
      const url = URL.createObjectURL(blob);
      setDownloadUrl(url);
      return () => {
        URL.revokeObjectURL(url);
        setDownloadUrl("");
      };
    }
  }, [selectedBrands, cssMethod]);

  const getLink = () => {
    prompt("here the URL to share", `htttp://localhost:3000/}`);
  };
  return (
    <div className="actions">
      <div className="download">
        <select onChange={(e) => setCssMethod(e.target.value)}>
          <option value="css">CSS</option>
          <option value="scss">SCSS</option>
          <option value="less">LESS</option>
        </select>
        <a download={`brands.${cssMethod}`} href={downloadUrl}>
          <GrDownload />
        </a>

        <Link to={`/collection/${selectedBrands.join(",")}`}>
          <GrLink />
        </Link>
      </div>
      <div className="close" onClick={() => setSelectedBrands([])}>
        <GrClose />
        {selectedBrands.length} brands selected
      </div>
    </div>
  );
};

export default Download;
