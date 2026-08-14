import SideBar from "./sidebar";
import MainContainer from "./mainContainer";

const Body = (): React.JSX.Element => {
  return (
    <div className="flex">
      <SideBar />
      <MainContainer />
    </div>
  );
};

export default Body;
