import React from 'react'

const CheckoutProject = (item) => {
    return (
        <Item key={index} className="item">
        <ItemImage alt="Item-Image" src={item.url} className="item-image"></ItemImage>
    <ItemDesc className="item-desc">
        <div className="ItemName">{item.desc}</div>
        <div className="price">$ {item.price}</div>
        <AddButton onClick={removeFromBasket}>Remove From Basket</AddButton>
    </ItemDesc>
</Item>   
    )
}

export default CheckoutProject
