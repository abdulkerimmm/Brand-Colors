import { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { GrLinkPrevious } from "react-icons/gr";
import Download from "./Download";

import Mycontext from "../Context/Context";
import { Brand } from "./Brand";

const Collection = () => {
  const { slugs } = useParams();
  // const history = useHistory();
  const { setSelectedBrands, selectedBrands, setSearch, brandArray } =
    useContext(Mycontext);

  const clearSelectedBrands = () => {
    setSelectedBrands([]);
    setSearch("");
    // history.push("/");
  };

  useEffect(() => {
    setSelectedBrands(slugs.split(","));
  }, []);

  return (
    <main className="content">
      <header className="header">
        <Link to="/" onClick={clearSelectedBrands}>
          <a className="back-btn">
            <GrLinkPrevious />
            All Brands
          </a>
        </Link>

        {selectedBrands.length !== 0 && <Download />}
      </header>
      <section className="brands">
        {selectedBrands.map((slug) => {
          let brand = brandArray.find((brand) => brand.slug === slug);
          return <Brand brand={brand} />;
        })}
      </section>
    </main>
  );
};

export default Collection;
