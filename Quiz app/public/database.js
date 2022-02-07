// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-analytics.js";
import { getDatabase, ref, push, set,onValue } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqigEj2XaVD18j0z3J5haGCPT2oSrUcyY",
  authDomain: "quiz-app-68dec.firebaseapp.com",
  projectId: "quiz-app-68dec",
  storageBucket: "quiz-app-68dec.appspot.com",
  messagingSenderId: "299161682127",
  appId: "1:299161682127:web:6332c3dbf46383de0d77ba",
  measurementId: "G-EPLN8Z29V7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();

var listofQuestions = []

window.gettingQuestions = () =>{
  var refer = ref(database,"Questions");
  onValue(refer, (snapshot) => {
    snapshot.forEach((childSnapshot) => {

      const childData = childSnapshot.val();
      listofQuestions.push(childData);
      window.localStorage.setItem("listofQuestions",JSON.stringify(listofQuestions))
    
    });
  }, {
    onlyOnce: true
  });
}

setTimeout(() => {
  gettingQuestions();
}, 1000);


