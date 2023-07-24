import { useState } from "react";
import useDarkMode from "../DarkMode";

export const Toggle = () => {
  const { colorTheme, setTheme } = useDarkMode();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked: boolean) => {
    setTheme(colorTheme);
    setDarkSide(checked);
    if (colorTheme === "dark") {
      document.body.style.backgroundColor = "#181818";
    } else {
      document.body.style.backgroundColor = "white"; // You can set the light theme color here
    }
  };

  return (
    <label
      htmlFor="toggle"
      className="flex flex-shrink-0 items-center cursor-pointer mr-5  "
    >
      <div className="relative">
        <input
          id="toggle"
          type="checkbox"
          className="sr-only"
          checked={darkSide}
          onChange={() => toggleDarkMode(!darkSide)}
        />
        <div
          className={`w-12 h-6 bg-gray-300 transition-all duration-200 rounded-full shadow-inner ${
            darkSide ? "bg-green-500 transition-all duration-200" : ""
          }`}
        ></div>
        <div
          className={`dot absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transition ${
            darkSide ? "transform translate-x-6" : "transform translate-x-0"
          }`}
        ></div>
      </div>
      <div className="text-white ml-2">Dark Mode</div>
    </label>
  );
};
