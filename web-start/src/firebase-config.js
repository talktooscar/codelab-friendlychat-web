/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */

 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARoiB0jNx--iwtWuzjFsfmjk1SQnbZMEM",
  authDomain: "friendlychat-1f3bd.firebaseapp.com",
  projectId: "friendlychat-1f3bd",
  storageBucket: "friendlychat-1f3bd.appspot.com",
  messagingSenderId: "927173324883",
  appId: "1:927173324883:web:556ca6b7c62a42791496a6",
  measurementId: "G-8KL5XLQXR8"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}