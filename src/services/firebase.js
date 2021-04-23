import firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";

const config = {
   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
   authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
   databseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
   projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
}

export default function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
}
