import { FormEvent } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSubmit: (query: string) => void;
}

//Function that returns a search bar
export const SearchBar = ({ onSubmit }: Props) => {
  const handleFormSubmit = (event: FormEvent, form: HTMLFormElement) => {
    event.preventDefault();
    let query: string | undefined = form.querySelector("input")?.value;
    if (query != undefined && query != "") {
      onSubmit(query);
    }
  };

  return (
    <div className="xl:flex-none flex-grow ml-3 mr-3">
      <form onSubmit={(event) => handleFormSubmit(event, event.currentTarget)}>
        <BsSearch size={15} className="text-white absolute z-10 mt-3 ml-3" />
        <input
          type="text"
          placeholder="Search games..."
          className="bg-neutral-800 rounded-full h-10 xl:w-[900px] w-full
        text-white pl-9  border-none 
        active:ring-0
        focus:outline-none focus:bg-neutral-700 
        transition-colors duration-200"
        ></input>
      </form>
    </div>
  );
};
