import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";

// interface GenreData {
//   image_background: string;
//   name: string;
//   id: number;
// }

const GenreCard = () => {
  const [Genre, setGenre] = useState([]);
  const [Error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get("/products/categories") // "/genres"
      .then((res) => setGenre(res.data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      {Error ? (
        <p className="text-red-700 text-2xl mt-10">{Error}</p>
      ) : (
        <ul>
          {Genre.map((genre) => (
            <li key={genre}>
              <div className="flex justify-start items-center mb-5">
                <GenreLogo url="/logo-alt.png" />{" "}
                <div className="ml-4 text-lg font-light">{genre}</div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

const GenreLogo = ({ url }: { url: string }) => {
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
