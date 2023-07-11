import SideBar from "./SideBar";

interface Props {
  onClick: (genre: string) => void;
}

const index = ({ onClick }: Props) => {
  const handleOnclick = (genre: string) => {
    onClick(genre);
  };
  return <SideBar onClick={handleOnclick} />;
};

export default index;
