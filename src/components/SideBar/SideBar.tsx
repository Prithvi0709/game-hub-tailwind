import GenreCard from "./GenreCard";

interface Props {
  onClick: (genre: string) => void;
}

const SideBar = ({ onClick }: Props) => {
  const handleOnclick = (genre: string) => {
    onClick(genre);
  };
  return (
    <div className="text-white w-[300px] pl-7">
      <div className="font-semi-bold text-4xl mt-4 mb-7">Genres</div>
      <GenreCard onClick={handleOnclick} />
    </div>
  );
};

export default SideBar;
