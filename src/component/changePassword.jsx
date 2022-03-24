import { TextField } from "@mui/material";
import axios from "axios";

import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "../design/UpdatePersonalnfo/changePassword.css";
const ChangePassword = () => {
  const [currentPasswordError, setcurrentPasswordError] = useState(false);
  const [currentPassword, setcurrentPassword] = useState("");
  const [newPasswordError, setnewPasswordError] = useState(false);
  const [cnewPasswordError, setcnewPasswordError] = useState(false);
  const [cnewPassword, setcnewPassword] = useState();
  const [newPassword, setnewPassword] = useState();
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8080/user",
      headers: {
        "x-access-token": localStorage.getItem("Token"),
      },
    })
      .then((response) => {
        setUserData(response.data[0]);
      })
      .catch((err) => {
        console.log("error :", err.response.data);
      });
  }, []);

  return (
    <React.Fragment>
      <p style={{ fontSize: 12, textTransform: "uppercase", color: "#616a82" }}>
        Account
      </p>
      <h1>Change Password</h1>
      <div className="changePasswordFieldHolder">
        <div className="rowOne">
          <TextField
            id="outlined-currentPassword-input"
            label="Confirm Your Current Password"
            type="password"
            fullWidth
            error={currentPasswordError}
            value={currentPassword}
            autoComplete="off"
            onChange={(e) => {
              setcurrentPassword(e.target.value);
              if (e.target.value === "") {
                setcurrentPasswordError(true);
              }
              if (e.target.value !== "") {
                setcurrentPasswordError(false);
              }
            }}
            onBlur={(e) => {
              setcurrentPassword(e.target.value);
              if (e.target.value === "") {
                setcurrentPasswordError(true);
              }
              if (e.target.value !== "") {
                setcurrentPasswordError(false);
              }
            }}
            helperText={
              currentPasswordError ? "Please Enter Your Current-Password" : ""
            }
            InputProps={{
              style: {
                fontSize: 15,
                fontFamily: "RajdhaniBold",
                color: "white",
              },
            }}
            InputLabelProps={{
              style: {
                fontSize: 15,
                fontFamily: "RajdhaniBold",
                color: "#616a82",
              },
            }}
          />
        </div>
        <div className="rowTwo">
          <TextField
            id="outlined-NewPassword-input"
            label="New Password"
            type="password"
            sx={{ width: 450 }}
            error={newPasswordError}
            value={newPassword}
            autoComplete="off"
            onChange={(e) => {
              setnewPassword(e.target.value);
              if (e.target.value === "") {
                setnewPasswordError(true);
              }
              if (e.target.value !== "") {
                setnewPasswordError(false);
              }
            }}
            onBlur={(e) => {
              setnewPassword(e.target.value);
              if (e.target.value === "") {
                setnewPasswordError(true);
              }
              if (e.target.value !== "") {
                setnewPasswordError(false);
              }
            }}
            helperText={
              newPasswordError ? "Please Enter Your New-Password!" : ""
            }
            InputProps={{
              style: {
                fontSize: 15,
                fontFamily: "RajdhaniBold",
                color: "white",
              },
            }}
            InputLabelProps={{
              style: {
                fontSize: 15,
                fontFamily: "RajdhaniBold",
                color: "#616a82",
              },
            }}
          />
          <TextField
            id="outlined-cnewPassword-input"
            label="Confirm New Password"
            type="password"
            sx={{ width: 450 }}
            error={cnewPasswordError}
            value={cnewPassword}
            autoComplete="off"
            onChange={(e) => {
              setcnewPassword(e.target.value);
              if (e.target.value === "") {
                setcnewPasswordError(true);
              }
              if (e.target.value !== "") {
                setcnewPasswordError(false);
              }
            }}
            onBlur={(e) => {
              setcnewPassword(e.target.value);
              if (e.target.value === "") {
                setcnewPasswordError(true);
              }
              if (e.target.value !== "") {
                setcnewPasswordError(false);
              }
            }}
            helperText={cnewPasswordError ? "Please Enter Your Full-Name" : ""}
            InputProps={{
              style: {
                fontSize: 15,
                fontFamily: "RajdhaniBold",
                color: "white",
              },
            }}
            InputLabelProps={{
              style: {
                fontSize: 15,
                fontFamily: "RajdhaniBold",
                color: "#616a82",
              },
            }}
          />
        </div>
        <div className="rowThree">
          <Button className="forgotPassword">Forgot Your Password?</Button>
          <Button className="changePassword">Change Password Now?</Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ChangePassword;
