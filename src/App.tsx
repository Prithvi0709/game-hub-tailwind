import { useEffect, useState } from "react";
import "./App.css";
import BodyContent from "./components/GameGrid/index";
import NavBar from "./components/NavBar/index";
import SideBar from "./components/SideBar/index";
import apiClient from "./services/api-client";
import FetchResponse from "./components/Helper";

function App() {
  const [GameData, setGameData] = useState<FetchResponse[]>([]); // Data displayed in GameCards
  const [Error, setError] = useState(""); // Error for GameCards
  const [Title, setTitle] = useState("Games"); // Title for GameGrid Header
  const [cardLoading, setCardLoading] = useState(false);

  // Get the data for products on the first render
  useEffect(() => {
    setCardLoading(true);
    apiClient
      .get("/games")
      .then((res) => {
        setCardLoading(false);
        setGameData(res.data.results);
      })
      .catch((err) => setError(err.message));
  }, []);

  const handleSideBar = (genre: string) => {
    setTitle(genre);
    apiClient
      .get("/games?genres=" + genre.toLowerCase())
      .then((res) => setGameData(res.data.results))
      .catch((err) => setError(err.message));
  };

  return (
    <>
      <body>
        <div className=" mx-auto max-w-[1650px] sm:w-full">
          <NavBar />
          <div className="w-screen h-10"></div>{" "}
          {/* Spacer between the NavBar content below */}
          <div className="flex flex-nowrap">
            <SideBar onClick={handleSideBar} />
            <BodyContent
              GameData={GameData}
              Error={Error}
              Title={Title}
              CardLoading={cardLoading}
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
