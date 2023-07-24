interface Props {
  Title: string;
  onOrderChange: (val: string) => void;
  onPlatformChange: (val: string) => void;
}
const Header = ({ Title, onOrderChange, onPlatformChange }: Props) => {
  return (
    <>
      <div className="text-white text-7xl mb-6">{Title}</div>
      <div className="flex flex-wrap gap-3 text-white text-xl font-semibold">
        <div className=" bg-neutral-700 rounded-lg pl-5 pr-5">
          <select
            className="bg-neutral-700 h-10 focus:outline-none"
            name="platforms"
            id="platforms"
            defaultValue=""
            onChange={(event) => onPlatformChange(event.target.value)}
          >
            <option value="">All Platforms</option>
            <option value="1">Windows</option>
            <option value="2">Playstation</option>
            <option value="3">Xbox</option>
            <option value="4">iOS</option>
            <option value="5">MacOS</option>
            <option value="6">Linux</option>
            <option value="7">Nintendo</option>
            <option value="8">Android</option>
            <option value="9">Atari</option>
            <option value="10">Commodore / Amiga</option>
            <option value="11">Sega</option>
            <option value="12">3DO</option>
            <option value="13">Neo Geo</option>
            <option value="14">Web</option>
          </select>
        </div>
        <div className="flex items-center bg-neutral-700 h-10 pl-5 pr-5 rounded-lg">
          <p>Order by:</p>
          <select
            className="bg-neutral-700 h-10 rounded-lg focus:outline-none"
            name="order"
            id="order"
            onChange={(event) => onOrderChange(event.target.value)}
          >
            <option value="" selected>
              None
            </option>
            <option value="-metacritic">Metacritic Score</option>
            <option value="-rating">User Rating</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Header;
