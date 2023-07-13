import { Shimmer } from "react-shimmer";
import FetchResponse from "../Helper";
import { platformIcons } from "./platformIcons";

interface Props {
  GameData: FetchResponse[];
  Error: string;
  CardLoading: boolean;
}

const GameCard = ({ GameData, Error, CardLoading }: Props) => {
  return (
    <>
      {Error ? (
        <p className="text-red-700 text-2xl mt-10">{Error}</p>
      ) : CardLoading ? (
        CardShimmer()
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

  // Function that initiates the loading effect
  function CardShimmer() {
    return (
      <div className="grid grid-cols-3 gap-10 mt-10">
        <ShimmerList count={11} />
      </div>
    );
  }
};

const ShimmerList = ({ count }: { count: number }) => {
  const shimmerItems = Array.from({ length: count }, (_, index) => (
    <div key={index}>
      <Shimmer width={320} height={320} className="rounded-xl" />
    </div>
  ));

  return <>{shimmerItems}</>;
};

// Display the Metacritic Score of the game
const MetacriticScore = ({ score }: { score: number }) => {
  let bgColor = "";
  let textColor = "";

  // Score is null
  if (score == null) {
    return (
      <div
        className={`${bgColor} bg-opacity-50  
                  ${textColor} text-sm text-center
                  w-auto pl-2 pr-2 rounded-lg`}
      >
        N/A
      </div>
    );
  }

  // Change the background color based on the metacritic value
  if (score == null) {
    bgColor = "bg-slate-200";
  } else if (score >= 88) {
    bgColor = "bg-green-700";
    textColor = "text-green-500";
  } else if (score >= 80) {
    bgColor = "bg-yellow-700";
    textColor = "text-yellow-500";
  } else if (score >= 70) {
    bgColor = "bg-orange-700";
    textColor = "text-orange-500";
  } else {
    bgColor = "bg-red-700";
    textColor = "text-red-500";
  }

  console.log(bgColor);

  return (
    <div
      className={`${bgColor} bg-opacity-50  
                  ${textColor} text-lg font-bold text-center
                  w-auto pl-2 pr-2 rounded-lg`}
    >
      {score}
    </div>
  );
};

export default GameCard;
