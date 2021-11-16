// firebase.js
import firebase from 'firebase/compat/app';
import "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_YOUTUBE_API_KEY,
  };

  export default firebase.initializeApp(firebaseConfig);