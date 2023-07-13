import { useEffect, useState } from "react";
import "./App.css";
import GameGrid from "./components/GameGrid/index";
import NavBar from "./components/NavBar/index";
import SideBar from "./components/SideBar";
import apiClient from "./services/api-client";
import FetchResponse, { GenreData } from "./components/Interface";

function App() {
  const [GameData, setGameData] = useState<FetchResponse[]>([]); // Data displayed in GameCards
  const [gameError, setGameError] = useState(""); // gameError for GameCards
  const [Title, setTitle] = useState("Games"); // Title for GameGrid Header
  const [currGenre, setCurrGenre] = useState(""); // The current selected genre
  const [cardLoading, setCardLoading] = useState(false); // Set loading skeleton for GameCards
  const [emptyCardData, setEmptyCardData] = useState(false); // Set if card data is empty
  const [ordering, setOrdering] = useState("-metacritic"); // Set the ordering of the cards

  // States for genre
  const [genreList, setGenreList] = useState<GenreData[]>([]); // Set the genre List
  const [genreError, setGenreError] = useState(""); // Set the genre error
  const [genreLoading, setGenreLoading] = useState(false); // Set the genre loading

  // Get the data for products on the first render
  useEffect(() => {
    setCardLoading(true);
    setGenreLoading(true);
    apiClient
      .get("/games?ordering=" + ordering)
      .then((res) => {
        setCardLoading(false);
        setGameData(res.data.results);
      })
      .catch((err) => setGameError(err.message));

    apiClient
      .get("/genres")
      .then((res) => {
        setGenreLoading(false);
        setGenreList(res.data.results);
      })
      .catch((err) => setGenreError(err.message));
  }, []);

  // Change Game Cards based on genre selection
  const handleSideBar = (genre: string) => {
    setTitle(genre);
    setCurrGenre(genre);
    setEmptyCardData(false);
    setCardLoading(true);

    apiClient
      .get("/games?genres=" + genre.toLowerCase() + "&ordering=" + ordering)
      .then((res) => {
        setCardLoading(false);
        if (res.data.results.length == 0) {
          setEmptyCardData(true);
        }
        setGameData(res.data.results);
      })
      .catch((err) => setGameError(err.message));
  };

  // Update Cards based on ordering
  const handleOrdering = (ordering: string) => {
    setEmptyCardData(false);
    setCardLoading(true);
    setOrdering(ordering);

    console.log("check");

    apiClient
      .get(
        "/games?ordering=" +
          ordering +
          (currGenre != "" ? "&genres=" + currGenre.toLowerCase() : "")
      )
      .then((res) => {
        setCardLoading(false);
        if (res.data.results.length == 0) {
          setEmptyCardData(true);
        }
        setGameData(res.data.results);
      })
      .catch((err) => setGameError(err.message));
  };

  return (
    <>
      <body>
        <div className=" mx-auto max-w-[1650px] sm:w-full">
          <NavBar />
          <div className="w-screen h-10"></div>{" "}
          {/* Spacer between the NavBar content below */}
          <div className="flex flex-nowrap">
            <SideBar
              onClick={handleSideBar}
              Genre={genreList}
              Error={genreError}
              genreLoading={genreLoading}
            />
            <GameGrid
              GameData={GameData}
              Error={gameError}
              Title={Title}
              CardLoading={cardLoading}
              EmptyCardData={emptyCardData}
              onChange={handleOrdering}
            />
          </div>
        </div>
      </body>
      <footer>
        <div className="w-screen h-20"></div> {/* Footer Spacer*/}
      </footer>
    </>
  );
}

export default App;
