import React, { useEffect, useState } from 'react';
import { useStateValue } from '../../StateProvider';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined';
import CardGiftcardOutlinedIcon from '@material-ui/icons/CardGiftcardOutlined';
import { Container, Content, Gift, Shipping, Title, Wrapper } from './Payment.style';
import { ItemDesc, ItemImage, Item} from '../CartLeft/CartLeft.style';
import { AddButton } from '../Product/Product.style';
import { useElements, useStripe , CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../../reducer';
import Subtotal from '../Subtotal/Subtotal';
import axios from '../../axios';
import { useHistory } from 'react-router';
import { db } from '../../firebase';
import { doc, setDoc } from '@firebase/firestore';

const Payment= () => {
    const [{basket,OrderChecked,user},dispatch]=useStateValue();

    const history = useHistory();
    const stripe = useStripe();
    const elements = useElements();

    const [processing,setProcessing] = useState(false);
    const [country,setCountry] = useState("");
    const [name,setName] = useState("");
    const [address, setAddress] = useState("");
    const [zip, setZip] = useState("");
    const [type, setType] = useState("");
    const [disabled,setDisabled] = useState(true);
    const [succeeded,setSucceeded] = useState(false);
    const [error,setError] = useState("");
    // const [formValid, setformValid] = useState(false);
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method:"post",
                url:`/payments/create?total=${getBasketTotal(basket) * 100}`,
            })
            setClientSecret(response.data.clientSecret);
        };

        getClientSecret();
    }, [basket]);

    // console.log('The SECRET IS >>>>',clientSecret);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card:elements.getElement(CardElement),
            }
        })
        .then( async ({paymentIntent}) => {
            // payment Content = payment Confirmation

            // db
                // .collection("users")
                // .doc(user && user.uid)
                // .collection("orders")
                // .doc(paymentIntent.id)
                // .set({
                    // basket : basket,
                    // amount: paymentIntent.amount,
                    // created: paymentIntent.created,
                // })


            await setDoc(doc(db, "users", user && user.uid, "orders", paymentIntent.id), {
                basket : basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created,
                gift: OrderChecked,
                name:name,
                address:address,
                country : country,
                zip: zip,
                type: type,
            });    

            dispatch({
                type:"EMPTY_BASKET",
            });

            setProcessing(false);
            setError(false);
            setSucceeded(true);

            history.replace(`/orders`);

        })
        .catch(error => console.log(error));
    };

    const handleChange = (e) => {
        // Listen for changes and display the errors if any 
        // console.log(e.empty);

        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    };

    return (
        <Wrapper>
            <Container>
                <Title>Checkout ({basket && basket.length} item{basket.length>1 ? "s" : ""})</Title>

                {/* Payment - delivery */}

                <Shipping>
                    <form onSubmit={(e) => handleSubmit(e)}  className="form">
                        <div className="shipping-wrapper">
                            <ShoppingCartOutlinedIcon className="shipping-cart-icon" alt="Shipping Cart Icon"/>
                            <div className="title">Shipping & Payment</div>
                        </div>        
                        <label className="label">Country/ Region</label>
                        <input type="text" className="input" placeholder="Enter Country" name="country" required value={country} onChange={(e) => setCountry(e.target.value)}/>

                        <label className="label">Full Name</label>
                        <input type="text" className="input" value={name} name="name" required onChange={(e) => setName(e.target.value)}/>

                        <label className="label">Street Address</label>
                        <input type="text" className="input" placeholder="Street Address" required name="address" value={address} onChange={(e) => setAddress(e.target.value)}/>

                        <label className="label" >Zip Code</label>
                        <input type="text" className="input" value={zip} name="zip" required onChange={(e) => setZip(e.target.value)}/>

                        <label className="label">Address type</label>
                        <div className="select">
                            <select name="type" className="address-type input" defaultValue="none" onChange={(e) => setType(e.target.value)} required>
                                <option value="none" disabled hidden>Select an address type</option>
                                <option value="home">Home (7 AM - 9 PM delivery)</option>
                                <option value="office">Office Commercial (10 AM - 6 PM delivery)</option>
                            </select>
                        </div>

                    {/* Payment - Payment */}

                        <div className="label">Card Details</div>

                        <CardElement onChange={(e) => handleChange(e)} className="card-details"/>
                        <div className="total-card">
                            <Subtotal />
                            <button disabled={ processing || disabled || succeeded } className="card-button" type="submit">
                                <span>{processing ? <p>Processing</p> : " Buy Now" }</span>
                            </button>
                        </div>    
                        <div>{error ? error.message : ""}</div>
                    </form>
                </Shipping>

                {/* Payment - Review items */}

                <Content>
                    <div className="item-wrapper">
                        <RateReviewOutlinedIcon className="shipping-cart-icon" alt="Review Icon"/>
                        <div className="title">Review Items</div>   
                    </div>
                    {basket.map( item =>{
                        const index = basket && basket.indexOf(item);
                        const removeFromBasket= () =>{
                            dispatch({
                                type:"REMOVE_FROM_BASKET",
                                id:item.id,
                            })    
                        }  
                        
                        return(    
                            <Item key={index} className="item">
                                <ItemImage alt="Item-Image" src={item.url} className="item-image"></ItemImage>
                                <ItemDesc className="item-desc">
                                    <div className="ItemName">{item.desc}</div>
                                    <div className="price">$ {item.price}</div>
                                    <AddButton onClick={removeFromBasket}>Remove From Basket</AddButton>
                                </ItemDesc>
                            </Item>   
                        )
                    })}
                </Content>

                {/* Payment - Gift */}

                <Gift>
                    <div className="item-wrapper">
                        <CardGiftcardOutlinedIcon className="shipping-cart-icon" alt="Review Icon"/>
                        <div className="title">Gift Options</div>   
                    </div>
                    { OrderChecked ? 
                    <div className="gift-text">This order has a gift.</div>
                    :<div className="gift-text">No gifts attached</div>
                    }
                </Gift>
            </Container>
        </Wrapper>
    );
};

export default Payment
