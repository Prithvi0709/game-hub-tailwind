import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";

// interface FetchResponse {
//   background_image: string;
//   name: string;
//   id: number;
//   metacritic: number;
// }
interface FetchResponseTest {
  id: number;
  rating: number;
  images: string[];
  thumbnail: string;
  title: string;
}

const GameCard = () => {
  const [GameData, setGameData] = useState<FetchResponseTest[]>([]);
  const [Error, setError] = useState();

  // Disabled to save API calls
  useEffect(() => {
    apiClient
      .get("/products") //"/games"
      .then((res) => setGameData(res.data.products))
      .catch((err) => setError(err.message));
  }, []);

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
                src={data.thumbnail}
                alt="/GameCard.jpg"
                className="aspect-video object-cover rounded-t-xl"
              />
              <div className="flex flex-row justify-between pl-5 pt-5 pr-5">
                <div className="">Compatibility</div>
                <MetacriticScore score={data.rating} />
              </div>
              <div className="relative w-full text-4xl p-5">{data.title}</div>
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
                  w-10 rounded-lg "
    >
      {score}
    </div>
  );
};

export default GameCard;
