import React, { useState, useRef, useEffect } from "react";
import { Image } from "react-bootstrap";
import "../../design/UpdatePersonalnfo/profileDetails.css";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { IconButton, TextField } from "@mui/material";

import("screw-filereader");

const ProfileDetails = ({
  setBirthday,
  birthday,
  setCity,
  city,
  setCountry,
  country,
  setCoverImage,
  coverImage,
  setFile,
  file,
  setGender,
  gender,
  setProfileName,
  profileName,
  setPublicEmail,
  publicEmail,
  setDescription,
  description,
  setprofileApi,
}) => {
  const [profileNameError, setProfileNameError] = useState(false);
  const [publicEmailError, setPublicEmailError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [birthdayError, setBirthdayError] = useState(false);
  const imageRef = useRef();
  const coverRef = useRef();

  //  ------------------All country---------------------
  const handleChange = (event) => {
    const fileObject = event.target.files[0];
    // console.log(fileObject);
    const data = new FormData();
    data.append("name", "Image UPload");
    data.append("file-attachment", fileObject);
    console.log(data);
    setFile(fileObject);
    if (!fileObject) return;
  };
  const handleCoverChange = (event) => {
    const fileObject = event.target.files[0];
    setCoverImage(fileObject);
    if (!fileObject) return;
  };

  const showOpenFileDialog = () => {
    imageRef.current.click();
  };
  const showOpenCoverDiolouge = () => {
    coverRef.current.click();
  };

  return (
    <div className="ProfileDetailsHolder">
      {/* {setprofileApi(true)} */}
      <div className="profileDetailsHeader">
        <p
          style={{
            fontSize: 12,
            textTransform: "uppercase",
            fontFamily: "RajdhaniBold",
            color: "#616a82",
          }}
        >
          my profile
        </p>
        <p
          style={{
            fontSize: 24,
            fontFamily: "RajdhaniBold",
          }}
        >
          Profile Info
        </p>
        <div className="profileImageHolder">
          <div className="profilePreview">
            <div className="preview">
              <img
                src="./Image/Logo/logo.png"
                style={{ width: 75, height: 75, marginTop: 31 }}
              />
            </div>
          </div>
          <div className="changeAvatar" onClick={showOpenFileDialog}>
            <div className="iconHolder">
              <IconButton
                style={{ color: "#616a82", margin: "auto 0px", height: "40px" }}
              >
                <PersonOutlineIcon />
              </IconButton>
            </div>
            <div className="avatarDetailsHolder">
              <input
                ref={imageRef}
                type="file"
                style={{ display: "none" }}
                accept="image/*"
                onChange={handleChange}
                name="avatar"
              />
              <p
                style={{
                  fontFamily: "RajdhaniBold",
                  fontSize: "12px",
                  color: "white",
                  paddingLeft: 15,
                }}
              >
                Change Avatar
              </p>
              <p
                style={{
                  fontFamily: "RajdhaniBold",
                  fontSize: "10px",
                  color: "#616a82",
                  paddingLeft: 15,
                }}
              >
                110*110px size minimum
              </p>
            </div>
          </div>
          <div className="changeCover" onClick={showOpenCoverDiolouge}>
            <div className="iconHolder">
              <IconButton
                style={{ color: "#616a82", margin: "auto 0px", height: "40px" }}
              >
                <ImageOutlinedIcon />
              </IconButton>
            </div>
            <div className="coverDetailsHolder">
              <p
                style={{
                  fontFamily: "RajdhaniBold",
                  fontSize: "12px",
                  color: "white",
                  paddingLeft: 15,
                }}
              >
                Change Cover
              </p>
              <p
                style={{
                  fontFamily: "RajdhaniBold",
                  fontSize: "10px",
                  color: "#616a82",
                  paddingLeft: 15,
                }}
              >
                1184*300px size minimum
              </p>
            </div>
            <input
              ref={coverRef}
              type="file"
              style={{ display: "none" }}
              accept="image/*"
              name="coverImage"
              onChange={handleCoverChange}
            />
          </div>
        </div>
      </div>
      <div className="aboutProfile">
        <p style={{ margin: 0 }}>About Your Profile</p>

        <form method="post">
          <div className="rowOne">
            <TextField
              id="outlined-profilename-input"
              label="Profile Name"
              type="text"
              sx={{ width: 450 }}
              error={profileNameError}
              value={profileName}
              autoComplete="off"
              onChange={(e) => {
                setProfileName(e.target.value);
                if (e.target.value === "") {
                  setProfileNameError(true);
                }
                if (e.target.value !== "") {
                  setProfileNameError(false);
                }
              }}
              onBlur={(e) => {
                setProfileName(e.target.value);
                if (e.target.value === "") {
                  setProfileNameError(true);
                }
                if (e.target.value !== "") {
                  setProfileNameError(false);
                }
              }}
              helperText={
                profileNameError ? "Please Enter Your Profile Name" : ""
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
              id="outlined-email-input"
              label="Public Email"
              type="email"
              sx={{ width: 450 }}
              error={publicEmailError}
              value={publicEmail}
              autoComplete="off"
              onChange={(e) => {
                setPublicEmail(e.target.value);
                if (e.target.value === "") {
                  setPublicEmailError(true);
                }
                if (e.target.value !== "") {
                  setPublicEmailError(false);
                }
              }}
              onBlur={(e) => {
                setPublicEmail(e.target.value);
                if (e.target.value === "") {
                  setPublicEmailError(true);
                }
                if (e.target.value !== "") {
                  setPublicEmailError(false);
                }
              }}
              helperText={publicEmailError ? "Please Enter Your Email" : ""}
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
              multiline
              rows={4}
              id="outlined-description-input"
              label="write a little description about you..."
              type="text"
              sx={{ width: 450 }}
              error={descriptionError}
              value={description}
              autoComplete="off"
              onChange={(e) => {
                setDescription(e.target.value);
                if (e.target.value === "") {
                  setDescriptionError(true);
                }
                if (e.target.value !== "") {
                  setDescriptionError(false);
                }
              }}
              onBlur={(e) => {
                setDescription(e.target.value);
                if (e.target.value === "") {
                  setDescriptionError(true);
                }
                if (e.target.value !== "") {
                  setDescriptionError(false);
                }
              }}
              helperText={
                descriptionError ? "Please Enter Your Description" : ""
              }
              InputProps={{
                style: {
                  fontSize: 15,
                  fontFamily: "RajdhaniBold",
                  color: "#fff",
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
            <div className="powerDefence">
              <TextField
                id="outlined-power-input"
                label="Power"
                type="text"
                sx={{ width: 450 }}
                value={65}
                autoComplete="off"
                InputProps={{
                  style: {
                    fontSize: 15,
                    fontFamily: "RajdhaniBold",
                    color: "#fff",
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
                id="outlined-defense-input"
                label="Defense"
                type="text"
                sx={{ width: 450 }}
                value={60}
                autoComplete="off"
                InputProps={{
                  style: {
                    fontSize: 15,
                    fontFamily: "RajdhaniBold",
                    color: "#fff",
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
          </div>
          <div className="rowThree">
            <TextField
              id="date"
              label="Birthday"
              type="date"
              InputLabelProps={{
                shrink: true,
                style: {
                  fontSize: 15,
                  fontFamily: "RajdhaniBold",
                  color: "#616a82",
                },
              }}
              InputProps={{
                style: {
                  fontSize: 15,
                  fontFamily: "RajdhaniBold",
                  color: "#fff",
                },
              }}
              sx={{ width: 450 }}
              error={birthdayError}
              defaultValue="25 - 01 - 2001"
              autoComplete="off"
              onChange={(e) => {
                setBirthday(e.target.value);
                if (e.target.value === "") {
                  setBirthdayError(true);
                }
                if (e.target.value !== "") {
                  setBirthdayError(false);
                }
              }}
              onBlur={(e) => {
                setBirthday(e.target.value);
                if (e.target.value === "") {
                  setBirthdayError(true);
                }
                if (e.target.value !== "") {
                  setBirthdayError(false);
                }
              }}
            />

            <FormControl sx={{ width: 450, borderRadius: 18 }}>
              <InputLabel
                id="demo-gender-label"
                sx={{ color: "#616a82", fontFamily: "RajdhaniBold" }}
              >
                Gender
              </InputLabel>
              <Select
                labelId="demo-gender-label"
                id="demo-gender"
                value={gender}
                label="Gender"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
                sx={{ color: "white", fontFamily: "RajdhaniBold" }}
              >
                <MenuItem selected value="male">
                  Male
                </MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="rowFour">
            <FormControl sx={{ width: 450, borderRadius: 18 }}>
              <InputLabel
                sx={{ color: "#616a82", fontFamily: "RajdhaniBold" }}
                id="demo-country-label"
              >
                Country
              </InputLabel>
              <Select
                labelId="demo-country-label"
                id="demo-country"
                value={country}
                label="Country"
                sx={{ color: "white", fontFamily: "RajdhaniBold" }}
                onChange={(e) => {
                  setCountry(e.target.value);
                }}
              >
                <MenuItem selected value="India">
                  India
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ width: 450, borderRadius: 18 }}>
              <InputLabel
                sx={{ color: "#616a82", fontFamily: "RajdhaniBold" }}
                id="demo-city-label"
              >
                Country
              </InputLabel>
              <Select
                labelId="demo-city-label"
                id="demo-city"
                value={city}
                label="city"
                sx={{ color: "white", fontFamily: "RajdhaniBold" }}
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              >
                <MenuItem selected value="Surat">
                  Surat
                </MenuItem>
              </Select>
            </FormControl>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileDetails;
