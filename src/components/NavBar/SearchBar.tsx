import { BsSearch } from "react-icons/bs";

//Function that returns a search bar
export const SearchBar = () => {
  return (
    <form>
      <div>
        <BsSearch size={15} className="text-white absolute z-10 mt-3 ml-3" />
        <input
          type="text"
          placeholder="Search games..."
          className="relative bg-neutral-800 rounded-full h-10 w-[900px] 
        text-white pl-9  border-none 
        active:ring-0
        focus:outline-none focus:bg-neutral-700 
        transition-all duration-200"
        ></input>
      </div>
    </form>
  );
};
