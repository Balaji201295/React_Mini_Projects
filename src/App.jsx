import React from "react";
import {
  MultipleSelectionAccordion,
  RandomColor,
  Rating,
  SimpleAccordion,
} from "./components";
const App = () => (
  <div className="App">
    <SimpleAccordion />
    <MultipleSelectionAccordion />
    <RandomColor />
    <Rating noOfStars={10} />
  </div>
);
export default App;
