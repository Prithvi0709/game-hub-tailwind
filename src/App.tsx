import "./App.css";
import BodyContent from "./components/BodyContent/index";
import NavBar from "./components/NavBar/index";
import SideBar from "./components/SideBar/index";

function App() {
  return (
    <body>
      <NavBar />
      <div className="w-screen h-10"></div>{" "}
      {/* Spacer between the NavBar content below */}
      <div className="flex flex-nowrap">
        <SideBar />
        <BodyContent />
      </div>
    </body>
  );
}

export default App;
