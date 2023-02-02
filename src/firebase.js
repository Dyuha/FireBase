import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVCfMt3rGONz1HJ0aTwev2nht_NuHxVmk",
  authDomain: "almostfullstackapp.firebaseapp.com",
  projectId: "almostfullstackapp",
  storageBucket: "almostfullstackapp.appspot.com",
  messagingSenderId: "855577396182",
  appId: "1:855577396182:web:cee9b746093d61137d5a77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
