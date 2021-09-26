import React, { useState } from 'react'
import { Wrapper, GuaranteeImage,BuyCard } from './CartRight.style'
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import { useStateValue } from '../../StateProvider';
import Subtotal from '../Subtotal/Subtotal';


const CartRight = () => {
    const [{OrderChecked},dispatch] =useStateValue();

    // console.log(OrderChecked);
    
    const changeChecked= () =>{
        dispatch({
            type:"ORDER_CHECKED",
            Checked:!OrderChecked,
            })
    }
            
    // const [checked , setChecked] = useState(false);
    // console.log(checked);

    // const changeChecked = () =>{
        // setChecked(!checked);
    // }

    return (
        <>
            <Wrapper>
                <GuaranteeImage src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png" alt="Guarantee"/>
                <BuyCard>
                    <div className="Elligible-order">
                        <CheckCircleRoundedIcon className="tick-image"/>
                        <div className="elligible-desc">
                            <div className="elligible">Your order is elligible for FREE Delivery.</div>
                            <div className="checkout">Select this options at checkout.<span className="details">Details</span></div>
                        </div>
                    </div>
                    <Subtotal /> 
                    {/* <div className="total">SubTotal ({basket && basket.length} item{basket.length>1 ? "s" : ""}): <span className="price">$ 455.00</span></div> */}
                    <form className="form">
                        <input type="checkbox" name="gift" onChange={changeChecked}></input>
                        <label htmlFor="gift">This order contains a gift.</label>
                    </form>
                    <button className="buyButton">Proceed to Buy</button>
                </BuyCard>
            </Wrapper>
        </>
    )
}

export default CartRight;

