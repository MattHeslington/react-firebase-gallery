import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyDkhAmPIN4nethWAwAH_3BKxBSj6g7HTks",
    authDomain: "react-photo-gallery-1e2e7.firebaseapp.com",
    databaseURL: "https://react-photo-gallery-1e2e7.firebaseio.com",
    projectId: "react-photo-gallery-1e2e7",
    storageBucket: "react-photo-gallery-1e2e7.appspot.com",
    messagingSenderId: "406486161859",
    appId: "1:406486161859:web:cb191889b7bcf1f587c576"
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export {projectStorage, projectFirestore};