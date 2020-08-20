import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var config = {
    apiKey: "AIzaSyB2_mq8t-VWUdMmKC3ktDhlj1mR9Fu8kBA",
    authDomain: "todo-df1ac.firebaseapp.com",
    databaseURL: "https://todo-df1ac.firebaseio.com",
    projectId: "todo-df1ac",
    storageBucket: "todo-df1ac.appspot.com",
    messagingSenderId: "891663606841",
    appId: "1:891663606841:web:ec2a687873dc7c6ee699e8",
    measurementId: "G-7LX1P4TR3Y"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  const db=firebase.firestore();
  db.settings({timestampsInSnapshots:true});
  export default db;
