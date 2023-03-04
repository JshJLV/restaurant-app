import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// config firebase
const firebaseConfig = {
  apiKey: "AIzaSyCDHtLJj9hT5NkGDfvBfHgvMQRaQnAmnLo",
  authDomain: "restaurant-app-ad9f7.firebaseapp.com",
  projectId: "restaurant-app-ad9f7",
  storageBucket: "restaurant-app-ad9f7.appspot.com",
  messagingSenderId: "562425455599",
  appId: "1:562425455599:web:fe669c4bf3ab9ed74bcc1a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
