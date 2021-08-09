import firebase from "firebase/app";
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBPK2MNuFORKUr9eNxjeXfpHqjypV0Paj0",
    authDomain: "ecommerce-17565.firebaseapp.com",
    projectId: "ecommerce-17565",
    storageBucket: "ecommerce-17565.appspot.com",
    messagingSenderId: "956361879815",
    appId: "1:956361879815:web:51011e21513b257b1c15a2"
  };

const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();
