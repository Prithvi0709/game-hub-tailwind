import { useEffect, useState } from "react";
import "./App.css";
import GameGrid from "./components/GameGrid/index";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import apiClient from "./services/api-client";
import FetchResponse, { GenreData } from "./components/Interface";

function App() {
  const [GameData, setGameData] = useState<FetchResponse[]>([]); // Data displayed in GameCards
  const [gameError, setGameError] = useState(""); // gameError for GameCards
  const [Title, setTitle] = useState("Games"); // Title for GameGrid Header
  const [currGenre, setCurrGenre] = useState(""); // The current selected genre
  const [currPlatform, setCurrPlatform] = useState(""); //The current selected platform
  const [searchQuery, setSearchQuery] = useState(""); //The current search Query
  const [cardLoading, setCardLoading] = useState(false); // Set loading skeleton for GameCards
  const [emptyCardData, setEmptyCardData] = useState(false); // Set if card data is empty
  const [ordering, setOrdering] = useState(""); // Set the ordering of the cards

  // States for genre
  const [genreList, setGenreList] = useState<GenreData[]>([]); // Set the genre List
  const [genreError, setGenreError] = useState(""); // Set the genre error
  const [genreLoading, setGenreLoading] = useState(false); // Set the genre loading

  // Get the data for products on the first render
  useEffect(() => {
    setCardLoading(true);
    setGenreLoading(true);
    apiClient
      .get("/games", {
        params: {
          page_size: 24,
        },
      })
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

  // Generic function to fetch game data
  const fetchGameData = (
    genre?: string,
    platform?: string,
    order?: string,
    searchStatus: boolean = true
  ) => {
    setEmptyCardData(false);
    setCardLoading(true);

    apiClient
      .get("/games", {
        params: {
          ...(genre && { genres: genre.toLowerCase() }),
          ...(platform && { parent_platforms: platform }),
          ...(order && { ordering: order }),
          // searchStatus - false (Clicking Genres must )
          ...(searchStatus && searchQuery && { search: searchQuery }),
          page_size: 24,
        },
      })
      .then((res) => {
        setCardLoading(false);
        if (res.data.results.length === 0) {
          setEmptyCardData(true);
        }
        setGameData(res.data.results);
      })
      .catch((err) => setGameError(err.message));
  };

  // Change Game Cards based on genre selection
  const handleSideBar = (genre: string) => {
    setTitle(genre);
    setCurrGenre(genre);
    setSearchQuery("");
    fetchGameData(genre.toLowerCase(), currPlatform, ordering, false);
  };

  // Update Cards based on ordering
  const handleOrdering = (order: string) => {
    setOrdering(order);
    fetchGameData(currGenre, currPlatform, order);
  };

  // Function to handle when platform is changed
  const handlePlatformChange = (newPlatform: string) => {
    setCurrPlatform(newPlatform);
    fetchGameData(currGenre, newPlatform, ordering);
  };

  // Function to search for games from the search bar
  const handleGameSearch = (query: string) => {
    setCardLoading(true);
    setEmptyCardData(false);
    setTitle("Search");
    setSearchQuery(query);

    apiClient
      .get("/games", {
        params: {
          search: query,
        },
      })
      .then((res) => {
        setCardLoading(false);
        if (res.data.results.length === 0) {
          setEmptyCardData(true);
        }
        setGameData(res.data.results);
      })
      .catch((err) => setGameError(err.message));
  };

  // Code for rendering the desktop version of the website
  return (
    <>
      <div className=" mx-auto max-w-[1650px] sm:w-full">
        <NavBar onSubmit={handleGameSearch} />
        <div className="w-screen h-10"></div>{" "}
        {/* Spacer between the NavBar content below */}
        <div className="flex flex-nowrap gap-2">
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
            onOrderChange={handleOrdering}
            onPlatformChange={handlePlatformChange}
          />
        </div>
      </div>
      <footer>
        <div className="w-screen h-20"></div> {/* Footer Spacer*/}
      </footer>
    </>
  );
}

export default App;
