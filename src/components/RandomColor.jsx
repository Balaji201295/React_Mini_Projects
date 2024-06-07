import React, { useEffect, useState } from "react";
const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  // RandomColor Utility
  const randomColorUtility = (length) => {
    return Math.floor(Math.random() * length);
  };

  // HEX Color = #000000
  const handleCreateRandomHEXColor = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  };

  // RGB Color = rgb(0,0,0)
  const handleCreateRandomRGBColor = () => {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    setColor(`rgb(${r},${g},${b})`);
  };

  useEffect(() => {
    if (typeOfColor === "rgb") handleCreateRandomRGBColor();
    else handleCreateRandomHEXColor();
  }, [typeOfColor]);

  return (
    <>
      <h1>Random Color</h1>
      <div className="flex justify-center items-center my-6 gap-6">
        <button
          type="button"
          onClick={() => setTypeOfColor("hex")}
          className="text-base text-black bg-amber-200 border py-2 px-4 rounded-sm"
        >
          HEX Color
        </button>
        <button
          type="button"
          onClick={() => setTypeOfColor("rgb")}
          className="text-base text-black bg-amber-200 border py-2 px-4 rounded-sm"
        >
          RGB Color
        </button>
        <button
          type="button"
          onClick={
            typeOfColor === "hex"
              ? handleCreateRandomHEXColor
              : handleCreateRandomRGBColor
          }
          className="text-base text-black bg-amber-200 border py-2 px-4 rounded-sm"
        >
          Generate Color
        </button>
      </div>
      <div
        className="min-w-full min-h-screen flex justify-center items-center gap-4 text-white text-2xl sm:text-3xl"
        style={{ background: color }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}:</h3>
        <h2>{color}</h2>
      </div>
    </>
  );
};
export default RandomColor;
