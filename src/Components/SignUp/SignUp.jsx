import React, { useEffect, useState } from "react";
import {
  AltLogin,
  AltLoginButton,
  BackgroundImage,
  Container,
  Cover,
  DesktopOptimization,
  FacebookButton,
  GoogleButton,
  IconContainer,
  IconContainerResponsive,
  IconInputResponsive,
  /*Input,*/ InputField,
  InputIcon,
  LoginPopup,
  MaxWidth450px,
  MobileIconContainer,
  MobileInputField,
  Page,
  SignUpButton,
  TabletOptimization,
  Text,
  Title,
  Underline,
  Popup,
  CenteredContainer,
} from "./SignUp.styled.js";
// import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";

const SignUp = () => {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId:
          "79474543031-tmjo35916ufn421ej3u1i2ljao2apr4s.apps.googleusercontent.com",
        scope: "",
      });
    }
    gapi.load("client: auth2", start);
  }, []);

  const [popupStyle, showPopup] = useState("hide");

  const popup = () => {
    showPopup("login-popup");
    setTimeout(() => showPopup("hide"), 3000);
  };

  const onSuccess = (e) => {
    alert("User signed in");
    console.log(e);
  };

  const onFailure = (e) => {
    alert("User sign in Failed");
    console.log(e);
  };

  return (
    <CenteredContainer>
      <Cover>
        <Container>
          <Title>Registration</Title>
          <Underline />
          <IconContainer>
            <InputIcon className="fa fa-user-o" aria-hidden="true"></InputIcon>
            <InputField name="name" type="text" placeholder="Name" />
          </IconContainer>
          <IconContainer>
            <InputIcon
              className="fa fa-university"
              aria-hidden="true"
            ></InputIcon>
            <InputField name="college" type="text" placeholder="College" />
          </IconContainer>
          <IconContainer>
            <InputIcon
              className="fa fa-calendar"
              aria-hidden="true"
            ></InputIcon>
            <InputField
              name="year"
              type="number"
              placeholder="Year of studying"
            />
          </IconContainer>
          <IconContainer>
            <InputIcon className="fa fa-book" aria-hidden="true"></InputIcon>
            <InputField
              name="department"
              type="text"
              placeholder="Department"
            />
          </IconContainer>
          <IconContainer>
            <InputIcon
              className="fa fa-id-card-o"
              aria-hidden="true"
            ></InputIcon>
            <InputField name="roll" type="number" placeholder="Roll No." />
          </IconContainer>
          <IconContainer>
            <InputIcon
              className="fa fa-envelope-o"
              aria-hidden="true"
            ></InputIcon>
            <InputField name="email" type="email" placeholder="Email id" />
          </IconContainer>
          <IconContainer>
            <InputIcon className="fa fa-phone" aria-hidden="true"></InputIcon>
            <InputField
              name="phoneNumber"
              type="tel"
              placeholder="Phone Number"
            />
          </IconContainer>

          <SignUpButton onClick={popup}>Sign Up</SignUpButton>
        </Container>
      </Cover>
    </CenteredContainer>
  );
};

export default SignUp;