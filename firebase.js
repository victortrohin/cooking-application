import * as firebase from "firebase";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBG7VisjErS2UZnwQgE1K6ohoQNPMPd2rQ",
  authDomain: "cooking-time-6f1ab.firebaseapp.com",
  projectId: "cooking-time-6f1ab",
  storageBucket: "cooking-time-6f1ab.appspot.com",
  messagingSenderId: "267138767574",
  appId: "1:267138767574:web:4bdefb46f9da11d0c1c777",
  databaseURL: "https://cooking-time-6f1ab-default-rtdb.europe-west1.firebasedatabase.app/",
};

let app;

if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app();
}

const auth = firebase.auth();

// Initialize Realtime Database and get a reference to the service
const database = firebase.database();


export { auth };

export {database};