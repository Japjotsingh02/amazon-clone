import React, { useEffect, useState } from 'react'
import { useStateValue } from '../../StateProvider';
import Subtotal from '../Subtotal/Subtotal';
import { Content, Wrapper, Title,Item,ItemImage,ItemDesc } from './CartLeft.style'

const CartLeft=() => {
    const [{basket,OrderChecked},dispatch]=useStateValue();
    console.log(OrderChecked);
    const [checked,setChecked]=useState(false);
    console.log(checked);
    
    useEffect(() => {
        OrderChecked ? setChecked(true) : setChecked(false);
        // return () => {
            // cleanup
        // }
    }, [OrderChecked]);

    return (
        <>
            <Wrapper>
                <Title>Shopping Cart</Title>
                <Content>
                {basket.map( item =>{
                    const index = basket.indexOf(item);
                    const removeFromBasket= () =>{
                        dispatch({
                            type:"REMOVE_FROM_BASKET",
                            id:item.id,
                        })    
                    }  
                    const changeItemChecked= () =>{
                        dispatch({ 
                            type:"ITEM_CHECKED",
                        });
                    }
                    return(    
                    <Item key={index}>
                        <ItemImage alt="Item-Image" src={item.url}></ItemImage>
                        <ItemDesc>
                            <div className="ItemName">{item.desc}</div>
                            <div className="price">$ {item.price}</div>
                            <div className="available">In stock</div>
                            <div className="shipping">Elligible for Free Shipping</div>
                            <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png" alt="Fulfilled"/>
                            <form className="form">
                                <input type="checkbox" name="gift" className="gift" checked={checked} onChange={() => changeItemChecked}></input>
                                <label htmlFor="gift">This will be a gift.</label>
                            </form>
                            <div className="item-extra-info">
                                <div className="dropdown-container">
                                    <select name="quantity" className="quantity" defaultValue="none">
                                        <option value="none" disabled hidden>Qty: 1</option>
                                        <option value="one">1</option>
                                        <option value="two">2</option>
                                        <option value="three">3</option>
                                        <option value="four">4</option>
                                        <option value="five">5</option>
                                        <option value="six">6</option>
                                        <option value="seven">7</option>
                                        <option value="eight">8</option>
                                        <option value="nine">9</option>
                                        <option value="ten">10</option>
                                    </select>
                                </div>
                                <div className="delete" onClick={removeFromBasket}>Delete</div>
                            </div>
                        </ItemDesc>
                    </Item>  
                    )
                })}
                    
                    <Subtotal /> 
                    {/* <div className="total">SubTotal ({basket && basket.length} item{basket.length>1 ? "s" : ""}): <span className="price">$ {}</span></div> */}
                </Content>
            </Wrapper>

        </>
    )
}

export default CartLeft;
