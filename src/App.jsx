import React from "react";
import {
  DataWithPagination,
  FilterCard,
  ImageSlider,
  LoadMoreItems,
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
    <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={10} />
    <DataWithPagination />
    <FilterCard />
    <LoadMoreItems />
  </div>
);
export default App;
