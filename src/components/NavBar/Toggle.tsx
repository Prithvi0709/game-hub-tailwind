import { useState } from "react";

export const Toggle = () => {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!checked);
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
          checked={checked}
          onChange={handleToggle}
        />
        <div
          className={`w-12 h-6 bg-gray-300 transition-all duration-200 rounded-full shadow-inner ${
            checked ? "bg-green-500 transition-all duration-200" : ""
          }`}
        ></div>
        <div
          className={`dot absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transition ${
            checked ? "transform translate-x-6" : "transform translate-x-0"
          }`}
        ></div>
      </div>
      <div className="text-white ml-2">Dark Mode</div>
    </label>
  );
};
