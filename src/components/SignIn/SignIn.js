import React,{useState} from 'react'
import { CreateAccount, Form, LogoImg, SubmitButton, Wrapper } from './Sign-logIn.style';
import { Link,useHistory } from 'react-router-dom';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { auth } from '../../firebase';

const SignIn = () => {

    const history = useHistory();
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [emailError, setemailError] = useState(false);
    const [passwordError, setpasswordError] = useState(false);
    const [formValid, setformValid] = useState(false);

    console.log(password);
    console.log(email);

    const signIn= (e) =>{
        e.preventDefault();
        console.log(e.target);

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                history.push('/');
            })
            .catch((error) => console.log(error.message))
    };


    const validateForm= () => {
        setformValid(emailError && passwordError);
        console.log(!formValid);
    };

    return (
        <Wrapper>
            <Link to={`/`}>
                <LogoImg src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon-Logo"/> 
            </Link>
            <Form>
                <h1>Sign-In</h1>
                <label className="label">Email or mobile phone number</label>
                <input type="text" name="email" className="input" value={email} onChange={(e) => setemail(e.target.value)}></input>
                <label className="label">Password</label>
                <input type="password" name="password" className="input" value={password} onChange={(e) => setpassword(e.target.value)}></input>
                <SubmitButton onClick={(e) =>signIn(e)}>Sign In</SubmitButton>
                <div className="privacy">By continuing, you agree to Amazon's Fake Clone <span>Conditions of use</span> and <span>Privacy Notice.</span></div>
                <div className="need-help">Need Help?</div>
            </Form>
            <div className="newCostumerFlex">
                <hr className="left-line"/>
                <div className="newCostumer">New to Amazon?</div>
                <hr className="right-line"/>
            </div>
            <Link to={`/LogIn`}>
                <CreateAccount className="login-button">Create your Amazon Account</CreateAccount>
            </Link>
        </Wrapper>
    )
};

export default SignIn;
