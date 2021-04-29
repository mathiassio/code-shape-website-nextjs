import Head from "next/head";
import styled from "styled-components";
import HeaderBackground from "../components/backgrounds/HeaderBackground";
import GlassGradientIntro from "../components/intros/GlassGradientIntro";
import { useState } from "react";
import Router from "next/router";
import firebase from "firebase/app";
import "firebase/auth";
import initFirebase from "../services/firebase";
import React from "react"
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { setUser, isLoggedIn } from "../services/auth"
const Wrapper = styled.div`
  padding-top: 6rem;
`;
initFirebase();


const Login = () => {

  if (isLoggedIn()) {
    Router.push("/profile");
  }

  function getUiConfig(auth) {
    return {
      signInFlow: 'redirect',
      signInOptions: [
        auth.GoogleAuthProvider.PROVIDER_ID,
        auth.GithubAuthProvider.PROVIDER_ID,
        auth.EmailAuthProvider.PROVIDER_ID,
        'apple.com',
      ],
      signInSuccessUrl: '/profile',
      callbacks: {
        signInSuccessWithAuthResult: (result) => {
          setUser(result.user);
          Router.push("/profile");
          // return true;
        }
      }
    };
  }

  return (
    <Wrapper>
      <Head>
        <title>Code Shape - Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderBackground image="../images/blobs/HeaderBlob01.svg" />
      <GlassGradientIntro
        title="Login"
        description=" "
        gradientColor="-webkit-linear-gradient(left, #F89929, #F5217B)"
      />
      <div>

        {firebase && <StyledFirebaseAuth uiConfig={getUiConfig(firebase.auth)} firebaseAuth={firebase.auth()}/>}
      </div>
    </Wrapper>


  );

}

export default Login
