import React from 'react';
import { useStateValue } from '../../StateProvider';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined';
import { Container, Content, Gift, Shipping, Title, Wrapper } from './Payment.style';
import { ItemDesc, ItemImage, Item} from '../CartLeft/CartLeft.style';
import { AddButton } from '../Product/Product.style';

const Payment= () => {
    const [{basket},dispatch]=useStateValue();

    return (
        <Wrapper>
            <Container>
                <Title>Checkout ({basket && basket.length} item{basket.length>1 ? "s" : ""})</Title>

                {/* Payment - delivery */}

                <Shipping>
                    <div className="shipping-wrapper">
                        <ShoppingCartOutlinedIcon className="shipping-cart-icon" alt="Shipping Cart Icon"/>
                        <div className="title">Shipping & Payment</div>
                    </div>    
                    <label className="label">Country/ Region</label>
                    <input type="text" className="input" placeholder="Enter Country"/>

                    <label className="label">Full Name</label>
                    <input type="text" className="input"/>

                    <label className="label">Street Address</label>
                    <input type="text" className="input" placeholder="Street Address"/>

                    <label className="label">Zip Code</label>
                    <input type="text" className="input"/>

                    <label className="label">Address type</label>
                    <div className="select">
                        <select name="address-type" className="address-type input" defaultValue="none">
                            <option value="none" disabled hidden>Select an address type</option>
                            <option value="home">Home (7 AM - 9 PM delivery)</option>
                            <option value="office">Office Commercial (10 AM - 6 PM delivery)</option>
                        </select>
                    </div>
                </Shipping>

                {/* Payment - Review items */}

                <Content>
                    <div className="item-wrapper">
                        <RateReviewOutlinedIcon className="shipping-cart-icon" alt="Review Icon"/>
                        <div className="title">Review Items</div>   
                    </div>
                    {basket.map( item =>{
                        const index = basket.indexOf(item);
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
                    
                </Gift>
            </Container>
        </Wrapper>
    );
};

export default Payment
