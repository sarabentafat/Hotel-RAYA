import { Route, Routes } from "react-router-dom";

// import AdminOverview from "./AdminOverview";

import FixedNavBar from "../components/FixedNavBar";
import Calender from "../components/Calendar";
import SideBar from "../components/Sidebar";

const AdminMain = () => {
  return (
    <div className=" w-[100dvw]">
      <SideBar />
      <FixedNavBar />
      <div className=" w-[100dvw] pt-[140px] pl-[15%] pr-10">
        <Routes>
          {/* <Route path="/" element={<AdminOverview />} /> */}
          <Route path="/calender" element={<Calender />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminMain;
