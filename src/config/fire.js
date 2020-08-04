import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBepDzM_ghUnj_61NC6J4yv-LT0Idr6WAs",
  authDomain: "react-login-93270.firebaseapp.com",
  databaseURL: "https://react-login-93270.firebaseio.com",
  projectId: "react-login-93270",
  storageBucket: "react-login-93270.appspot.com",
  messagingSenderId: "239294885621",
  appId: "1:239294885621:web:db5c25f9f9e1a090a81fbc",
  measurementId: "G-3JS102RQDV"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;