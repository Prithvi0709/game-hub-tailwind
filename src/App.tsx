import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./HomeScreen";
import gameDetails from "./components/GameDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="" Component={HomeScreen} />
        <Route path="/game-details" Component={gameDetails} />
      </Routes>
    </Router>
  );
};

export default App;
