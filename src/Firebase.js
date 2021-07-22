import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbF9aTPYeUJX2o0NNUFr0Auh3cH_JUCAo",
  authDomain: "yungtattooing.firebaseapp.com",
  projectId: "yungtattooing",
  storageBucket: "yungtattooing.appspot.com",
  messagingSenderId: "634703831039",
  appId: "1:634703831039:web:f3a83ae9926696ee6751ca",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
