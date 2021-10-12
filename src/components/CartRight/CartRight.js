import React, { useState } from 'react'
import { Wrapper, GuaranteeImage,BuyCard } from './CartRight.style'
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import { useStateValue } from '../../StateProvider';
import Subtotal from '../Subtotal/Subtotal';
import { useHistory } from 'react-router';

const CartRight = () => {
    const history = useHistory()
    const [{OrderChecked},dispatch] =useStateValue();
    
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
                    <Subtotal/> 
                    <form className="form">
                        <input type="checkbox" name="gift" onChange={changeChecked} checked={OrderChecked}></input>
                        <label htmlFor="gift">This order contains a gift.</label>
                    </form>
                    <button className="buyButton" onClick={e => history.push('/Payment')}>Proceed to Buy</button>
                </BuyCard>
            </Wrapper>
        </>
    )
}

export default CartRight;

