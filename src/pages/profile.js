import Head from "next/head";
import styled from "styled-components";
import PageIntro from "../components/intros/PageIntro";
import firebase from "firebase/app";
import { getUser, logout, isLoggedIn } from "../services/auth";
import Router from "next/router";
import { getAuth, signOut } from "firebase/auth";
import initFirebase from "../services/firebase";

initFirebase();
const Wrapper = styled.div``;

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
    "Welcome" + (displayName ? " " + displayName.split(" ")[0] : "");

  return (
    <Wrapper>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageIntro
        title={title}
        description="While we wait for more content to arrive, go ahead and explore the articles and the community."
        gradientColor="-webkit-linear-gradient(left, #037de8, #0fd9d9)"
      />
      <center>
        <a
          className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-blue-500"
          href="/"
          onClick={(event) => {
            event.preventDefault();
            signUserOut();
          }}
        >
          Sign out
        </a>
      </center>
    </Wrapper>
  );
}
