import FetchResponse from "../Interface";
import GameCard from "./GameCards";
import Header from "./Header";

interface Props {
  GameData: FetchResponse[];
  Error: string;
  Title: string;
  CardLoading: boolean;
  EmptyCardData: boolean;
  onChange: (val: string) => void;
}

const index = ({
  GameData,
  Error,
  Title,
  CardLoading,
  EmptyCardData,
  onChange,
}: Props) => {
  const handleOnchange = (val: string) => {
    onChange(val);
  };

  return (
    <div className="pl-10">
      <Header Title={Title} onChange={handleOnchange} />
      <GameCard
        GameData={GameData}
        Error={Error}
        CardLoading={CardLoading}
        EmptyCardData={EmptyCardData}
      />
    </div>
  );
};

export default index;
