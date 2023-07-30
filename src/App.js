import logo from "./logo.svg";
import Login from "./pages/login/Login.js";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/home/homePage";
import Register from "./pages/login/Register";
import Immigration from "./pages/immigration/Immigration";
import Header from "./Component/header/Header";
import Dashboard from "./pages/dashboard/Dashboard";
import Customer from "./pages/dashboard/customer/customer";
import Booking from "./pages/dashboard/Booking/booking";
import CaseFiles from "./pages/dashboard/cases/caseFiles";
import { useEffect } from "react";
import { Hide } from "./Component/Hide";

function App() {
  return (
    <div className="App d-block">
      {/* {0 ? :null}   */}
      {/* frontend router  */}

      <Hide hide={["/login", "/dashboard", "/customer", "/booking", "/cases"]}>
        <Header />
      </Hide>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/about" element={<HomePage />}></Route>
        <Route path="/immigration" element={<Immigration />}></Route>
      </Routes>

      {/* Backend  router  */}
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/customer" element={<Customer />}></Route>
        <Route path="/booking" element={<Booking />}></Route>
        <Route path="/cases" element={<CaseFiles />}></Route>
      </Routes>
    </div>
  );
}

export default App;
