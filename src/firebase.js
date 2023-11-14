
import { initializeApp } from "firebase/app";
import { getAuth ,GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBMzC0XmcuQAoOx3qaM4ZROEOP-GR9auGs",
  authDomain: "counter-7a372.firebaseapp.com",
  projectId: "counter-7a372",
  storageBucket: "counter-7a372.appspot.com",
  messagingSenderId: "440238111083",
  appId: "1:440238111083:web:7de0d4e3194c12b6acf42e",
  measurementId: "G-23LC48VHJT"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export {auth,provider};