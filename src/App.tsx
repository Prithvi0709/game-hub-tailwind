import { useEffect, useState } from "react";
import "./App.css";
import BodyContent from "./components/GameGrid/index";
import NavBar from "./components/NavBar/index";
import SideBar from "./components/SideBar/index";
import apiClient from "./services/api-client";

interface FetchResponseTest {
  id: number;
  rating: number;
  images: string[];
  thumbnail: string;
  title: string;
  stock: number;
}

function App() {
  const [GameData, setGameData] = useState<FetchResponseTest[]>([]); // Data displayed in GameCards
  const [Error, setError] = useState(""); // Error for GameCards
  const [Title, setTitle] = useState("Games"); // Title for GameGrid Header

  // Get the data for products on the first render
  useEffect(() => {
    apiClient
      .get("/products") //"/games"
      .then((res) => setGameData(res.data.products))
      .catch((err) => setError(err.message));
  }, []);

  const handleSideBar = (genre: string) => {
    setTitle(genre);
    apiClient
      .get("/products/category/" + genre)
      .then((res) => setGameData(res.data.products))
      .catch((err) => setError(err.message));
  };

  return (
    <body>
      <div className="w-[1650px] mx-auto">
        <NavBar />
        <div className="w-screen h-10"></div>{" "}
        {/* Spacer between the NavBar content below */}
        <div className="flex flex-nowrap">
          <SideBar onClick={handleSideBar} />
          <BodyContent GameData={GameData} Error={Error} Title={Title} />
        </div>
      </div>
    </body>
  );
}

export default App;
