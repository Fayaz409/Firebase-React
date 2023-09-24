// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoSGj2uT1gDHZUR5Gl1nW_IE44P7v5he0",
  authDomain: "fir-tut-997c7.firebaseapp.com",
  projectId: "fir-tut-997c7",
  storageBucket: "fir-tut-997c7.appspot.com",
  messagingSenderId: "748477902060",
  appId: "1:748477902060:web:448a03963c24ea6f82c9c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)

export const googleProvider =new GoogleAuthProvider();

