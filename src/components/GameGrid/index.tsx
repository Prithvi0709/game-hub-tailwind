import FetchResponse from "../Helper";
import GameCard from "./GameCards";
import Header from "./Header";

interface Props {
  GameData: FetchResponse[];
  Error: string;
  Title: string;
}

const index = ({ GameData, Error, Title }: Props) => {
  return (
    <div className="pl-10">
      <Header Title={Title} />
      <GameCard GameData={GameData} Error={Error} />
    </div>
  );
};

export default index;
