import  content  from './template1.js';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDsAk8goTY1C0B5UZ63rsfaE1lMx3JmPc0",
    authDomain: "login-with-goog.firebaseapp.com",
    databaseURL: "https://login-with-goog.firebaseio.com",
    projectId: "login-with-goog",
    storageBucket: "login-with-goog.appspot.com",
    messagingSenderId: "29201761866"
  };
  firebase.initializeApp(config);

const root = document.getElementById("root");
root.appendChild( content() );