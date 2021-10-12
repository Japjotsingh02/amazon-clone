import styled from "styled-components";

export const Wrapper= styled.div`
    width:100%;
    background-color: #f7f7f7;
`;

export const Container= styled.div`
    padding:1.7% 2%;
    margin:0px 120px;

    .title{
        margin-top:15px;
        padding-bottom:15px;
        font-size:1.5rem;
        font-weight:400;
        color: #F79C34;
        margin-left: 0.2rem;
    }

    .shipping-wrapper,.item-wrapper{
        display:flex;
        align-items:center;
        margin-bottom:10px;
    }
`;


export const Title= styled.div`
    font-size:2rem;
    text-align:center;
    font-weight:700;
    border-bottom:1px solid var(--lightGrey);
    padding-bottom:15px;
`;

export const Content=styled.div`
    .item{
        width:50%;

        @media only screen and (max-width:1024px){
            width:70%
        }

        @media only screen and (max-width:768px){
            width:100%
        }
    }

    .item-image{
        width:90px;
    }

    .item-desc{
        div{
            margin-bottom:10px;
        }
    }
`;

export const Gift=styled.div`
    .gift-text{

    }
`;

export const Shipping=styled.div`
    display:flex;
    flex-direction:column;
    width:50%;
    margin-bottom:15px;

    .form{
        display:flex;
        flex-direction:column;
    }

    .total-card{
        text-align:center;
        padding:2% 5%;
        border:1px solid var(--lightGrey);
        margin-top:1%;
    }

    .shipping-cart-icon{
        height:36px;
    }

    .label{
        font-size:1.1em;
        margin-bottom:4px;
        font-family: Arial,sans-serif;
        font-weight:600;
    }

    .input{
        border-radius: .2rem;
        font-family: Arial,sans-serif;
        margin-bottom:14px;
        font-size: 1em;
        border: .1rem solid #d0d0d0;
        border-top-color: #bbb;
        box-shadow: 0 1px 0 rgb(255 255 255 / 50%), 0 1px 0 rgb(0 0 0 / 7%) inset;
        height: 2.5rem;
        padding: 0 0.7rem;
        outline:0;
    }

    .input:focus ,.input:focus-visible{
        border: 1px solid #e77600;
        // box-shadow: 0 0 3px 2px rgb(228 121 17 / 50%);
        box-shadow: 0 0 0 2px #f90, 0 0 0 3px rgb(255 153 0 / 50%);
        border-radius: 4px;
    }

    .select{
        border-color: #D5D9D9;
        border-radius: .4rem;
        color: #0F1111;
        background: #F0F2F2;
        margin-bottom:40px;
        box-shadow: 0 0.2rem 0.5rem 0 rgb(213 217 217 / 50%);
    }

    .address-type{
        border-color: #D5D9D9;
        border-radius: .3rem;
        width:100%;
        height: 3rem;
        margin:0;
        color: #0F1111;
        background: #F0F2F2;
        box-shadow: 0 0.2rem 0.5rem 0 rgb(213 217 217 / 50%);
    }

    .card-button, .card-details{
        margin-bottom:10px;
    }
    .card-button{
        margin-top:10px;
        background: #FFD814;
        border: 1px solid #FCD200;
        padding:6px 1px;
        box-shadow: 0 2px 5px 0 rgb(213 217 217 / 50%);
        border-radius:8px;
        width:100%;
        box-shadow:none;
        color:#000000;
    }
    .total{
        font-size:1.3rem;
    }

    @media only screen and (max-width:1024px){
        width:70%;
    }

    @media only screen and (max-width:768px){
        width:100%
    }

`;

