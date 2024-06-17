import React, { useEffect, useState } from "react";
import api from "../api/gallery";
const LoadMoreItems = () => {
  const [galleryItem, setGalleryItem] = useState([]);
  const [itemToShow, setItemToShow] = useState(12);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get("/gallery");
      setGalleryItem(response.data);
      try {
      } catch (error) {
        console.log("Error:", error.message);
      }
    };
    fetchData();
  }, []);

  const handleLoadMore = () => {
    if (itemToShow >= galleryItem.length) {
      setItemToShow(12);
    } else {
      setItemToShow((prev) => prev + 8);
    }
  };
  return (
    <section>
      <h1>Load More Items</h1>
      <div className="w-full grid grid-cols-1 ss:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {galleryItem.slice(0, itemToShow).map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-start items-start gap-2 border border-amber-200 shadow-md p-4"
          >
            <p className="text-xs bg-black text-amber-200 uppercase py-1 px-2 rounded">
              {item.category}
            </p>
            <img src={item.image} alt={item.title} />
            <h3 className="text-base font-semibold capitalize">{item.title}</h3>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center my-12">
        <button
          type="button"
          className="bg-black text-amber-200 py-2 px-6 rounded"
          onClick={handleLoadMore}
        >
          {itemToShow >= galleryItem.length ? "Load less" : "Load more"}
        </button>
      </div>
    </section>
  );
};
export default LoadMoreItems;
