import { Toggle } from "./Toggle";
import { SearchBar } from "./SearchBar";
import { Logo } from "./Logo";

const NavBar = () => {
  return (
    <div className="flex flex-row flex-nowrap justify-between items-center bg-neutral-900  w-full h-20">
      <Logo />
      <SearchBar />
      <Toggle />
    </div>
  );
};

export default NavBar;
