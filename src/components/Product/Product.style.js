import styled from "styled-components";

export const Wrapper = styled.div`
    background-color:#ffffff;
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    z-index:999;
    margin:1%;
    padding:1%;
    max-height:450px;
`;

export const ProductInfo = styled.div`
    margin-bottom:1rem;
    font-size:1rem;

    .product-price{
        margin-top:5px;
        font-weight:700;
    }
    .product-rating{
        .rating-icon{
            color:#FFA41C;
        }
    }
`;

export const Image = styled.img`
    align-self:center;
    height:13rem;
    margin-bottom:1rem;
`;

export const AddButton = styled.button`
    align-self:center;
    background: #FFA41C;
    border:1px solid #FF8F00;
    font-size:1rem;
    padding:2px 10px;

    :focus{
        background: #FFF;
        border-color: #FFA41C;
        box-shadow: 0 0.2rem 0.5rem 0 rgb(213 217 217 / 50%);
    }
`;