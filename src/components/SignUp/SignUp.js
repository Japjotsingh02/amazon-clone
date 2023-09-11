import React,{ useState } from 'react';
import { Form, LogoImg, SubmitButton, Wrapper } from '../SignIn/Sign-logIn.style';
import { Link, useHistory } from 'react-router-dom';
import { createUserWithEmailAndPassword ,updateProfile } from "firebase/auth";
import { auth } from '../../firebase';
import validator from "validator";

const SignUp = () => {
    const history = useHistory();
    const [data, setData] = useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
    });
    const [emailError, setemailError] = useState(false);
    const [passwordError, setpasswordError] = useState(false);
    const [confirmPasswordError, setconfirmPasswordError] = useState(false);
    const [formValid, setformValid] = useState(false);
    const [errorMessage, setErrorMessage] = useState({email:"", password:""});

    // validate input fields
    const validateField = (fieldName,value) =>{
        switch(fieldName) {
            case "email":
                if (validator.isEmail(data.email)) {
                        setemailError(false);
                }
                else {
                        setemailError(true);
                        setErrorMessage("Not Valid Email");
                }
                break;
            case "password":
                if (validator.isStrongPassword(data.password)) {
                        setpasswordError(false);
                }
                else {
                        setpasswordError(true);
                        setErrorMessage("Not Strong or Valid Password");
                };
                break;
            case "confirmPassword":
                if (data.confirmPassword!==data.password) {
                        setconfirmPasswordError(false);
                    }
                    else {
                        setconfirmPasswordError(true);
                        setErrorMessage("Confirm pasword doesn't match password");
                    };
                break;
            default:
                break;
        }
    };  

    // input change handling
    const handleInputsChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value});
        validateField(e.target.name);
    }
    
    // is form valid
    const validateForm= () => {
        setformValid(!emailError || !passwordError || !confirmPasswordError);
    };

    // account create using firebase auth 
    const createAccount= (e) =>{
        e.preventDefault();
        validateForm();

        if(!formValid){
            alert(errorMessage);
            return;
        }

        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) =>{
                return updateProfile(userCredential.user, {
                    displayName: data.name,
                });
            })
            .then(() => {
                // Profile updated successfully
                const displayName = auth.currentUser.displayName;
                history.push('/');
                console.log(displayName, "Profile Updated");
            })
            .catch((error) => {alert(error.message || error);});
    };

    return (
        <Wrapper>
            <Link to={`/`}>
                <LogoImg src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon-Logo"/> 
            </Link>
            <Form>
                <h1>Create Account</h1>
                <label className="label" htmlFor='name'>Your Name</label>
                <input type="text" name="name" className="input" value={data.name} onChange={(e)=>handleInputsChange(e)} required/>
                <label className="label" htmlFor='email'>Email or mobile phone number</label>
                <input type="text" name="email" className="input" value={data.email} onChange={(e)=>handleInputsChange(e)} required/>
                <label className="label" htmlFor='password'>Password</label>
                <input type="password" name="password" className="input" value={data.password} onChange={(e)=>handleInputsChange(e)} required/>
                <label className="label" htmlFor='confirmPassword'>Confirm Password</label>
                <input type="password" name="confirmPassword" className="input" value={data.confirmPassword} onChange={(e)=>handleInputsChange(e)} required/>
                <SubmitButton type="submit" onClick={(e) => createAccount(e)}>Create your Amazon Account</SubmitButton>
                <div className="privacy">By creating an account and logging in, you agree to Amazon's Fake Clone <span>Conditions of use</span> and <span>Privacy Notice.</span></div>
                <div className="already">Already have an account? <Link to={`/SignIn`}><span className="sign-in"> Sign In</span></Link>
                </div>
            </Form>
        </Wrapper>
    )
};

export default SignUp;

