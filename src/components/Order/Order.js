import React from 'react';
import moment from "moment";
import { ItemDesc, ItemImage, Item} from '../CartLeft/CartLeft.style';
import { Wrapper } from './Order.style';
import CurrencyFormat from 'react-currency-format';

const Order = ({order}) => {
    console.log(moment.unix(order.data && order.data.created).format('MMMM Do YYYY, h:mm:ss a'));
    return (
        <Wrapper>
            <div className="order-flex">
                <div className="left-bar">
                    <h2 className="orderTitle">Order</h2>
                    <p className="orderCreated">{moment.unix(order.data && order.data.created).format('MMMM Do YYYY, h:mm:ss a')}</p>
                    <h3 className="addressTitle">Address</h3>
                    <p className="address">{order.data.type="" ? "home" : order.data.type} : {order.data.address},{order.data.country}</p>
                </div>

                <div className="right-bar">
                    <p className="order_id">    
                        <small className="orderId">{order.id}</small>
                    </p>
                </div>
            </div>    
            {order.data && order.data.basket?.map( item =>{
                const index = order.data.basket ?.indexOf(item);

                return(
                    <Item key={index} className="item">
                        <ItemImage alt="Item-Image" src={item.url} className="item-image"></ItemImage>
                        <ItemDesc className="item-desc">
                            <div className="ItemName">{item.desc}</div>
                            <div className="price">$ {item.price}</div>
                        </ItemDesc>
                    </Item>   
                )
            })}
            {order.data && order.data.gift ? 
                <div className="gift-text">This order has a gift.</div>
                :<div className="gift-text">No gifts attached</div>
            }
            <CurrencyFormat renderText={(value) => (
                <>
                    <div className="orderTotal">
                        Order Total ({order.data.length} item{order.data.length>1 ? "s" : ""}): 
                        <span className="price">
                            {value}                  
                        </span>
                    </div>
                </>
            )}
            thousandSeparator={true}
            prefix=" $"
            displayType={'text'}
            value={order.data.amount / 100}
            decimalScale={2}
            fixedDecimalScale={true}
            />
        </Wrapper>
    )
}

export default Order;
