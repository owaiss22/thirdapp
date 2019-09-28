import * as firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyAKFR2GwYDymLd_VHZmJim-cXkRijamkCM",
    authDomain: "practisewebapp.firebaseapp.com",
    databaseURL: "https://practisewebapp.firebaseio.com",
    projectId: "practisewebapp",
    storageBucket: "",
    messagingSenderId: "685224529917",
    appId: "1:685224529917:web:18598d94773905993c9394",
    measurementId: "G-WZTBKLJ2P7"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;

  