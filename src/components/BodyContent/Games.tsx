const Games = () => {
  return (
    <div className="grid grid-cols-3 gap-10 text-white mt-10 ">
      <GameCard />
    </div>
  );
};

interface tempData {
  url: string;
  name: string;
}

const GameCard = () => {
  const GameData: tempData[] = [
    { url: "/GameCard.jpg", name: "CyberPunk 2077" },
    { url: "/GameCard.jpg", name: "CyberPunk 2077" },
    { url: "/GameCard.jpg", name: "CyberPunk 2077" },
  ];

  return (
    <>
      {GameData.map((data) => (
        <div className="flex flex-col min-h-max w-80 rounded-xl bg-neutral-700">
          <div className="h-2/4 w-80">
            <img
              src={data.url}
              className="aspect-video object-cover rounded-t-xl
        shadow-white shadow-none hover:shadow-[#ff847c] hover:shadow-md 
        transition-all duration-200"
            />
          </div>
          <div className="pl-5 pt-5"> Compatibility and Score </div>
          <div className="text-5xl p-5">{data.name}</div>
        </div>
      ))}
    </>
  );
};

export default Games;
