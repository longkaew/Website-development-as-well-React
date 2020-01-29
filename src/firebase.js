import * as firebase from "firebase/app";
import "firebase/auth";
import 'firebase/storage';
const app = firebase.initializeApp({
    apiKey: "AIzaSyAaIlEPrRB0cDU9HDMYdBk9MbdWtrhp-jc",
    authDomain: "database-148e8.firebaseapp.com",
    databaseURL: "https://database-148e8.firebaseio.com",
    projectId: "database-148e8",
    storageBucket: "database-148e8.appspot.com",
    messagingSenderId: "906607022055",
    appId: "1:906607022055:web:39666e47de742e27"
});
const storage =firebase.storage();

export 
{
    storage, firebase as default
}