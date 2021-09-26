import { onAuthStateChanged } from "@firebase/auth";
import React, { useEffect } from "react";
import { BrowserRouter as Router,Switch,Route  } from 'react-router-dom';
import Home from "./components/Home";
import LogIn from "./components/LogIn/LogIn";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import SignIn from "./components/SignIn/SignIn";
import { auth } from "./firebase";
import { GlobalStyle } from "./GlobalStyle";
import { useStateValue } from "./StateProvider";

const App=() => {
  
  const [{},dispatch]=useStateValue();

  useEffect(() => {
    onAuthStateChanged(auth,(authuser) =>{
      // console.log('THE USER IS >>>',authuser);
      if(authuser){
          // user just logged in
          dispatch({
            type:'SET_USER',
            user:authuser,
          })
      }
      else {
          // user is logged out
          dispatch({
            type:'SET_USER',
            user:null,
          })
      }

    });
  }, [])

  return (
    <Router>
      <Switch>
        <Route path="/Shopping" component={ShoppingCart}/>
        <Route path="/LogIn" component={LogIn}/>
        <Route path="/SignIn" component={SignIn}/>
        <Route path="/" component={Home}/>
      </Switch>
      <GlobalStyle />
    </Router>  
  );
}

export default App;
