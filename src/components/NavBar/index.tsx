import { Toggle } from "./Toggle";
import { SearchBar } from "./SearchBar";
import { Logo } from "./Logo";

interface Props {
  onSubmit: (query: string) => void;
}

const NavBar = ({ onSubmit }: Props) => {
  const handleOnSubmit = (query: string) => {
    onSubmit(query);
  };
  return (
    <div className="flex flex-row flex-nowrap justify-between items-center bg-neutral-900  w-full h-20">
      <Logo />
      <SearchBar onSubmit={(query: string) => handleOnSubmit(query)} />
      <Toggle />
    </div>
  );
};

export default NavBar;
