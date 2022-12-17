import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBzsx1eNhxAlkvnMqR8feC6ONHN31W1tko",
    authDomain: "ecommerce-alabama.firebaseapp.com",
    projectId: "ecommerce-alabama",
    storageBucket: "ecommerce-alabama.appspot.com",
    messagingSenderId: "960842863067",
    appId: "1:960842863067:web:115f7f6f2bef894dd297fe"
  };

const App = initializeApp(firebaseConfig)
export const db = getFirestore(App)