import React from 'react';

import { Wrapper, ProductInfo,Image,AddButton } from './Product.style';

import StarTwoToneIcon from '@material-ui/icons/StarTwoTone';
import { useStateValue } from '../../StateProvider';

const Product = ({id,desc,price,rating,Imagesrc}) => {

    const [{basket},dispatch]=useStateValue();
    
    const addToBasket = () => {
        // dispatch item into data layer
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id:id,
                desc:desc,
                price:price,
                rating:rating,
                url:Imagesrc,
            },
        });
    };


    return (
        <Wrapper>
            <ProductInfo>
                <div className="product-description">{desc}</div>
                <div className="product-price">${price}</div>
                <div className="product-rating">
                    {Array(rating)
                        .fill()
                        .map((_,i) => (
                            <StarTwoToneIcon className="rating-icon" key={i}/>
                    ))}
                </div>
            </ProductInfo>
            <Image src={Imagesrc } alt="Product Image"/>
            <AddButton onClick={addToBasket}>Add to Basket</AddButton>
        </Wrapper>
    )
}

export default Product;
