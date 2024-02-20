import React, { useContext, useState } from "react";
import "./content.scss";
import Search from "./Search";
import { Brand } from "./Brand";
import Mycontext from "../Context/Context";
import LazyLoad from "react-lazy-load";
import Download from "./Download";
const Content = () => {
  const { brandArray, selectedBrands } = useContext(Mycontext);
  const [search, setSearch] = useState("");

  const filteredBrands = brandArray.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="content">
      <header>
        <Search setSearch={setSearch} />
        {selectedBrands.length !== 0 && <Download />}
      </header>

      <section className="brands">
        {filteredBrands.map((brand) => (
          <LazyLoad
            once={true}
            overflow={true}
            key={brand.slug}
            placeholder="yuklneior"
          >
            <Brand brand={brand} />
          </LazyLoad>
        ))}
      </section>
    </main>
  );
};

export default Content;
