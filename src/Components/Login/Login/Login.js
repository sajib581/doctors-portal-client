import React, { useContext, useState } from 'react';
import loginBg from '../../../images/login-bg.png'
import './Login.css'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../../App';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig); //it should be initialised outside the component
}

const Login = () => {
    const [forgatePassword, setForgatePassword] = useState(false)
    const [error, setError] = useState({})
    const [newUser, setNewUser] = useState(true)

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    const githubProvider = new firebase.auth.GithubAuthProvider();
    const yahooProvider = new firebase.auth.OAuthProvider('yahoo.com');

    const [user, setUser] = useState({
        isLoggedIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
        error: '',
        success: false
    })

    const showError = (name, message) => {
        let newError = { ...error }
        newError[name] = message
        setError(newError)
    }

    const handelGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const { displayName, email, photoURL } = result.user
                const signedInUser = {
                    isLoggedIn: true,
                    name: displayName,
                    email,
                    photo: photoURL
                }
                setLoggedInUser(signedInUser)
                setUser(signedInUser)

            }).catch((error) => {
                var errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    const handelFbSignIn = () => {
        firebase.auth().signInWithPopup(fbProvider)
            .then((result) => {
                const { displayName, email, photoURL } = result.user
                const signedInUser = {
                    isLoggedIn: true,
                    name: displayName,
                    email,
                    photo: photoURL
                }
                setLoggedInUser(signedInUser)
                setUser(signedInUser)
            })
            .catch((error) => {
                var errorMessage = error.message;
                var email = error.email;
                console.log(errorMessage);
                console.log(email);
            });
    }

    const handelGithubSignIn = () => {
        firebase
            .auth()
            .signInWithPopup(githubProvider)
            .then((result) => {
                const { displayName, email, photoURL } = result.user
                const signedInUser = {
                    isLoggedIn: true,
                    name: displayName,
                    email,
                    photo: photoURL
                }
                setLoggedInUser(signedInUser)
                setUser(signedInUser)
            }).catch((error) => {
                var errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    const handelYahooSignIn = () => {
        firebase.auth().signInWithPopup(yahooProvider)
            .then((result) => {                
                const { displayName, email, photoURL } = result.user
                const signedInUser = {
                    isLoggedIn: true,
                    name: displayName,
                    email,
                    photo: photoURL
                }
                setLoggedInUser(signedInUser)
                setUser(signedInUser)
            })
            .catch((error) => {
                console.log("Yahoo Authentication failed ",error);
            });
    }
    // Authorization
    const blurHandeler = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        let isFieldValid = true
        if (e.target.name === 'name') {
            isFieldValid = e.target.value.length > 3
            // if (isFieldValid) {
            //     showError("name", "")
            // } else {
            //     showError("name", "Name Must Be More Than 4 Letters")
            // }
        }
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value)
            // if (isFieldValid) {
            //     showError("email", "")
            // } else {
            //     showError("email", "Please Give Valid Email")
            // }
        }
        if (e.target.name === 'password') {
            const passwordLength = e.target.value.length > 6
            const passwordHasNumber = /\d{1}/.test(e.target.value)
            isFieldValid = passwordHasNumber && passwordLength
            if (isFieldValid) {
                showError("password", "")
            } else {
                showError("password", "Password Min 6 character and a number ")
            }
        }
        if (isFieldValid) {
            const newUserInfo = { ...user }
            newUserInfo[e.target.name] = e.target.value
            setUser(newUserInfo)
        }
    }

    const submitHandeler = (e) => {
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((result) => {  
                    const { displayName, email, photoURL } = result.user
                    const signedInUser = {
                    isLoggedIn: true,
                    name: displayName,
                    email,
                    photo: photoURL
                }
                setLoggedInUser(signedInUser)
                setUser(signedInUser)
                updateUserInfo(user.name)
                setNewUser(false)
                })
                .catch((error) => {
                    var errorMessage = error.message;
                    const newUserInfo = { ...user }
                    newUserInfo.error = errorMessage
                    setUser(newUserInfo)
                    console.log("Signup failed");
                });
        }
        else if (!newUser && user.email && user.password && !forgatePassword) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((result) => {                    
                    const { displayName, email, photoURL } = result.user
                    const signedInUser = {
                    isLoggedIn: true,
                    name: displayName,
                    email,
                    photo: photoURL
                }
                setLoggedInUser(signedInUser)
                setUser(signedInUser)
                console.log(loggedInUser);
                })
                .catch(error => {
                    var errorMessage = error.message;
                    const newUserInfo = { ...user }
                    newUserInfo.error = errorMessage
                    setUser(newUserInfo)
                    console.log("Login Error: " + errorMessage);
                });
        }
        else if (!newUser && user.email && forgatePassword) {
            console.log(user);

            // resetPassword(user.email)
        }
        else {
            // showError("result","Invalid Credential")
        }
        e.preventDefault();
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
    console.log(loggedInUser);
    return (
        <div className="login-page container">
            <div className="row align-items-center" style={{ height: "100vh" }}>
                <div className="col-md-6 shadow pb-5">
                    <div className="row pb-4">
                        <div style={{ cursor: "pointer" }} onClick={() => setNewUser(true)} className={`col-md-6 p-3 text-center ${newUser ? 'shadow' : ""}`}>
                            <h4>Signup</h4>
                        </div>
                        <div style={{ cursor: "pointer" }} onClick={() => setNewUser(false)} className={`col-md-6 p-3 text-center ${!newUser ? 'shadow' : ""}`}>
                            <h4>Login</h4>
                        </div>
                    </div>
                    <form className="px-5" onSubmit={submitHandeler}>
                        {
                            newUser && <div className="form-group">
                                <input onBlur={blurHandeler} required type="text" name="name" placeholder="First & Last Name" className="py-4 form-control" />
                            </div>
                        }
                        <div className="form-group">
                            <input onBlur={blurHandeler} required type="email" name="email" placeholder="Email" className="form-control py-4" />
                        </div>
                        <div className="form-group">
                            <input onBlur={blurHandeler} required type="password" name="password" placeholder="Your Password" className="py-4 form-control" />
                        </div>
                        {!newUser && <div className="form-group">
                            <label htmlFor="" className="text-danger mt-4">Forgot your password?</label>
                        </div>}
                        <div className="from-group mt-3 text-right">
                            {
                                newUser ? <input type="Submit" className="btn btn-brand" value= "Create A New Account"  /> : <input type="Submit" className="btn btn-brand" value="Sign In" />
                            }
                        </div>

                        <div className="row my-2">
                            <div className="col-md-4">
                                <hr style={{ border: '1px solid black' }} />
                            </div>
                            <div className="col-md-4 text-center">
                                <p>or connect with</p>
                            </div>
                            <div className="col-md-4">
                                <hr style={{ border: '1px solid black' }} />
                            </div>
                        </div>

                        <div className="d-flex justify-content-between">
                            <img onClick={handelFbSignIn} style={{ width: '50px', cursor: "pointer" }} src="https://hrcdn.net/community-frontend/assets/facebook-colored-af4249157d.svg" alt="" />
                            <img onClick={handelGoogleSignIn} style={{ width: '50px', cursor: "pointer" }} src="https://hrcdn.net/community-frontend/assets/google-colored-20b8216731.svg" alt="" />
                            <img onClick={handelGithubSignIn} style={{ width: '50px', cursor: "pointer" }} src="https://hrcdn.net/community-frontend/assets/github-colored-1db995054b.svg" alt="" />
                            <img onClick={handelYahooSignIn} style={{ width: '80px', cursor: "pointer" }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Yahoo%21_icon.svg/1200px-Yahoo%21_icon.svg.png" alt="" />
                            
                        </div>
                    </form>
                </div>
                <div className="col-md-6 d-none d-md-block align-self-end">
                    <img className="img-fluid" src={loginBg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;
