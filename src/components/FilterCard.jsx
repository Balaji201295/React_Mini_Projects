import React, { useEffect, useState } from "react";
import api from "../api/gallery";

const FilterCard = () => {
  const [galleryData, setGalleryData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 9;

  // Fetch Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/gallery");
        setGalleryData(response.data);
        setFilterData(response.data);
      } catch (error) {
        console.log("Error:", error.message);
      }
    };
    fetchData();
  }, []);

  // filter Data
  useEffect(() => {
    setFilterData(
      selectedCategory === "all"
        ? galleryData
        : galleryData.filter((data) => data.category === selectedCategory)
    );
  }, [selectedCategory, galleryData]);

  // Pagination
  const indexOfLastData = currentPage * dataPerPage; // 1 * 9 = 9
  const indexOfFirstData = indexOfLastData - dataPerPage; // 9 - 9 = 0
  const currentData = filterData.slice(indexOfFirstData, indexOfLastData);
  const totalPages = Math.ceil(filterData.length / dataPerPage); // 100/9 = 11

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // categories
  const allCategories = [
    "all",
    ...new Set(galleryData.map((data) => data.category)),
  ];
  return (
    <section>
      <h1>Gallery</h1>
      {/* CATEGORIES */}
      <div className="flex flex-wrap justify-center items-center gap-4 my-12">
        {allCategories.map((category) => (
          <button
            type="button"
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`border border-amber-200  ${
              selectedCategory === category
                ? "bg-amber-500 text-white"
                : "text-amber-600"
            } py-1 px-2 rounded uppercase`}
          >
            {category}
          </button>
        ))}
      </div>
      {/* DATA */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {currentData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-start items-start gap-4 bg-white border border-amber-200 rounded-md shadow-md p-2 sm:p-4"
          >
            <img src={item.image} alt={item.title} className="w-full h-auto" />
            <p className="text-xs font-semibold text-white uppercase bg-blue-600 py-[2px] px-1 rounded">
              {item.category}
            </p>
            <h3 className="text-base font-medium capitalize min-h-12">
              {item.title}
            </h3>
            <p className="text-sm font-normal capitalize">{item.content}</p>
          </div>
        ))}
      </div>
      {/* PAGINATION */}
      <div className="flex justify-center items-center gap-4 my-12">
        <button
          type="button"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className={currentPage === 1 ? "cursor-not-allowed" : ""}
        >
          Prev
        </button>
        <div className="flex flex-wrap justify-center items-center gap-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              type="button"
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`${
                currentPage === index + 1
                  ? "bg-amber-600 text-white"
                  : "text-amber-600"
              } border border-amber-500 w-8 h-8 text-sm`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`${
            currentPage === totalPages ? "cursor-not-allowed" : ""
          }`}
        >
          Next
        </button>
      </div>
    </section>
  );
};
export default FilterCard;
