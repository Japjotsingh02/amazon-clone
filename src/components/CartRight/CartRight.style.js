import styled from "styled-components";

export const Wrapper=styled.div`
`;

export const GuaranteeImage=styled.img`
    margin-bottom:15px;
`;

export const BuyCard=styled.div`
    background-color:#ffffff;
    padding:20px 20px 30px 20px;

    .Elligible-order{
        display:flex;
        justify-content:center;
        gap:10px;
        margin-bottom:15px;
    }

    .tick-image{
        color:#067D62;
    }

    .elligible-desc{
        font-size:0.75rem;
    }

    .elligible{
        color:#067D62;
    }

    .total{
        font-size:18px;
        margin-bottom:2px;

    }
    .price{
        font-size:1.15rem;
        font-weight: 600;
    }
    .form{
        font-size:0.9rem;
        display:flex;
        align-items:center;
    }
    .buyButton{
        background: #FFD814;
        border: 1px solid #FCD200;
        padding:6px 1px;
        box-shadow: 0 2px 5px 0 rgb(213 217 217 / 50%);
        display:block;
        border-radius:8px;
        box-shadow:none;
        margin:0 auto;
        width:100%;
        margin-top:15px;
    }
`;