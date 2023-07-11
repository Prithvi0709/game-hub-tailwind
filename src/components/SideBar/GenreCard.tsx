import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";

interface GenreData {
  image_background: string;
  name: string;
  id: number;
}

const GenreCard = () => {
  const [Genre, setGenre] = useState<GenreData[]>([]);
  const [Error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get("/genres")
      .then((res) => setGenre(res.data.results))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      {Error ? (
        <p className="text-red-700 text-2xl mt-10">{Error}</p>
      ) : (
        <ul>
          {Genre.map((genre) => (
            <li key={genre.id}>
              <div className="flex justify-start items-center mb-5">
                <GenreLogo url={genre.image_background} />{" "}
                <div className="ml-2 text-lg font-light">{genre.name}</div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

interface LogoUrl {
  url: string;
}

// Update the logo Maker to suit the genre's needs
const GenreLogo = ({ url }: LogoUrl) => {
  return (
    <div className="text-white bg-transparent w-10 h-10 my-auto">
      <img
        src={url}
        className="aspect-square object-cover rounded-lg 
        shadow-white shadow-none hover:shadow-[#ff847c] hover:shadow-md 
        transition-all duration-200"
      />
    </div>
  );
};

export default GenreCard;
