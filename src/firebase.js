import { initializeApp } from "firebase/app";
// console.log(process.env);
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// };

// const app = initializeApp(firebaseConfig);
import { getFireStore, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBRHBdgx9gBZ2TF2GSkW3xMZMs-5GZn684",
  authDomain: "data-1554d.firebaseapp.com",
  databaseURL: "https://data-1554d-default-rtdb.firebaseio.com",
  projectId: "data-1554d",
  storageBucket: "data-1554d.appspot.com",
  messagingSenderId: "511148713011",
  appId: "1:511148713011:web:7ccd563e2dca4da0712f46",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
