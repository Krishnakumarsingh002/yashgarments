import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom';
// import { auth } from "./firebase";
import firebase from "./firebase"


function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [displayname, setDisplayname] = useState('')
    const configureCaptcha = () => {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {
              // reCAPTCHA solved, allow signInWithPhoneNumber.
            //   onSignInSubmit();
              console.log("Recaptcha Verified")
            },
            defaultCountry: "IN"
          });
    }
    
    
    const onSignInSubmit = (e) => {
        e.preventDefault();
        
        configureCaptcha();
        const phoneNumber ="+91"+email;
        console.log(phoneNumber);
        const appVerifier = window.recaptchaVerifier;
        firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
            .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
            window.confirmationResult = confirmationResult;
            console.log("OTP has been sent")
        // ...
            })
            .catch((error) => {
        // Error; SMS not sent
        console.log("SMS NOT SEND")
        console.log(error);
        });

    }
    const onSubmitOTP = (e) =>{
        e.preventDefault();
        const code = password;
        console.log(code);
        window.confirmationResult.confirm(code).then((result) => {
          // User signed in successfully.
          const user = result.user;
          console.log(JSON.stringify(user));
          alert("User is verified");
          history.push('/');
          // ...
        }).catch((error) => {
          // User couldn't sign in (bad verification code?)
          // ...
        });

    }
    return (
        <div className="login">
            <Link to='/'>
                <img className="login_image" src="https://image.freepik.com/free-vector/people-letter-y-initial-logo_8586-51.jpg" alt="not" />
            </Link>

            <div className="login_container">
                <h1>Sign-in</h1>

                <form onSubmit={onSignInSubmit}>
                    <h5>Phone Number</h5>
                    <input type="text" value={email}
                        onChange={e => setEmail(e.target.value)} />


                    <button type="submit" >Send OTP</button>
                    <div id="sign-in-button">
                    </div>
                </form>
                <form id="otp" onSubmit= {onSubmitOTP}>
                    <h5>Enter OTP</h5>
                    <input type="text" value={password}
                        onChange={e => setPassword(e.target.value)} />
                        <button type="submit">Confirm</button>
                </form>

                <p>
                    By signing-in you agree to the Conditions of
                    Use & Sale. Please see our Privacy Notice, our Cookies
                    Notice and our Interest-Based Ads Notice.
                </p>

                {/* <button onClick={register} className='login_registerButton'>
                            Create Your Amazon Account
                        </button> */}
                <Link to="/signup"><p style={{
                    color: "blue", cursor:
                        "pointer"
                }} >New user ? Create your account</p></Link>

            </div>
        </div>

    )
}

export default Login
