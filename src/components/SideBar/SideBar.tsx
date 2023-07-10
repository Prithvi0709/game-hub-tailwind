import GenreCard from "./GenreCard";

const SideBar = () => {
  return (
    <div className="text-white w-80 pl-7 border-r-2 border-solid border-white">
      <div className="font-semi-bold text-4xl mt-4 mb-7">Genres</div>
      <GenreCard />
    </div>
  );
};

export default SideBar;
