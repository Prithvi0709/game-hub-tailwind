import FetchResponse from "../Helper";
import { platformIcons } from "./platformIcons";

interface Props {
  GameData: FetchResponse[];
  Error: string;
}

const GameCard = ({ GameData, Error }: Props) => {
  return (
    <>
      {Error ? (
        <p className="text-red-700 text-2xl mt-10">{Error}</p>
      ) : (
        <div className="grid grid-cols-3 gap-10 text-white mt-10">
          {GameData.map((data) => (
            <div
              key={data.id}
              className="flex flex-col justify-start
                        min-h-max w-80 rounded-xl bg-neutral-700"
            >
              <img
                src={data.background_image}
                alt="/GameCard.jpg"
                className="aspect-video object-cover rounded-t-xl"
              />
              <div className="flex flex-row justify-between pl-5 pt-5 pr-5">
                <div className="text-white">{platformIcons(data)}</div>
                <MetacriticScore score={data.metacritic} />
              </div>
              <div className="relative w-full text-4xl p-5">{data.name}</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

// Display the Metacritic Score of the game
const MetacriticScore = ({ score }: { score: number }) => {
  return (
    <div
      className="bg-green-700 bg-opacity-50  
                  text-green-400 text-lg font-bold text-center
                  w-auto pl-2 pr-2 rounded-lg "
    >
      {score}
    </div>
  );
};

export default GameCard;
