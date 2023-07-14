import { Shimmer } from "react-shimmer";
import FetchResponse from "../Interface";
import { platformIcons } from "./PlatformIconsGen";
import { UserRating, MetacriticScore } from "./ScoringLogic";

interface Props {
  GameData: FetchResponse[];
  Error: string;
  CardLoading: boolean;
  EmptyCardData: boolean;
}

const GameCard = ({ GameData, Error, CardLoading, EmptyCardData }: Props) => {
  if (EmptyCardData) {
    return (
      <div
        className="flex flex-col justify-start
                        min-h-max w-80 mx-auto mt-20 rounded-xl bg-neutral-700"
      >
        <img
          src="./exclaimation.jpg"
          alt="/GameCard.jpg"
          className="aspect-video object-cover rounded-t-xl"
        />
        <div className="relative w-full text-center text-4xl text-white p-5">
          Data Unavailable
        </div>
        <div className="relative w-full text-center text-sm text-white pb-5">
          No games in the selected genre currently.{" "}
        </div>
      </div>
    );
  }

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
                alt="Picture"
                className="aspect-video object-cover rounded-t-xl"
              />
              <div className="flex flex-row justify-between items-center pl-5 pt-5 pr-5">
                <div className="text-white">{platformIcons(data)}</div>
                <div className="relative ml-auto mr-2 group cursor-default">
                  <UserRating rating={data.rating} />
                  <div
                    className="absolute w-full h-full bottom-5 text-sm 
                              opacity-50
                              scale-0 group-hover:scale-100 
                                  transition-all duration-100"
                  >
                    Ratings
                  </div>
                </div>
                <div className="relative group cursor-default">
                  <MetacriticScore score={data.metacritic} />
                  <div
                    className="absolute w-full h-full bottom-5 right-3 text-sm 
                              opacity-50
                              scale-0 group-hover:scale-100 
                                  transition-all duration-100"
                  >
                    Metacritic
                  </div>
                </div>
              </div>
              <div className="relative w-full text-3xl font-semibold p-5">
                {data.name}
              </div>
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
        <ShimmerList count={20} />
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

export default GameCard;
