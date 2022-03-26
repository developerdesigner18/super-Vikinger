import React, { useEffect, useState } from "react";

import "./App.css";
import NavbarBefore from "./component/navbarBefore";
import HomePage from "./Pages/homePage";
import SignupPage from "./Pages/registrationForm";
import Nomatch from "./Pages/page404";
import { Routes, Route, useLocation } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import NavbarAfter from "./component/navbarAfter";
import ProfileInfo from "./component/updateDetails/profileInfo";
import AboutProfile from "./component/updateDetails/aboutProfile";
import ProfileDetails from "./component/updateDetails/profileDetails";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import ChangePassword from "./component/changePassword";
import { format } from "date-fns";

function App() {
  const location = useLocation();
  console.log("location.pathname------------------>", location.pathname);
  console.log("url-------------->");
  const [token, setToken] = useState("");
  // -------------------profileInfo--------------------------
  const [coverImage, setCoverImage] = useState("");
  const [file, setFile] = useState("");
  const [profileName, setProfileName] = useState("");
  const [publicEmail, setPublicEmail] = useState("");
  const [description, setDescription] = useState("");
  const [birthday, setBirthday] = useState();
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [power, setPower] = useState("");
  const [defense, setDefense] = useState("");

  // ----------------Account-Info-----------------------------
  const [fullName, setFullName] = useState("");
  const [accountEmail, setAccountEmail] = useState("");
  const [urlUserName, setUrlUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [accountCountry, setAccountCountry] = useState("");
  const [language, setLanguage] = useState("");

  // --------------security-------------------
  const [recoveryEmail, setRecoveryEmail] = useState("");
  const [recoveryPhone, setRecoveryPhone] = useState("");
  const [questionOne, setquestionOne] = useState("");
  const [questionTwo, setquestionTwo] = useState("");
  const [questionThree, setquestionThree] = useState("");

  const [recoveryAnswerOne, setrecoveryAnswerOne] = useState("");
  const [recoveryAnswerTwo, setrecoveryAnswerTwo] = useState("");
  const [recoveryAnswerThree, setrecoveryAnswerThree] = useState("");

  const handleProfileInfo = () => {
    // ------------------profileData-------------------
    const data = new FormData();
    data.append("avatar", file);
    data.append("coverImage", coverImage);
    data.append("profileName", profileName);
    data.append("publicEmail", publicEmail);
    data.append("description", description);
    data.append("birthdate", birthday);
    data.append("gender", gender);
    data.append("country", country);
    data.append("city", city);
    console.log("ProfileInformation------------------>", data);
    //  ---------------------aboutProfileData------------------
    // const aboutData = new FormData();
    // aboutData.append("fullName", fullName);
    // aboutData.append("accountEmail", accountEmail);
    // aboutData.append("urlUserName", urlUserName);
    // aboutData.append("phoneNumber", phoneNumber);
    // aboutData.append("accountCountry", accountCountry);
    // aboutData.append("language", language);
    const accountData = {
      fullName,
      accountEmail,
      urlUserName,
      phoneNumber,
      accountCountry,
      language,
      recoveryEmail,
      recoveryPhone,
      questionOne,
      recoveryAnswerOne,
      questionTwo,
      recoveryAnswerTwo,
      questionThree,
      recoveryAnswerThree,
    };

    // --------------------Post request--------------------------
    if (location.pathname == "/updateInfo/profileInfo") {
      axios({
        method: "post",
        url: "http://localhost:8080/user/profileInfo",
        data: data,
        headers: {
          "x-access-token": localStorage.getItem("Token"),
        },
      })
        .then(function (response) {
          //handle success
          if (response.status === 200) {
            toast.success("success!");
          }
        })
        .catch((err) => {
          toast.error(err.response.data.message);
        });
    }
    if (location.pathname == "/updateInfo/accountInfo") {
      axios({
        method: "post",
        url: "http://localhost:8080/user/accountInfo",
        headers: {
          "x-access-token": localStorage.getItem("Token"),
        },
        data: accountData,
      })
        .then((response) => {
          if (response.status === 200) {
            toast.success("success!");
          }
        })
        .catch((error) => {
          toast.error(error.response.data.message);
        });
    }
  };
  useEffect(() => {
    setToken(localStorage.getItem("Token"));
  }, []);
  console.log("token------------------->", token);

  // ---------------get api for-userData--------------------------------
  const [userData, setUserData] = useState();

  useEffect(() => {
    fetchApiData();
  }, []);
  const fetchApiData = async () => {
    const response = await axios.get("http://localhost:8080/user", {
      headers: { "x-access-token": localStorage.getItem("Token") },
    });
    setUserData(response.data?.data[0]);
  };
  useEffect(() => {
    const date = new Date(userData?.birthdate).toLocaleDateString();

    console.log(
      "userData--------------->",
      userData?.securityInfo[0]?.answerOne
    );
    setFile(userData?.avatar);
    setCoverImage(userData?.coverImage);
    setProfileName(userData?.profileName);
    setPublicEmail(userData?.publicEmail);
    setDescription(userData?.description);
    setBirthday(userData?.birthdate);
    setDefense(userData?.defense);
    setPower(userData?.power);
    setGender(userData?.gender);
    setCountry(userData?.country);
    setCity(userData?.city);
    setFullName(userData?.fullName);
    setAccountEmail(userData?.email);
    setUrlUserName(userData?.urlUserName);
    setPhoneNumber(userData?.phoneNumber);
    setAccountCountry(userData?.country);
    setLanguage(userData?.language);
    setRecoveryEmail(userData?.recoveryEmail);
    setRecoveryPhone(userData?.recoveryPhone);
    setquestionOne(userData?.securityInfo[0]?.questionOne.questionOne);
    setrecoveryAnswerOne(userData?.securityInfo[0]?.questionOne.answerOne);
    setquestionTwo(userData?.securityInfo[0]?.questionTwo.questionTwo);
    setrecoveryAnswerTwo(userData?.securityInfo[0]?.questionTwo.answerTwo);
    setquestionThree(userData?.securityInfo[0]?.questionThree.questionThree);
    setrecoveryAnswerThree(
      userData?.securityInfo[0]?.questionThree.answerThree
    );
    setPower(userData?.power);
    setDefense(userData?.defense);
  }, [userData]);
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route
          element={
            token ? (
              <NavbarAfter
                fullName={fullName}
                email={userData?.email}
                avatar={file}
                coverImage={coverImage}
                publicEmail={publicEmail}
                profileName={profileName}
                power={power}
                defense={defense}
              />
            ) : (
              <NavbarBefore />
            )
          }
        >
          <Route path="homepage" element={<HomePage />} />
        </Route>

        <Route
          path="updateInfo"
          element={<ProfileInfo handleProfileInfo={handleProfileInfo} />}
        >
          <Route
            path="profileInfo"
            element={
              <ProfileDetails
                coverImage={coverImage}
                setCoverImage={setCoverImage}
                file={file}
                setFile={setFile}
                profileName={profileName}
                setProfileName={setProfileName}
                publicEmail={publicEmail}
                setPublicEmail={setPublicEmail}
                description={description}
                setDescription={setDescription}
                birthday={birthday}
                setBirthday={setBirthday}
                gender={gender}
                setGender={setGender}
                country={country}
                setCountry={setCountry}
                city={city}
                setCity={setCity}
              />
            }
          />
          <Route
            path="accountInfo"
            element={
              <AboutProfile
                fullName={fullName}
                setFullName={setFullName}
                accountEmail={accountEmail}
                setAccountEmail={setAccountEmail}
                urlUserName={urlUserName}
                setUrlUserName={setUrlUserName}
                phoneNumber={phoneNumber}
                setPhoneNumber={setPhoneNumber}
                accountCountry={accountCountry}
                setAccountCountry={setAccountCountry}
                language={language}
                setLanguage={setLanguage}
                recoveryEmail={recoveryEmail}
                setRecoveryEmail={setRecoveryEmail}
                recoveryPhone={recoveryPhone}
                setrecoveryPhone={setRecoveryPhone}
                questionOne={questionOne}
                questionTwo={questionTwo}
                questionThree={questionThree}
                setquestionOne={setquestionOne}
                setquestionTwo={setquestionTwo}
                setquestionThree={setquestionThree}
                recoveryAnswerOne={recoveryAnswerOne}
                recoveryAnswerTwo={recoveryAnswerTwo}
                recoveryAnswerThree={recoveryAnswerThree}
                setrecoveryAnswerOne={setrecoveryAnswerOne}
                setrecoveryAnswerTwo={setrecoveryAnswerTwo}
                setrecoveryAnswerThree={setrecoveryAnswerThree}
              />
            }
          />
          <Route path="changePassword" element={<ChangePassword />} />
        </Route>
        <Route path="*" element={<Nomatch />} />
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </React.Fragment>
  );
}

export default App;
