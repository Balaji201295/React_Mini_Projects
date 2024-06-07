import React, { useState } from "react";
import { accordionData } from "../constants";
import { IoIosArrowDown } from "react-icons/io";

const SimpleAccordion = () => {
  const [selected, setSelected] = useState([]);
  const [enableMultiple, setEnableMultiple] = useState(false);

  // Single Selection
  // const handleItemSelection = (id) => {
  //   // console.log(id);
  //   setSelected(id === selected ? null : id);
  // };

  // Multiple Selection
  const toggleSelection = (id) => {
    setSelected((previousSelected) => {
      if (enableMultiple) {
        return previousSelected.includes(id)
          ? previousSelected.filter((item) => item !== id)
          : [...previousSelected, id];
      } else {
        return previousSelected.includes(id) ? [] : [id];
      }
    });
  };

  const isItemSelected = (id) => selected.includes(id);

  return (
    <section className="flex flex-col justify-center items-center gap-4">
      <h1>Accordion</h1>
      <button
        type="button"
        className="text-base font-medium bg-amber-200 py-2 px-4 rounded-sm border border-black"
        onClick={() => setEnableMultiple((prev) => !prev)}
      >
        {enableMultiple ? "Disable Multiple" : "Enable Multiple"}
      </button>
      <div className="w-full max-w-2xl">
        {accordionData && accordionData.length > 0 ? (
          <div className="flex flex-col gap-2">
            {accordionData.map((data) => (
              <div key={data.id} className="item">
                <div
                  className="flex justify-between items-center py-2 px-4 bg-amber-200 rounded-sm cursor-pointer"
                  onClick={() => toggleSelection(data.id)}
                >
                  <h3 className="text-base sm:text-lg font-medium">
                    {data.title}
                  </h3>
                  <IoIosArrowDown
                    className={`${
                      isItemSelected(data.id) ? "rotate-180" : "rotate-0"
                    } transition-transform duration-500 ease-in-out`}
                  />
                </div>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isItemSelected(data.id) ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  <p className="text-sm sm:text-base p-2">{data.content}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No Data Found</p>
        )}
      </div>
    </section>
  );
};

export default SimpleAccordion;
