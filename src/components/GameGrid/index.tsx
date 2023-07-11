import GameCard from "./GameCards";
import Header from "./Header";

interface FetchResponseTest {
  id: number;
  rating: number;
  images: string[];
  thumbnail: string;
  title: string;
  stock: number;
}

interface Props {
  GameData: FetchResponseTest[];
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
