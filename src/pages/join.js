import { useState } from "react";
import Router from "next/router";
import firebase from "firebase/app";
import "firebase/auth";
import initFirebase from "../services/firebase";

initFirebase();

const provider = new firebase.auth.GoogleAuthProvider();
//provider.addScope("...")

export default function Join() {
  const [authorizing, setAuthorization] = useState(false);

  const handleAuthentication = async () => {
    // Router.push('/learn')
    setAuthorization(true);

    try {
      const result = await firebase.auth().signInWithPopup(provider);
      const { user, credentials } = result;

      console.log(result);

      if (!user) {
        throw new Error("There was an issue authorizing");
      }

      Router.push("/profile");
    } catch (error) {}
    setAuthorization(false);
  };

  return (
    <div className="mt-40">
      <div>
        <div>Join now</div>
      </div>
      <div>
        <div> Click below to sign in or join </div>
      </div>
      <div>
        <button onClick={handleAuthentication} loading={authorizing}>
          Get started
        </button>
      </div>
    </div>
  );
}
