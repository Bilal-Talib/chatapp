import React from 'react'
import { auth } from './firebase'
import "./App.css"
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
const Signup = ({username,email,password,setUsername,setEmail,setPassword}) => {

    // Sign in with google
    const signInWithGoogle = (e) => {
        e.preventDefault();
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    }
    return (
        <>
        <form action="">
                <div className="card">
                    <h3 style={{color:"#fff"}}>Sign In First!</h3>
                <div className="button">
                    <button type="submit" onClick={signInWithGoogle}>Google account</button>
                </div>
                </div>
        </form>
        </>
)
}

export default Signup
