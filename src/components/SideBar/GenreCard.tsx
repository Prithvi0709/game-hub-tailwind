import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";

// interface GenreData {
//   image_background: string;
//   name: string;
//   id: number;
// }

interface Props {
  onClick: (genre: string) => void;
}

const GenreCard = ({ onClick }: Props) => {
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
        <div className="flex flex-col">
          {Genre.map((genre) => (
            <div key={genre} className="items-center mb-5 ">
              <button
                onClick={() => {
                  onClick(genre);
                }}
                className="rounded-lg  hover:bg-white hover:text-black 
                active:bg-slate-200 font-light active:font-bold
                transition-all duration-200"
              >
                <div className="flex justify-start items-center pr-2 ">
                  <GenreLogo url="/logo-alt.png" />
                  <div className="ml-4 text-lg ">{genre}</div>
                </div>
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

const GenreLogo = ({ url }: { url: string }) => {
  return (
    <div className="text-white bg-transparent w-10 h-10 my-auto">
      <img src={url} className="aspect-square object-cover rounded-lg" />
    </div>
  );
};

export default GenreCard;
