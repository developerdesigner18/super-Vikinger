import { Navigation } from "@mui/icons-material";
import React from "react";
import { Outlet } from "react-router-dom";
import HomePageMainCard from "../component/homePageCard";
import LeftPanel from "../component/leftPanel";

import RightPanel from "../component/rightPanel";
const HomePage = () => {
  return (
    <React.Fragment>
      <div
        className="bodyContainer"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          background: "#161B28",
        }}
      >
        <LeftPanel />

        <HomePageMainCard />
        <RightPanel />
      </div>
    </React.Fragment>
  );
};

export default HomePage;
