import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBXHfFd9B84zZn5xus7ovThdXvFShfW6fk",
    authDomain: "spotifychartsdatabase.firebaseapp.com",
    databaseURL: "https://spotifychartsdatabase-default-rtdb.firebaseio.com",
    projectId: "spotifychartsdatabase",
    storageBucket: "spotifychartsdatabase.appspot.com",
    messagingSenderId: "114716332276",
    appId: "1:114716332276:web:06bbe8997dbfdb4a8b0ea1",
    measurementId: "G-DGECFWQ3RK"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;
export const db = firebase.database();