import Head from "next/head";
import styled from "styled-components";
import GlassGradientIntro from "../components/intros/GlassGradientIntro";
import firebase from "firebase/app";
import { getUser, logout, isLoggedIn } from "../services/auth";
import Router from "next/router";
import { getAuth, signOut } from "firebase/auth";
import initFirebase from "../services/firebase";

initFirebase();
const Wrapper = styled.div`
  padding-top: 3.5rem;
`;

const signUserOut = () =>
  logout(firebase)
    .then(() => {
      Router.push("/login");
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });

export default function Profile() {
  const user = getUser();
  const { displayName, email, emailVerified } = user;
  const title =
    "Congratulations" + (displayName ? " " + displayName.split(" ")[0] : "");

  return (
    <Wrapper>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlassGradientIntro
        title={title}
        description="You are now logged in!"
        gradientColor="-webkit-linear-gradient(left, #F89929, #F5217B)"
      />
      <center>
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            signUserOut();
          }}
        >
          <u>Log out</u>
        </a>
      </center>
    </Wrapper>
  );
}
