import React, { useEffect, useState } from "react";

import "./App.css";
import NavbarBefore from "./component/navbarBefore";
import HomePage from "./Pages/homePage";
import SignupPage from "./Pages/registrationForm";
import Nomatch from "./Pages/page404";
import { Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import NavbarAfter from "./component/navbarAfter";

function App() {
  const [token, setToken] = useState("fdhdljgngjkfmn");
  useEffect(() => {
    setToken(localStorage.getItem("Token"));
  }, []);
  console.log("token------------------->", token);
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route element={token ? <NavbarAfter /> : <NavbarBefore />}>
          <Route path="homepage" element={<HomePage />} />
        </Route>
        <Route path="*" element={<Nomatch />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
