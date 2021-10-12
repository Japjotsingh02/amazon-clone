import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Link } from 'react-router-dom';

// Components
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { SearchBar, Wrapper, Content, NavBar, LogoImg, SignOutButton  } from './Header.style';
import { useStateValue } from '../../StateProvider';
import { auth } from '../../firebase';

const Header=() =>{
    const [{basket,user},dispatch]=useStateValue();
    const [signOut, setSignOut] = useState(false);

    const Currentuser = auth.currentUser;

    if(user !==null){
        const displayName=user.displayName;
    }

    const handleAuthentication = () => {
        if (user){
            // const name = user.getDisplayName();
            // console.log(name);
            auth.signOut();
        }
    }

    const signOutEnter = () =>{
        if(user){
            setSignOut(true);
        }
    }

    const signOutPopup = () =>{
        if(user){
            setSignOut(false);
        }
    }

    // console.log(signOut);

    return (
        <Wrapper>
            <Content>
                <Link to={`/`}>
                    <LogoImg src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon-Logo"/> 
                </Link>
                <SearchBar>
                    <input type="text"/>
                    <SearchIcon className="search-icon"/>
                </SearchBar>
                <NavBar>
                    {/* <ArrowDropUpIcon className="triangle-image"/> */}
                    <Link to={`/SignIn`}>
                        <div className="nav-flex" onMouseLeave={signOutPopup} onMouseEnter={signOutEnter}>
                            <div className="top-nav">Hello {user ? user.displayName : "Sign In"}</div>
                            <div>Accounts & Lists</div>
                            {signOut ? 
                                <div className="sign-out-popup" onClick={handleAuthentication}>
                                    <ArrowDropUpIcon alt="triangle" className="triangle-image"/>
                                    {/* <img src="http://127.0.0.1:5500/images/product-tour/triangle.svg" /> */}
                                    <SignOutButton>Sign-out</SignOutButton>
                                </div>
                            : ""}
                        </div>
                    </Link>
                    <Link to={`/orders`}>   
                        <div className="nav-flex">
                            <div className="top-nav">Returns</div>
                            <div>& orders</div>
                        </div>
                    </Link>
                    <div className="nav-flex">
                        <div className="top-nav">Your</div>
                        <div>Prime</div>
                    </div>
                    <Link to={`/Shopping`}>      
                    <div className="cart">
                        <AddShoppingCartIcon className="shopping-cart-image"/>
                        <span className="no-of-products">{basket && basket.length}</span>
                        <span  className="cart-text">Cart</span>
                    </div>
                    </Link>    
                </NavBar>
                {signOut ? <div className="sign-out-container"></div> : "" }
            </Content>
        </Wrapper>
    )
};

export default Header;

