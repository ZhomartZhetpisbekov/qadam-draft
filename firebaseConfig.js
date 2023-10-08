import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAdoLJIxyE5TLHaO-U9vsC23fzq1ga1lxw",
  authDomain: "qadam-draft.firebaseapp.com",
  projectId: "qadam-draft",
  storageBucket: "qadam-draft.appspot.com",
  messagingSenderId: "203512170027",
  appId: "1:203512170027:web:9991ec94e144d5902bcc6e",
  measurementId: "G-176KNR92RR",
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export { auth };
