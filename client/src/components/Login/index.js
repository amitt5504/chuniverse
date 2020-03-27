// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

// Configure Firebase.
const config = {
    apiKey: "AIzaSyAk8cP7qmiX-g3v-Y3x4UbOuX4_r1pVr20",
    authDomain: "project3-92e33.firebaseapp.com",
    databaseURL: "https://project3-92e33.firebaseio.com",
    projectId: "project3-92e33",
    storageBucket: "project3-92e33.appspot.com",
    messagingSenderId: "964917715624",
    appId: "1:964917715624:web:b8c4ca315771ff82f7d89d",
    measurementId: "G-P1RBJC72D3"
};
firebase.initializeApp(config);

var provider = new firebase.auth.GoogleAuthProvider();

firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  
  sessionStorage.setItem("user", user);
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/cms',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ]
};
let styles = {
    textAlign: 'center'
  }; 
class Login extends React.Component {

     
  render() {
    return (
      <div style={styles}>
        <br />
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
      </div>
    );
  }
}

export default Login;