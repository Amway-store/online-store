import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
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
