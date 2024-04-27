import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Landing from "./pages/Landing";
import Home from "./sections/Home";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Offers from "./pages/Offers";
import Rooms from "./pages/Rooms";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Reservation from "./pages/Reservation";
import Activities from "./pages/Activities";
import Login from "./pages/Login";
import Admina from "./pages/Admina";
import Dashboard from "./layouts/dashboard";
import routes from "./routes";

// import Dashboard from "./pages/Dashboard";
// import AdminMain from "./pages/AdminMain";
// import Layout from "./pages/Layout";
AOS.init();

function App() {
  return (
    <>
      {/* true */}

      {/* <Navbar /> */}
      <Routes>
        <Route index path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<Navigate to={"/dashboard/home"}/>}/>
          <Route path="test" element={<div>test</div>}/>
          {routes[0].pages.map((page, index) => (
            <Route key={index} path={page.path}  element={page.element}/>
          ))}
          {/* {routes.pages.map((page, index) => (
            <Route key={index} path={page.path} element={page.element} />
          ))} */}
        </Route>
      </Routes>
    </>
  );
}

export default App;

function Dashboardtest() {
  return (
    <>
      <div className="flex anything">
        <nav>sidebar</nav>
        <Outlet />
      </div>
    </>
  );
}
