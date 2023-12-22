// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/storage"
import "firebase/compat/auth"
import "firebase/compat/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB6XWSJtqGUCD0rkQo9ML1kuvsLV4uBDDA",
    authDomain: "firechat-4ca3d.firebaseapp.com",
    projectId: "firechat-4ca3d",
    storageBucket: "firechat-4ca3d.appspot.com",
    messagingSenderId: "374190073535",
    appId: "1:374190073535:web:c3beb66c1984cc9ae5c80a"
};


const app = firebase.initializeApp(firebaseConfig); // Initialize Firebase
const db = app.firestore(); // create the database for
const auth = firebase.auth(); // create authentication
const storage = firebase.storage(); // create storage


export {db,auth,storage}