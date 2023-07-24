import { Shimmer } from "react-shimmer";
import FetchResponse from "../Interface";
import { platformIcons } from "./PlatformIconsGen";
import { MetacriticScore } from "./ScoringLogic";
import { RiStarLine, RiStarHalfLine, RiStarFill } from "react-icons/ri"; // Replace with your actual icons

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
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-8 text-black dark:text-white mt-10 z-0">
          {GameData.map((data) => (
            <div
              key={data.id}
              className="flex flex-col justify-start
                        min-h-max w-80 rounded-xl bg-neutral-200 dark:bg-neutral-800 
                        transition-all duration-200 ease-in-out 
             relative group overflow-visible hover:z-10"
            >
              <img
                src={data.background_image}
                alt="Picture"
                className="aspect-video object-cover rounded-t-xl"
              />
              <div className="flex flex-row justify-between items-center pl-5 pt-5 pr-5">
                <div className="text-white">{platformIcons(data)}</div>
                <div className="relative cursor-default">
                  <MetacriticScore score={data.metacritic} />
                </div>
              </div>
              <div className="relative w-full text-3xl font-semibold p-5">
                {data.name}
              </div>
              <div
                className="absolute left-0 w-full rounded-xl bg-neutral-200 dark:bg-neutral-800 
              opacity-0 transform scale-100 group-hover:opacity-100 group-hover:scale-105 ease-in-out transition-all duration-100 z-10"
              >
                {/* Duplicate your card content here, plus additional information */}
                <img
                  src={data.background_image}
                  alt="Picture"
                  className="aspect-video object-cover rounded-t-xl"
                />
                <div className="flex flex-row justify-between items-center pl-5 pt-5 pr-5">
                  <div>{platformIcons(data)}</div>
                  <div className="relative cursor-default">
                    <MetacriticScore score={data.metacritic} />
                  </div>
                </div>
                <div
                  className="relative w-full text-3xl font-semibold p-5 cursor-pointer"
                  onClick={() => console.log("clicked")}
                >
                  {data.name}
                </div>
                <div className="p-5 opacity-50">
                  {data.released && (
                    <div className="flex flex-row justify-between mb-2 w-auto h-auto">
                      <div>Release Date</div>
                      <div>{formatDate(data.released)}</div>
                    </div>
                  )}
                  <div className="flex flex-row justify-between mb-2 w-auto h-auto">
                    <div>Rating</div>
                    <Rating rating={data.rating} />
                  </div>
                  {data.esrb_rating && (
                    <div className="flex flex-row justify-between w-auto h-auto">
                      <div>Audience</div>
                      <div>{data.esrb_rating.name}</div>
                    </div>
                  )}
                </div>
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

// Funtion to return the shimmer list
const ShimmerList = ({ count }: { count: number }) => {
  const shimmerItems = Array.from({ length: count }, (_, index) => (
    <div key={index}>
      <Shimmer width={320} height={320} className="rounded-xl" />
    </div>
  ));

  return <>{shimmerItems}</>;
};

// Function to return the date format
const formatDate = (date: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const formattedDate = new Date(date).toLocaleDateString("en-US", options);
  return formattedDate;
};

// Function to return the star rating
const roundRating = (rating: number): number => {
  const decimal = rating % 1;
  if (decimal < 0.25) {
    return Math.floor(rating);
  } else if (decimal < 0.75) {
    return Math.floor(rating) + 0.5;
  } else {
    return Math.ceil(rating);
  }
};

const Rating = ({ rating }: { rating: number }) => {
  const roundedRating = roundRating(rating);

  return (
    <div className="flex flex-row items-center">
      {[...Array(5)].map((_e, i) => {
        const starRating = i + 1;
        return (
          <div key={i} className="text-yellow-500">
            {starRating <= roundedRating ? (
              <RiStarFill />
            ) : starRating - 0.5 === roundedRating ? (
              <RiStarHalfLine />
            ) : (
              <RiStarLine />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default GameCard;
