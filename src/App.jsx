import React from "react";
import {
  DataWithPagination,
  ImageSlider,
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
    <ImageSlider />
    <DataWithPagination />
  </div>
);
export default App;
