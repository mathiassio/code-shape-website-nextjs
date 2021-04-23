import Head from "next/head";
import styled from "styled-components";
import HeaderBackground from "../components/backgrounds/HeaderBackground";
import GlassGradientIntro from "../components/intros/GlassGradientIntro";
import firebase from "firebase/app";
import { getUser,logout } from "../services/auth";
import Router from "next/router";
// import { getAuth, signOut } from "firebase/auth";

const Wrapper = styled.div`
  padding-top: 6rem;
`;

const signUserOut = () =>
firebase.auth().signOut().then(() => {
  Router.push('/join')
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});


export default function Profile() {
  const user = firebase.auth().currentUser
  const { displayName, email, emailVerified } = user;
  const title = 'Congratiolations ' + displayName.split(' ')[0];

  return (
    <Wrapper>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderBackground image="../images/blobs/HeaderBlob01.svg" />
      <GlassGradientIntro
        title={title}
        description="You are now logged in!"
        gradientColor="-webkit-linear-gradient(left, #F89929, #F5217B)"
      />
      <a href="/" onClick={event => { event.preventDefault(); signUserOut() }}>
         <u>Log out</u>
       </a>
    </Wrapper>
  );
}
