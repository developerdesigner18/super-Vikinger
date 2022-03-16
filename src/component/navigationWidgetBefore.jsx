import React from "react";
import Drawer from "@mui/material/Drawer";

import Divider from "@mui/material/Divider";

import MonitorIcon from "@mui/icons-material/Monitor";
import EqualizerRoundedIcon from "@mui/icons-material/EqualizerRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import SmartDisplayOutlinedIcon from "@mui/icons-material/SmartDisplayOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import { makeStyles } from "@mui/styles";
import "../design/navigation-widget/navigationWidget.scss";
import { Image } from "react-bootstrap";
import { IconButton } from "@mui/material";
const drawerWidth = 300;
const useStyles = makeStyles({
  drawerPaper: {
    marginTop: 80,
  },
});
const DrawerWidgetBefore = ({
  handleDrawerClose,
  theme,
  DrawerHeader,
  draweropen,
}) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Drawer
        style={{
          backgroudColor: "#1D2333",
        }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        classes={{ paper: classes.drawerPaper }}
        variant="persistent"
        anchor="left"
        open={draweropen}
      >
        <DrawerHeader>
          <div className="drawerBackground">
            <Image
              src="./Image/Drawer/drawerAvatar.png"
              style={{ width: 120, height: 131, zIndex: 1, marginTop: 23 }}
            />
            <p style={{ fontSize: 18 }}>Marina Valentine</p>
            <p
              className="playerLink"
              style={{ fontSize: 11, color: "#9aa4bf" }}
            >
              WWW.GAMEHUNTRESS.COM
            </p>
            <div className="badgeHolder" style={{ margin: "36px auto 44px" }}>
              <Image src="./Image/Badge/gold-s.png" />
              <Image src="./Image/Badge/age-s.png" />
              <Image src="./Image/Badge/caffeinated-s.png" />
              <Image src="./Image/Badge/warrior-s.png" />
              <Image src="./Image/Badge/blank-s.png" />
            </div>
            <div className="profileInfo">
              <div className="infoOne">
                930 <br />
                <span style={{ fontSize: 12, color: "#9AA4BF" }}>POSTS</span>
              </div>{" "}
              <Divider
                orientation="vertical"
                flexItem
                sx={{ bgcolor: "white", height: 20, margin: "auto 0px" }}
              />
              <div className="infoTwo">
                82 <br />
                <span style={{ fontSize: 12, color: "#9AA4BF" }}>FRIENDS</span>
              </div>{" "}
              <Divider
                orientation="vertical"
                flexItem
                sx={{ bgcolor: "white", height: 20, margin: "auto 0px" }}
              />
              <div className="infoThree">
                5.7K <br />
                <span style={{ fontSize: 12, color: "#9AA4BF" }}>VISTIS</span>
              </div>
            </div>
            <div className="widgets">
              <ul
                className="menu"
                style={{ marginTop: 46, paddingBottom: 100, paddingLeft: 20 }}
              >
                <li className="menu-item">
                  <a href="" className="menu-item-link">
                    <IconButton
                      className="menu-item-link-icon"
                      style={{
                        padding: 0,
                        color: "#616a82",
                      }}
                    >
                      <MonitorIcon />
                    </IconButton>
                    Newsfeed
                  </a>
                </li>
                <li className="menu-item">
                  <a href="" className="menu-item-link">
                    <IconButton
                      className="menu-item-link-icon"
                      style={{
                        padding: 0,
                        color: "#616a82",
                      }}
                    >
                      <EqualizerRoundedIcon />
                    </IconButton>
                    Overview
                  </a>
                </li>
                <li className="menu-item">
                  <a href="" className="menu-item-link">
                    <IconButton
                      className="menu-item-link-icon"
                      style={{
                        padding: 0,
                        color: "#616a82",
                      }}
                    >
                      <GroupsRoundedIcon />
                    </IconButton>
                    Groups
                  </a>
                </li>
                <li className="menu-item">
                  <a href="" className="menu-item-link">
                    <IconButton
                      className="menu-item-link-icon"
                      style={{
                        padding: 0,
                        color: "#616a82",
                      }}
                    >
                      <PersonOutlinedIcon />
                    </IconButton>
                    Members
                  </a>
                </li>
                <li className="menu-item">
                  <a href="" className="menu-item-link">
                    <IconButton
                      className="menu-item-link-icon"
                      style={{
                        padding: 0,
                        color: "#616a82",
                      }}
                    >
                      <WorkspacePremiumIcon />
                    </IconButton>
                    Badges
                  </a>
                </li>
                <li className="menu-item">
                  <a href="" className="menu-item-link">
                    <IconButton
                      className="menu-item-link-icon"
                      style={{
                        padding: 0,
                        color: "#616a82",
                      }}
                    >
                      <StarOutlineRoundedIcon />
                    </IconButton>
                    Quests
                  </a>
                </li>
                <li className="menu-item">
                  <a href="" className="menu-item-link">
                    <IconButton
                      className="menu-item-link-icon"
                      style={{
                        padding: 0,
                        color: "#616a82",
                      }}
                    >
                      <SmartDisplayOutlinedIcon />
                    </IconButton>
                    Streams
                  </a>
                </li>
                <li className="menu-item">
                  <a href="" className="menu-item-link">
                    <IconButton
                      className="menu-item-link-icon"
                      style={{
                        padding: 0,
                        color: "#616a82",
                      }}
                    >
                      <DateRangeOutlinedIcon />
                    </IconButton>
                    Events
                  </a>
                </li>
                <li className="menu-item">
                  <a href="" className="menu-item-link">
                    <IconButton
                      className="menu-item-link-icon"
                      style={{
                        padding: 0,
                        color: "#616a82",
                      }}
                    >
                      <ChatOutlinedIcon />
                    </IconButton>
                    Forums
                  </a>
                </li>
                <li className="menu-item">
                  <a href="" className="menu-item-link">
                    <IconButton
                      className="menu-item-link-icon"
                      style={{
                        padding: 0,
                        color: "#616a82",
                      }}
                    >
                      <AddBusinessIcon />
                    </IconButton>
                    Marketplace
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </DrawerHeader>
      </Drawer>
    </React.Fragment>
  );
};

export default DrawerWidgetBefore;
