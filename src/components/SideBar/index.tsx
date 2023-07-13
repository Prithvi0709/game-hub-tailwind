import { GenreData } from "../Interface";
import GenreCard from "./GenreCard";

interface Props {
  onClick: (genre: string) => void;
  Genre: GenreData[];
  Error: string;
  genreLoading: boolean;
}

const SideBar = ({ onClick, Genre, Error, genreLoading }: Props) => {
  const handleOnclick = (genre: string) => {
    onClick(genre);
  };
  return (
    <div className="text-white w-[300px] pl-7">
      <div className="font-semi-bold text-4xl mt-4 mb-7">Genres</div>
      <GenreCard
        onClick={handleOnclick}
        Genre={Genre}
        Error={Error}
        genreLoading={genreLoading}
      />
    </div>
  );
};

export default SideBar;
