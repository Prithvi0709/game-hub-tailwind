import FetchResponse from "../Helper";
import GameCard from "./GameCards";
import Header from "./Header";

interface Props {
  GameData: FetchResponse[];
  Error: string;
  Title: string;
  CardLoading: boolean;
}

const index = ({ GameData, Error, Title, CardLoading }: Props) => {
  return (
    <div className="pl-10">
      <Header Title={Title} />
      <GameCard GameData={GameData} Error={Error} CardLoading={CardLoading} />
    </div>
  );
};

export default index;
