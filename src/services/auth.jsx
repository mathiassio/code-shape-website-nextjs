import firebase from "firebase/app";
import { getAuth, signOut } from "firebase/auth";

export const isBrowser = () => typeof window !== "undefined"

// export const getUser = () =>
//   isBrowser() && window.localStorage.getItem("user")
//     ? JSON.parse(window.localStorage.getItem("user"))
//     : {}

export const getUser = () => {
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    return user
  } else {
    // No user is signed in.
  }
});
}

export const setUser = user =>
  isBrowser() && window.localStorage.setItem("user", JSON.stringify(user))

  export const isLoggedIn = () => {
  const user = getUser()
  return !!user.email
}

export const logout = (firebase) => {
  return new Promise(resolve => {
    firebase.auth().signOut().then(function() {
      setUser({});
      resolve();
    });
  })
}

// export const logout = () => {
//   const auth = firebase.getAuth();
//   return signOut(auth).then(() => {
//     // Sign-out successful.
//   }).catch((error) => {
//     // An error happened.
//   });
// }
