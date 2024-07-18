import { Outlet } from "react-router-dom";
import Header from "../shared/Header";
import Nav from "../shared/Nav";


const Root = () => {
  return (
    <div className="bg-gradient-to-b pb-40 pt-14 font-poppins from-primary via-cyan-900 relative to-secondary">
      <div className="fixed top-0 left-0 w-full z-50 ">
        <Header/>
      </div>
      <Outlet/>
      <div className="fixed bottom-0 left-0 w-full">
        <Nav/>
      </div>
    </div>
  );
};

export default Root;