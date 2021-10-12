import styled from "styled-components";

export const Wrapper = styled.div`
    background-color:#ffffff;
    padding:2%;
    margin-bottom:2%;

    .order-flex{
        display:flex;
        justify-content:space-between;
    }

    .left-bar{
        margin-left:5%;
    }

    .addressTitle{
        margin-bottom:0;
    }

    .address{
        text-transform:capitalize;
    }

    .orderCreated,.orderTitle,.order_id,.address{
        color:#000000;
        margin:0.5%;
        width:max-content;
    }
    .item-desc{
        color:#000000;
    }
    .orderTotal,.gift-text{
        text-align:right;
    }

    .orderTotal{
        margin-top:1%;
        font-size:1.3rem;
    }
`;

