import { Outlet } from "react-router-dom";
import "./App.css";
import { SideHeader } from "./component/ui/sidebar";
import Search from "./component/ui/searchInput";

function App() {
  return (
    <section className="dashboard  px-4 py-2 flex flex-col ">
      <div className="w-full flex fixed  py-4">
        <SideHeader />
        <div className=" w-full p-4  bg-[#FAFAFA] overflow-auto h-screen mx-auto">
          <Search />
          <Outlet />
        </div>
      </div>
    </section>
  );
}

export default App;
