const Header = () => {
  return (
    <>
      <div className="text-white text-7xl mb-6">Games</div>
      <div className="flex text-white text-xl font-semibold">
        <div className=" bg-neutral-700 rounded-lg mr-5 pl-5 pr-5">
          <select
            className="bg-neutral-700 h-10 focus:outline-none"
            name="platforms"
            id="platforms"
          >
            <option value="platforms" selected>
              Platforms
            </option>
            <option value="playstation">Playstation</option>
            <option value="xbox">Xbox</option>
            <option value="Windows">Windows</option>
            <option value="MacOS">MacOS</option>
            <option value="Linux">Linux</option>
          </select>
        </div>
        <div className="flex items-center bg-neutral-700 h-10 pl-5 pr-5 rounded-lg">
          <p>Order by:</p>
          <select
            className="bg-neutral-700 h-10 rounded-lg focus:outline-none"
            name="order"
            id="order"
          >
            <option value="order" selected>
              Relevance
            </option>
            <option value="dateadded">Date Added</option>
            <option value="rating">Rating</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Header;
