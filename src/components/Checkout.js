import React from 'react';
import Header from './Header/Header';
import Payment from './Payment/Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const Checkout = () => {
    const promise = loadStripe(`pk_test_51JgV9bHXPMM3VkBZ6cA7MaxU9ZZfuNqy0ZIFcOcsQmQZmafdTy8vNRG4zMQxPT4nTog4XsGEvexLSwyeOk9V45gV005VHXesP0`);

    return(
        <>
            <Header />
            <Elements stripe={promise}>
                <Payment/>
            </Elements>
        </>
    )
}

export default Checkout;
