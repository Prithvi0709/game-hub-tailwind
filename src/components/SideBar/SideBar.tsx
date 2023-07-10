import GenreCard from "./GenreCard";

const SideBar = () => {
  return (
    <div className="text-white w-[300px] pl-7">
      <div className="font-semi-bold text-4xl mt-4 mb-7">Genres</div>
      <GenreCard />
    </div>
  );
};

export default SideBar;
