import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAZEX13lCQllVsX_Mx4otn6JUWDKMDAQJU",
    authDomain: "borrador-9d79d.firebaseapp.com",
    databaseURL: "https://borrador-9d79d.firebaseio.com",
    projectId: "borrador-9d79d",
    storageBucket: "borrador-9d79d.appspot.com",
    messagingSenderId: "373815070480"
}

const firebaseConfig = firebase.initializeApp(config);
export default firebaseConfig;