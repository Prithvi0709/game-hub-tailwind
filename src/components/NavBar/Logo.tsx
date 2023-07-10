// Function that returns a logo element
export const Logo = () => {
  return (
    <div className="text-white bg-transparent w-12 h-12 ml-5 my-auto">
      <img
        src="/logo-alt.png"
        className="aspect-square object-cover rounded-lg 
        shadow-white shadow-none hover:shadow-[#ff847c] hover:shadow-md 
        transition-all duration-200"
      />
    </div>
  );
};
