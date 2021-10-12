import styled from "styled-components";

export const Wrapper = styled.div`
    background:#eaeaed;
    padding:1.3%;
    width:100%;
    height: calc(100vh - 60px);
    height:100%;
`;

export const Title = styled.div`
    font-size:1.75rem;
    border-bottom:1px solid var(--lightGrey);
    padding-bottom:15px;
    text-align:center;
    font-weight:600;
`;

export const Content = styled.div`
    width:50%;
    margin:0 auto;

    @media only screen and (max-width:768px){
        width:70%
    }
`;



