import firebase from "firebase";

const FirebaseAppConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBKT,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MSGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID
};

firebase.initializeApp(FirebaseAppConfig);

export default firebase.firestore();
