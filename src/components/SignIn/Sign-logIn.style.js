import styled  from "styled-components";

export const Wrapper = styled.div`
    padding:2%;
    display:flex;
    flex-direction:column;
    align-items:center;
    
    .newCostumerFlex{
        margin-bottom:14px;
        display:flex;
        align-items:center;
        width:30%;

        @media only screen and (max-width:1024px){
            width:40%;
        }

        hr{
            width:32%;
            color:#e7e7e7;

            // @media only screen and (max-width:1024px){
                // width:35%;
            // }
        }
        .newCostumer{
            font-size:12px;
            padding:0 2%;
            width:110px;
            color:#767676;
        }
    }
    a{
        width:100%;
    }
`;


export const LogoImg = styled.img`
    object-fit:contain;
    display: block;
    margin: 0 auto;
    width:131px;
    margin-bottom:18px;
`;

export const Form = styled.div`
    color:#111111;
    border-radius: 4px;
    margin-bottom:22px;
    border: 1px #ddd solid;
    width:30%;
    padding:2%;
    background-color: #fff;
    display:flex;
    flex-direction:column;

    @media only screen and (max-width:1024px){
        width:40%;
    }

    h1{
        margin-top:0;
        font-weight:500;
    }

    .label{
        font-size:0.8rem;
        padding-bottom: 2px;
        line-height:19px;
        font-weight: 700;
    }
    .input{
        height: 31px;
        padding: 3px 7px;
        border: 1px solid #a6a6a6;
        border-top-color: #949494;
        border-radius: 3px;
        box-shadow: 0 1px 0 rgb(255 255 255 / 50%), 0 1px 0 rgb(0 0 0 / 7%) inset;
        margin-bottom:14px;
        outline:0;

        &:focus,:focus-visible{
            border-color: #e77600;
            box-shadow: 0 0 3px 2px rgb(228 121 17 / 50%);
        }
    }
    .privacy{
        margin-top:18px;
        font-size:0.75rem;
    }
    .privacy > span,a > span{
        color:#0066C0;
    }
    .need-help{
        font-size:0.8rem;
        color:#0066C0;
        margin-top: 22px;
    }
    .already{
        margin-top:18px;
        font-size:0.8rem;
        background: linear-gradient(to bottom,rgba(0,0,0,.14),rgba(0,0,0,.03) 3px,transparent);
        padding-top: 28px;

        &:after{
            content:"";
            display:block;
            background: linear-gradient(to bottom,rgba(0,0,0,.14),rgba(0,0,0,.03) 3px,transparent);
        }
    }
`;

export const SubmitButton =styled.button`
    background: #f0c14b;
    background: linear-gradient(to bottom,#f7dfa5,#f0c14b);
    border:1px solid;
    border-color: #a88734 #9c7e31 #846a29;
    box-shadow: 0 1px 0 rgb(255 255 255 / 40%) inset;
    border-radius:3px;
    cursor:pointer;
    font-size:0.8rem;
    line-height: 29px;

    &:focus{
        border-color: #e77600;
        box-shadow: 0 0 3px 2px rgb(228 121 17 / 50%);
    }
`;


export const CreateAccount =styled.button`
    line-height: 29px;
    background: #e7e9ec;
    background: linear-gradient(to bottom,#f7f8fa,#e7e9ec);
    font-size:0.8rem;
    margin:0 auto;
    display:block;
    width:30%;
    border:1px solid;
    border-radius:3px;
    border-color: #adb1b8 #a2a6ac #8d9096;

    @media only screen and (max-width:1024px){
        width:40%;
    }
`;
