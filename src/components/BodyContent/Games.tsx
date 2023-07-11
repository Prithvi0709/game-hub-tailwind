import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";

interface FetchResponse {
  background_image: string;
  name: string;
  id: number;
}

const GameCard = () => {
  const [GameData, setGameData] = useState<FetchResponse[]>([]);
  const [Error, setError] = useState();

  useEffect(() => {
    apiClient
      .get("/games")
      .then((res) => setGameData(res.data.results))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      {Error ? (
        <p className="text-red-700 text-2xl mt-10">{Error}</p>
      ) : (
        <div className="grid grid-cols-3 gap-10 text-white mt-10">
          {GameData.map((data) => (
            <ul
              key={data.id}
              className="flex flex-col justify-start
                        min-h-max w-80 rounded-xl bg-neutral-700"
            >
              <li>
                <img
                  src={data.background_image}
                  alt="/GameCard.jpg"
                  className="aspect-video object-cover rounded-t-xl"
                />
              </li>
              <li className="relative w-full pl-5 pt-5">
                Compatibility and Score
              </li>
              <li className="relative w-full text-4xl p-5">{data.name}</li>
            </ul>
          ))}
        </div>
      )}
    </>
  );
};

export default GameCard;
