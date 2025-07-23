// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmO0E7n0c7dRRcDKM69XOFr2RzEHLlMfQ",
  authDomain: "calmsphere-9b2cc.firebaseapp.com",
  projectId: "calmsphere-9b2cc",
  storageBucket: "calmsphere-9b2cc.firebasestorage.app",
  messagingSenderId: "269811136087",
  appId: "1:269811136087:web:bfb62c2f54de0ed9c4d512",
  measurementId: "G-E6NWSB56DF"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log("User signed in: ", result.user);
  } catch (error) {
    console.error("Google sign-in error:", error.message);
  }
};
