import styled from "styled-components";

export const Wrapper= styled.div`
    background:#ffffff;
    padding:1.3%;
    width:100%;
`

export const Title= styled.div`
    font-size:1.75rem;
    border-bottom:1px solid var(--lightGrey);
    padding-bottom:15px;
`

export const Content= styled.div`
    margin:20px 0px;

    .total{
        font-size:18px;
        text-align:right;
    }

    .price{
        font-size:1.13rem;
        font-weight: 600;
    }
`

export const Item= styled.div`
    display:flex;
    gap:5%;
    margin:15px 0px;
    border:1px solid var(--lightGrey);
    padding:1%;
`

export const ItemImage= styled.img`
    width:130px;
    margin-left:5%;
    object-fit:contain;

    @media only screen and (max-width:704px){
        width:100px;
    }
`

export const ItemDesc= styled.div`
    line-height:1.3rem;
    width:100%;

    div{
        margin-bottom:2px;
        font-weight: 500;
        font-size:1rem;
    }

    .ItemName{
        font-size:1.15rem;
        margin-bottom:8px;
    }

    .item-extra-info{
        display:flex;
        align-items:center;
        margin-top:4px;
    }

    .dropdown-container{
        background: #F0F2F2;
        box-shadow: 0 2px 5px rgb(15 17 17 / 15%);
        border-color:#D5d5d9;
        border-radius:8px;
        margin-right:1rem;
    }

    .shipping{
        font-size:0.75rem;
        color:#565959;
    }

    .available{
        color:#007600;
        font-size:0.75rem;
    }

    .quantity{
        border-radius:7px;
        border-color:#D5d5d9;
        background: #F0F2F2;
        color: #0F1111;
        box-shadow: 0 2px 5px 0 rgb(213 217 217 / 50%);
        padding:6px;
        font-size:1rem;
        cursor:pointer;
        text-align:center;
    }

    .delete{
        margin:0;
        padding-left:15px;
        color: #007185;
        border-left: 1px solid;
        cursor:pointer;
    }

    .form{
        font-size:0.75rem;
        display:flex;
        align-items:center;
    }

`
