import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  :root {
    --maxWidth: 1280px;
    --white: #fff;
    --lightGrey: #eee;
    --medGrey: #353535;
    --darkGrey: #1c1c1c;
    --fontSuperBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
  }

  * {
    box-sizing: border-box;
    font-family:"Amazon Ember",sans-serif;
  }

  html{
    font-size:1.111vw;
  }

  @media only screen and (max-width:1024px){
    html{
      font-size:1.6vw;
    }
  }

  @media only screen and (max-width:768px){
    html{
      font-size:2vw;
    }
  }

  @media only screen and (max-width:615px){
    html{
      font-size:2.3vw;
    }
  }

  @media only screen and (max-width:615px){
    html{
      display:none;
    }
  }

  body {
    margin: 0;
    padding: 0;
    
    h1 {
      font-size: 2rem;
      font-weight: 600;
    }

    a,button{
      cursor:pointer;
      text-decoration:none;
    }

    h3 {
      font-size: 1.1rem;
      font-weight: 600;
    }

    p {
      font-size: 1rem;
      color: var(--white);
    }
  }
`;