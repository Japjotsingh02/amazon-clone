import React from 'react'
import { useStateValue } from '../../StateProvider';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../../reducer';

const Subtotal = () => {
    const [{basket},dispatch]=useStateValue();

    return (
        <div className="total">
            <CurrencyFormat renderText={(value) => (
                <>
                    <div>
                        SubTotal ({basket && basket.length} item{basket.length>1 ? "s" : ""}): 
                        <span className="price">
                            {value}                  
                        </span>
                    </div>
                </>
            )}
            thousandSeparator={true}
            prefix=" $"
            displayType={'text'}
            value={getBasketTotal(basket)}
            decimalScale={2}
            fixedDecimalScale={true}
            />
        </div>
    )
}

export default Subtotal;
