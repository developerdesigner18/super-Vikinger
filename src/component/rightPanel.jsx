import React from "react";
import { Image } from "react-bootstrap";
import "../design/component/panel/rightPanel.css";
const RightPanel = () => {
  return (
    <React.Fragment>
      <div
        className="rightPanel"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "20px 20px 0px",
          background: "#1d2333",
        }}
      >
        <div className="iconOne hex" style={{ padding: 3 }}>
          <div className="hex-background">
            <Image className="icons" src="./Image/Avatar/17.jpg" />
          </div>
        </div>
        <div className="iconTwo hex" style={{ padding: 3 }}>
          <div className="hex-background">
            <Image className="icons" src="./Image/Avatar/03.jpg" />
          </div>
        </div>
        <div className="iconThree hex" style={{ padding: 3 }}>
          <div className="hex-background">
            <Image className="icons" src="./Image/Avatar/20.jpg" />
          </div>
        </div>
        <div className="iconFour hex" style={{ padding: 3 }}>
          <div className="hex-background">
            <Image className="icons" src="./Image/Avatar/05.jpg" />
          </div>
        </div>
        <div className="iconFive hex" style={{ padding: 3 }}>
          <div className="hex-background">
            <Image className="icons" src="./Image/Avatar/04.jpg" />
          </div>
        </div>
        <div className="iconSix hex" style={{ padding: 3 }}>
          <div className="hex-background">
            <Image className="icons" src="./Image/Avatar/09.jpg" />
          </div>
        </div>
        <div className="iconSeven hex" style={{ padding: 3 }}>
          <div className="hex-background">
            <Image className="icons" src="./Image/Avatar/12.jpg" />
          </div>
        </div>
        <div className="iconEight hex" style={{ padding: 3 }}>
          <div className="hex-background">
            <Image className="icons" src="./Image/Avatar/10.jpg" />
          </div>
        </div>
        <div className="iconEight hex" style={{ padding: 3 }}>
          <div className="hex-background">
            <Image className="icons" src="./Image/Avatar/02.jpg" />
          </div>
        </div>
        <div className="iconEight hex" style={{ padding: 3 }}>
          <div className="hex-background">
            <Image className="icons" src="./Image/Avatar/08.jpg" />
          </div>
        </div>
        <div className="iconEight hex" style={{ padding: 3 }}>
          <div className="hex-background">
            <Image className="icons" src="./Image/Avatar/14.jpg" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RightPanel;
