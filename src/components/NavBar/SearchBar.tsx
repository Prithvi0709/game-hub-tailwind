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
    <form onSubmit={(event) => handleFormSubmit(event, event.currentTarget)}>
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
