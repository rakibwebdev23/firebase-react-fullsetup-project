// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChmTtjJaKJiifj8Jndxw_aZ28-olkiBug",
  authDomain: "setup-auth-react-project-recap.firebaseapp.com",
  projectId: "setup-auth-react-project-recap",
  storageBucket: "setup-auth-react-project-recap.appspot.com",
  messagingSenderId: "320376841081",
  appId: "1:320376841081:web:420a01ab81c20b46da85a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;