import styled from "styled-components";

export const Wrapper = styled.div`
    width:100%;
    height:60px;
    background-color:#131921;
    position:sticky;
    top:0;
    z-index:99999;

`

export const Content = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    height:100%;
    gap:1.5%;

    @media only screen and (max-width:1024px){
        gap:0;
    }
`;

export const LogoImg = styled.img`
    object-fit:contain;
    padding:7px;
    border:1px solid #131921;
    margin:4px 0px 0px 5px;
    height:3.2rem;
    &:hover{
        border:1px solid #ffffff;
        padding:7px;
        border-radius:2px;
    }
`;

export const SearchBar = styled.div`
    display:flex;
    align-items:center;
    height:40px;
    gap:0;
    position:relative;
    flex:1 1 0px;
    outline:0;

    @media only screen and (max-width:1024px){
        flex:0.9 1 0px;
    }

    &:focus,:focus-visible{
        border: 1px solid #e77600;
        box-shadow: 0 0 3px 2px rgb(228 121 17 / 50%);
        box-shadow: 0 0 0 2px #f90, 0 0 0 3px rgb(255 153 0 / 50%);
    }

    input{
        // width:50vw;
        height:100%;
        border-radius:4px;
        border:0;
        flex:1 1 0px;
        outline:0;

        &:focus,:focus-visible{
            border: 1px solid #e77600;
            box-shadow: 0 0 3px 2px rgb(228 121 17 / 50%);
            box-shadow: 0 0 0 2px #f90, 0 0 0 3px rgb(255 153 0 / 50%);
            border-radius:4px;
        }
    }

    .search-icon{
        background:#febd69;
        width:45px;
        height:100%;
        padding:5px;
        border-bottom-right-radius:4px;
        border-top-right-radius:4px;
        margin-left:-3px;
        position:absolute;
        right:0;
    }
`;

export const NavBar = styled.div`
    display:flex;
    color:#ffffff;
    font-size:0.85rem;
    justify-content:space-evenly;
    align-items:center;
    font-weight:700;

    a{
        text-decoration:none;
        color:#ffffff;
    }

    .nav-flex{
        padding:7px 5px;
        border:1px solid #131921;
        cursor:pointer;
        
        &:hover{
            border:1px solid #ffffff;
            padding:7px 5px;
            border-radius:2px;
        }
    }

    .top-nav{
        color:#cccccc;
        font-size:0.75rem;
        font-weight:600;
    }
    .cart{
        color:var(--white);
        display:flex;
        align-items:center;
        position:relative;
        padding:4px 9px;
        font-size:1rem;
        border:1px solid #131921;

        &:hover{
            border:1px solid #ffffff;
            padding:4px 9px;
            border-radius:2px;
        }

        // @media only screen and (max-width:1024px){
            // font-size:1.42rem;
        // }

    }
    .shopping-cart-image{
        color:var(--white);
        z-index:9999;
        font-size:2.5rem;
        height:40px

        // @media only screen and (max-width:1024px){
            // font-size: 3.5rem;
        // }
    }
    .cart-text{
        align-self:flex-end;
    }
    .no-of-products{
        position:absolute;
        bottom:54%;
        left:24.5%;
        padding:0px 2.4px;
        border-radius:50%;
        background-color:#131921;
        z-index:99999;
        color:#f08804;
    }
`;

