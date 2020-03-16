import firebase from 'firebase';

/** Caliche */
var Caliche = {
    apiKey: "AIzaSyAZEX13lCQllVsX_Mx4otn6JUWDKMDAQJU",
    authDomain: "borrador-9d79d.firebaseapp.com",
    databaseURL: "https://borrador-9d79d.firebaseio.com",
    projectId: "borrador-9d79d",
    storageBucket: "borrador-9d79d.appspot.com",
    messagingSenderId: "373815070480"
}

/**Guerrero */
var Guerrero = {
    apiKey: "AIzaSyBhG3NYPhgW0cp_oNW8wItiUXHir2-_g5s",
    authDomain: "adminndb-6fc6d.firebaseapp.com",
    databaseURL: "https://adminndb-6fc6d.firebaseio.com",
    projectId: "adminndb-6fc6d",
    storageBucket: "adminndb-6fc6d.appspot.com",
    messagingSenderId: "329641685604"
}

const firebaseConfig = firebase.initializeApp(Guerrero);
export default firebaseConfig;