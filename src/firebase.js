import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCaCxOS1Rdgy3oWFYk3Yp1mw1jwN-zZc2c",
  authDomain: "earnings-tracking-9fe48.firebaseapp.com",
  projectId: "earnings-tracking-9fe48",
  storageBucket: "earnings-tracking-9fe48.appspot.com",
  messagingSenderId: "696240016173",
  appId: "1:696240016173:web:5b30198f0f1bf9725961a4"
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

//for initialize auth
const auth = firebase.auth();
const db = app.database();
export {auth, db};