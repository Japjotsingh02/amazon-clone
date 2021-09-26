import styled from "styled-components";
// import breakpoints from "../../breakpoints";

export const Wrapper=styled.div`
    width:100%;
    background: #EAEDED;
`;

export const Content= styled.div`
    width:100%;
`;

export const Image=styled.img`
    width:100%;
    mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,1),rgba(0,0,0,0));
    z-index:-1;
    margin-bottom:-250px;
    height:576px;

    @media only screen and (max-width:615px){
        margin-bottom:-200px;
        height:400px;
    }
    @media only screen and (max-width:615px){
        margin-bottom:-150px;
        height:300px;
    }
`;

export const ProductList= styled.div`
    display:flex;
    justify-content:space-around;
    padding:0 1%;
`;