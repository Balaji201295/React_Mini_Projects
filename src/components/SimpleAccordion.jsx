import React, { useState } from "react";
import { accordionData } from "../constants";
import { IoIosArrowDown } from "react-icons/io";
const SimpleAccordion = () => {
  const [selected, setSelected] = useState(null);

  const handleItemSelection = (id) => {
    // console.log(id);
    setSelected(id === selected ? null : id);
  };
  return (
    <section className="flex flex-col justify-center items-center">
      <h1>Accordion</h1>
      <div className="w-full max-w-2xl">
        {accordionData && accordionData.length > 0 ? (
          <div className="flex flex-col gap-2">
            {accordionData.map((data) => (
              <div key={data.id} className="item">
                <div
                  className="flex justify-between items-center py-2 px-4 bg-amber-200 rounded-sm cursor-pointer"
                  onClick={() => handleItemSelection(data.id)}
                >
                  <h3 className="text-base sm:text-lg font-medium">
                    {data.title}
                  </h3>
                  <IoIosArrowDown
                    className={`${
                      selected === data.id ? " rotate-180" : " rotate-0"
                    } transition-transform duration-500 ease-in-out`}
                  />
                </div>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    selected === data.id ? "max-h-screen" : "max-h-0"
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
