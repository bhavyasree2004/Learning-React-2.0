import React from "react";
import Data from "./data.js";
import Card from "./components/card.js";
import Items from "./components/items.js";
import Heading from "./components/heading.js";

const App = () => {
  return (
    <div className="parent-component">
      <Heading />
      <Items data={Data}></Items>
    </div>
  );
};

export default App;
