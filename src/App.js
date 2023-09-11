import { onAuthStateChanged } from "@firebase/auth";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router,Switch,Route  } from 'react-router-dom';
import Checkout from "./components/Checkout";
import Home from "./components/Home";
import Orders from "./components/Orders";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import SignIn from "./components/SignIn/SignIn";
import { auth } from "./firebase";
import { GlobalStyle } from "./GlobalStyle";
import Mobile from "./components/MobileComponent/Mobile";
import { useStateValue } from "./StateProvider";
import SignUp from "./components/SignUp/SignUp";

const App=() => {
  
  const [{},dispatch]=useStateValue();

  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth <= 616 ){
        setMobile(true);
      }
      else{
        setMobile(false);
      }
    }
    window.addEventListener('resize', handleResize);

    return _ => {
      window.removeEventListener('resize', handleResize);
    }
  })

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
  }, [dispatch])

  return (
    <Router>
        {mobile 
        ? <Mobile/> 
        :
          <Switch>
            <Route path="/orders" component={Orders}/>
            <Route path="/Payment" component={Checkout}/>
            <Route path="/Shopping" component={ShoppingCart}/>
            <Route path="/SignUp" component={SignUp}/>
            <Route path="/SignIn" component={SignIn}/>
            <Route path="/" component={Home}/>
          </Switch>
        }
      <GlobalStyle />
    </Router>  
  );
}

export default App;
