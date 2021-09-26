import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Link } from 'react-router-dom';

// Components
import { SearchBar, Wrapper, Content, NavBar, LogoImg  } from './Header.style';
import { useStateValue } from '../../StateProvider';
import { auth } from '../../firebase';

const Header=() =>{
    const [{basket,user},dispatch]=useStateValue();

    const Currentuser = auth.currentUser;
    console.log(Currentuser);

    if(user !==null){
        const displayName=user.displayName;
        console.log(displayName);
    }

    const handleAuthentication = () => {
        if (user){
            // const name = user.getDisplayName();
            // console.log(name);
            auth.signOut();
        }
    }

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
                    <Link to={`/SignIn`}>
                        <div className="nav-flex" onClick={handleAuthentication}>
                            <div className="top-nav">Hello {user ? "Sign out" : "Sign In"}</div>
                            <div>Accounts & Lists</div>
                        </div>
                    </Link>
                    <div className="nav-flex">
                        <div className="top-nav">Returns</div>
                        <div>& orders</div>
                    </div>
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
            </Content>
        </Wrapper>
    )
};

export default Header;

