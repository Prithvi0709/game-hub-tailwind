import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";

interface FetchResponse {
  background_image: string;
  name: string;
  id: number;
  metacritic: number;
}

const GameCard = () => {
  const [GameData, setGameData] = useState<FetchResponse[]>([
    {
      background_image: "./GameCard.jpg ",
      name: "CyberPunk",
      id: 0,
      metacritic: 92,
    },
    {
      background_image: "./GameCard.jpg ",
      name: "CyberPunk",
      id: 0,
      metacritic: 92,
    },
    {
      background_image: "./GameCard.jpg ",
      name: "CyberPunk",
      id: 0,
      metacritic: 92,
    },
  ]);
  const [Error, setError] = useState();

  // Disabled to save API calls
  // useEffect(() => {
  //   apiClient
  //     .get("/games")
  //     .then((res) => setGameData(res.data.results))
  //     .catch((err) => setError(err.message));
  // }, []);

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
                <div className="">Compatibility</div>
                <div className="">{data.metacritic}</div>
              </div>
              <div className="relative w-full text-4xl p-5">{data.name}</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default GameCard;
