import { useEffect, useState } from "react";
import "./App.css";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import Mycontext from "./Context/Context";
import brandsData from "./brands.json";
import Copied from "./components/Copied";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Collection from "./components/Collection";

function App() {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [copied, setCopied] = useState(false);
  const brandArray = [];
  Object.keys(brandsData).map((key) => brandArray.push(brandsData[key]));

  const data = {
    brandArray,
    selectedBrands,
    setSelectedBrands,
    setCopied,
  };
  useEffect(() => {
    const timeout = setTimeout(() => setCopied(false), 500);
    return () => clearTimeout(timeout);
  }, [copied]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Content />,
    },
    {
      path: "collection/:slugs",
      element: <Collection />,
    },
  ]);

  return (
    <Mycontext.Provider value={data}>
      {copied && <Copied color={copied} />}
      <Sidebar />
      <RouterProvider router={router} />
    </Mycontext.Provider>
  );
}

export default App;
