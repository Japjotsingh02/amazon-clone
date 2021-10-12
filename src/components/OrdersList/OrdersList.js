import { collection, doc, onSnapshot, orderBy, query } from '@firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase';
import { useStateValue } from '../../StateProvider';
import Order from '../Order/Order';
import { Content, Title, Wrapper } from './OrdersList.style';

const OrdersList = () => {
    const [orders, setOrders] = useState([]);
    const [{user},dispatch]=useStateValue();

    useEffect(() => {
        if(user){
            try{
                const q = query(collection(db, "users", user && user.uid, "orders"), orderBy("created", "desc"));
                const orderData = onSnapshot(q, (querySnapshot) => {
                    setOrders( querySnapshot.docs.map((doc) => ({
                        id:doc.id,
                        data:doc.data(),
                    })));
                // console.log("Current Orders:", orders);
                });
            }
            catch(error) {
                console.log(error);
            }
        }
        else{
            setOrders([]);
        }

        // onSnapshot(doc(db, "users",user && user.uid, "orders"), (doc) => {
            // console.log("Current data: ", doc.data());

        // });
    }, [user]);

    return (
        <Wrapper>
            <Title>Your Orders</Title>
            <Content>
                {orders?.map((order) => {
                    const index = orders?.indexOf(order);
                    return <Order order={order} key={index}/>;
                })} 
            </Content>
        </Wrapper>
    )
};

export default OrdersList;
