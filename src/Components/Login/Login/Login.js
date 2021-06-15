import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../../App';
import loginBg from '../../../images/login-bg.png';
import './Login.css';
import { fbSignInHandeler, forgatePasswordHandeler, githubSignInHandeler, googleSignInHandeler, logInWithEmailAndPassword, signUpWithEmailAndPassword, yahooSignInHandeler } from './LoginManager';


const Login = () => {
    const [forgatePassword, setForgatePassword] = useState(false)
    const [error, setError] = useState({})
    const [newUser, setNewUser] = useState(true)

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

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

    const handelResponse = (res) => {
        // res.isLoggedIn = true ;
        setLoggedInUser(res)
        setUser(res)
        console.log(res);
        localStorage.setItem('response', JSON.stringify(res));

        localStorage.setItem('name', res.name)
        localStorage.setItem('email', res.email)
        history.replace(from);

    }

    const handelGoogleSignIn = () => {
        googleSignInHandeler()
            .then(res => {
                handelResponse(res)
            })
    }

    const handelFbSignIn = () => {
        fbSignInHandeler()
            .then(res => {
                handelResponse(res)
            })
    }

    const handelGithubSignIn = () => {
        githubSignInHandeler()
            .then(res => {
                handelResponse(res)
            })
    }

    const handelYahooSignIn = () => {
        yahooSignInHandeler()
            .then(res => {
                handelResponse(res)
            })
    }

    // Authorization
    const blurHandeler = (e) => {
        let isFieldValid = true
        if (e.target.name === 'name') {
            isFieldValid = e.target.value.length > 3
        }
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value)
        }
        if (e.target.name === 'password') {
            console.log("Hitted PAssword");
            console.log(e.target.value);
            isFieldValid = e.target.value.length > 3
        }
        if (isFieldValid) {
            const newUserInfo = { ...user }
            newUserInfo[e.target.name] = e.target.value
            setUser(newUserInfo)
        }
    }

    const submitHandeler = (e) => {
        console.log(newUser, user.email, user.password, user.name);
        if (newUser && user.email && user.password && user.name) {
            console.log("Signup hitted");
            signUpWithEmailAndPassword(user.email, user.password, user.name)
                .then(res => {
                    console.log("Signup Success");
                    setLoggedInUser(res)
                    setUser(res)
                    setNewUser(false)
                    alert('User Created Successfully. Now please Log In')
                })
                .catch(err => {
                    console.log("Signup Error Occured");
                })

        }
        else if (!newUser && user.email && user.password && !forgatePassword) {
            logInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    localStorage.setItem('response', JSON.stringify(res));
                    localStorage.setItem('name', res.name)
                    localStorage.setItem('email', res.email)

                    setLoggedInUser(res)
                    setUser(res)
                    history.replace(from);
                })
        }
        else if (!newUser && user.email && forgatePassword) {
            forgatePasswordHandeler(user.email)
        }
        else {
            // showError("result","Invalid Credential")
        }
        e.preventDefault();
    }

    return (
        <div className="login-page container">
            <div className="row align-items-center" style={{ height: "100vh" }}>
                <div className="col-md-6 shadow pb-5">
                    <div className="row pb-4">
                        <div style={{ cursor: "pointer" }} onClick={() => { setNewUser(true); setForgatePassword(false) }} className={`col-md-6 p-3 text-center ${newUser ? 'shadow' : ""}`}>
                            <h4>Signup</h4>
                        </div>
                        <div style={{ cursor: "pointer" }} onClick={() => setNewUser(false)} className={`col-md-6 p-3 text-center ${!newUser ? 'shadow' : ""}`}>
                            <h4>Login</h4>
                        </div>
                    </div>

                    <form className="px-5" onSubmit={submitHandeler}>
                        {
                            (newUser && !forgatePassword) && <div className="form-group">
                                <input onBlur={blurHandeler} required type="text" name="name" placeholder="First & Last Name" className="py-4 form-control" />
                            </div>
                        }
                        <div className="form-group">
                            <input onBlur={blurHandeler} required type="email" name="email" placeholder="Email" className="form-control py-4" />
                        </div>
                        {
                            !forgatePassword && <div className="form-group">
                                <input onBlur={blurHandeler} required type="password" name="password" placeholder="Your Password" className="py-4 form-control" />
                            </div>
                        }
                        {!newUser && <div className="form-group" >
                            <label style={{ cursor: "pointer" }} onClick={() => setForgatePassword(!forgatePassword)} htmlFor="" className="text-danger mt-4">{!forgatePassword ? 'Forgot Password' : 'Back to Log In'}</label>
                        </div>}
                        <div className="from-group mt-3 text-right">
                            {
                                !forgatePassword ? <input type="Submit" className="btn btn-brand" value={newUser ? `Create A New Account` : `Sign In`} /> :
                                    <input type="Submit" className="btn btn-brand" value="Request For Verification" />
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
                            {/* <img onClick={handelYahooSignIn} style={{ width: '80px', cursor: "pointer" }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Yahoo%21_icon.svg/1200px-Yahoo%21_icon.svg.png" alt="" /> */}

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
