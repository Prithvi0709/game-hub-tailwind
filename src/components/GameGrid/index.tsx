import FetchResponse from "../Interface";
import GameCard from "./GameCards";
import Header from "./Header";

interface Props {
  GameData: FetchResponse[];
  Error: string;
  Title: string;
  CardLoading: boolean;
  EmptyCardData: boolean;
  onOrderChange: (val: string) => void;
  onPlatformChange: (val: string) => void;
}

const index = ({
  GameData,
  Error,
  Title,
  CardLoading,
  EmptyCardData,
  onOrderChange,
  onPlatformChange,
}: Props) => {
  const handleOrderchange = (val: string) => {
    onOrderChange(val);
  };

  const handlePlatformChange = (val: string) => {
    onPlatformChange(val);
  };

  return (
    <div>
      <Header
        Title={Title}
        onOrderChange={handleOrderchange}
        onPlatformChange={handlePlatformChange}
      />
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
