import React from 'react'
import { useStateValue } from '../../StateProvider';
import { Link } from 'react-router-dom';
import CartLeft from '../CartLeft/CartLeft';
import CartRight from '../CartRight/CartRight';

import Header from '../Header/Header';
import { Cart, EmptyCart, EmptyImage } from './ShoppingCart.style';

const ShoppingCart=() =>{
    const [{basket},dispatch] = useStateValue();

    return (
        <>
            <Header/>
            {basket.length===0 ? 
                <EmptyCart>
                    <EmptyImage src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg" alt="empty-basket"/>
                    <div className="empty">Your Amazon Basket is empty</div>
                    <Link to={`/`}>
                        <div className="shop">Shop on Amazon Home Screen</div>
                    </Link>
                </EmptyCart> 
                : 
                <Cart>
                    <CartLeft/>       
                    <CartRight />
                </Cart>
            }
        </>
    );
}

export default ShoppingCart;
