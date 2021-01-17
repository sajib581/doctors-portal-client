import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

const googleProvider = new firebase.auth.GoogleAuthProvider();
const fbProvider = new firebase.auth.FacebookAuthProvider();
const githubProvider = new firebase.auth.GithubAuthProvider();
const yahooProvider = new firebase.auth.OAuthProvider('yahoo.com');

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig); //it should be initialised outside the component
}

export const googleSignInHandeler = () => {
    return firebase.auth().signInWithPopup(googleProvider)
        .then((result) => {
            const { displayName, email, photoURL } = result.user
            const signedInUser = {
                isLoggedIn: true,
                name: displayName,
                email,
                photo: photoURL
            }
            return signedInUser


        }).catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
}

export const fbSignInHandeler = () => {
    return firebase.auth().signInWithPopup(fbProvider)
        .then((result) => {
            const { displayName, email, photoURL } = result.user
            const signedInUser = {
                isLoggedIn: true,
                name: displayName,
                email,
                photo: photoURL
            }
            return signedInUser
        })
        .catch((error) => {
            const errorMessage = error.message;
            const email = error.email;
            console.log(errorMessage);
            console.log(email);
        });
}

export const githubSignInHandeler = () => {
    return firebase.auth().signInWithPopup(githubProvider)
        .then((result) => {
            const { displayName, email, photoURL } = result.user
            const signedInUser = {
                isLoggedIn: true,
                name: displayName,
                email,
                photo: photoURL
            }
            return signedInUser
        }).catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
}

export const yahooSignInHandeler = () => {
    return firebase.auth().signInWithPopup(yahooProvider)
        .then((result) => {
            const { displayName, email, photoURL } = result.user
            const signedInUser = {
                isLoggedIn: true,
                name: displayName,
                email,
                photo: photoURL
            }
            return signedInUser
        })
        .catch((error) => {
            console.log("Yahoo Authentication failed ", error);
        });
}

const updateUserInfo = (name) => {
    console.log(name);
    const user = firebase.auth().currentUser;
    user.updateProfile({
        displayName: name
    })
        .then(() => {
            console.log("user name updated successfully");
        })
        .catch((error) => {
            console.log(error);
        })
}

export const signUpWithEmailAndPassword = (email, password, name) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            const { displayName, email, photoURL } = result.user
            const signedInUser = {
                isLoggedIn: true,
                name: displayName,
                email,
                photo: photoURL
            }
            console.log(name);
            updateUserInfo(name)
            return signedInUser
        })
        .catch((error) => {
            const newUserInfo = {}
            const errorMessage = error.message;
            newUserInfo.error = errorMessage
            console.log("Signup failed");
            return newUserInfo;            
        });
}

export const logInWithEmailAndPassword = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            const { displayName, email, photoURL } = result.user
            const signedInUser = {
                isLoggedIn: true,
                name: displayName,
                email,
                photo: photoURL
            }
            return signedInUser
        })
        .catch(error => {
            const newUserInfo = {}
            const errorMessage = error.message;
            newUserInfo.error = errorMessage
            console.log("Login Error: " + errorMessage);
            return newUserInfo
        });
}

export const forgatePasswordHandeler = (email) => {
    const auth = firebase.auth();
    const emailAddress = email;

    auth.sendPasswordResetEmail(emailAddress).then(function () {
        console.log("Email sent");
    }).catch(function (error) {
        // An error happened.
    });
}