import React,{useEffect, useState} from 'react'
import { Form, LogoImg, SubmitButton, Wrapper } from '../SignIn/Sign-logIn.style';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';
import validator from "validator";

const LogIn = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [confirmPassword,setconfirmPassword] = useState("");
    const [emailError, setemailError] = useState(false);
    const [passwordError, setpasswordError] = useState(false);
    const [formValid, setformValid] = useState(false);
    const [message, setmessage] = useState({email:"", password:""});

    console.log(passwordError);
    console.log(emailError);
    console.log(message);
    console.log(formValid);

    const validateField = (fieldName,value) =>{
        let EmailError=emailError;
        let PasswordError=passwordError;
        let Message = message;
        switch(fieldName) {
            case "email":
                if (validator.isEmail(email)) {
                        EmailError=true;
                        Message.email="Valid";
                }
                else {
                        EmailError=false;
                        Message.email="Not Valid";
                }
                break;
            case "password":
                if (validator.isStrongPassword(this.state.password)) {
                        PasswordError=true;
                        Message.password="Valid";
                }
                else {
                        PasswordError=false;
                        Message.password="Not Valid";
                };
                break;
            default:
                break;
        }
        setemailError(EmailError,validateForm);
        setpasswordError(PasswordError,validateForm);
        setmessage(Message,validateForm);
    };  

    useEffect(() => {
        validateField()
    })


    const validateForm= () => {
        setformValid(emailError && passwordError);
        console.log(!formValid);
    };


    const createAccount= (e) =>{
        // e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) =>{
                console.log(userCredential);
            })
            .catch((error) => alert(error.message));

    };

    return (
        <Wrapper>
            <Link to={`/`}>
                <LogoImg src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon-Logo"/> 
            </Link>
            <Form>
                <h1>Create Account</h1>
                <label className="label">Your Name</label>
                <input type="text" name="name" className="input" value={name} onChange={(e) => setname(e.target.value,)}/>
                <label className="label">Email or mobile phone number</label>
                <input type="text" name="email" className="input" value={email} onChange={(e) => setemail(e.target.value)}/>
                <label className="label">Password</label>
                <input type="password" name="password" className="input" value={password} onChange={(e) => setpassword(e.target.value)}/>
                <label className="label">Confirm Password</label>
                <input type="password" name="confirmPassword" className="input" value={confirmPassword} onChange={(e) => setconfirmPassword(e.target.value)}/>
                <SubmitButton onClick={(e) => createAccount(e)}>Create your Amazon Account</SubmitButton>
                <div className="privacy">By creating an account and logging in, you agree to Amazon's Fake Clone <span>Conditions of use</span> and <span>Privacy Notice.</span></div>
                <div className="already">Already have an account? <Link to={`/SignIn`}><span className="sign-in"> Sign In</span></Link>
                </div>
            </Form>
        </Wrapper>
    )
};

export default LogIn;
