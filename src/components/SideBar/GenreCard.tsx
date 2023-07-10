interface GenreData {
  imageUrl: string;
  genreName: string;
}

const GenreCard = () => {
  const genres: GenreData[] = [
    { imageUrl: "www.abc.com", genreName: "Action" },
    { imageUrl: "www.xyz.com", genreName: "Indie" },
    { imageUrl: "www.xyz.com", genreName: "Adventure" },
    { imageUrl: "www.xyz.com", genreName: "Strategy" },
    { imageUrl: "www.xyz.com", genreName: "RPG" },
  ];
  return (
    <ul>
      {genres.map((g) => (
        <li key={g.imageUrl}>
          <div className="flex justify-start items-center mb-5">
            <GenreLogo />{" "}
            <div className="ml-2 text-lg font-light">{g.genreName}</div>
          </div>
        </li>
      ))}
    </ul>
  );
};

// Update the logo Maker to suit the genre's needs
const GenreLogo = () => {
  return (
    <div className="text-white bg-transparent w-10 h-10 my-auto">
      <img
        src="/logo-alt.png"
        className="object-center object-fill rounded-lg 
        shadow-white shadow-none hover:shadow-[#ff847c] hover:shadow-md 
        transition-all duration-200"
      />
    </div>
  );
};

export default GenreCard;
