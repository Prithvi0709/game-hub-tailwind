import NavBar from "../NavBar";

const gameDetails = () => {
  const handleGameSearch = () => {};
  return (
    <>
      <div className=" mx-auto max-w-[1650px] sm:w-full  dark:bg-[#181818]">
        <NavBar onSubmit={handleGameSearch} />
        <div className="w-screen h-10"></div>{" "}
        {/* Spacer between the NavBar content below */}
        {/* Add Content below */}
      </div>
      <footer>
        <div className="w-screen h-20"></div> {/* Footer Spacer*/}
      </footer>
    </>
  );
};

export default gameDetails;
