import React from 'react';

import Product from '../Product/Product';
import { ProductList, Wrapper } from './HomeContent.style';
import { Content } from './HomeContent.style';
import { Image } from './HomeContent.style';

const HomeContent = () => {
    return (
        <Wrapper>
            <Content>
                <Image src="https://m.media-amazon.com/images/I/717vGSkvcmL._SX3000_.jpg" alt="Home Content Image"/>

                <ProductList>
                    <Product desc="Crazy Faith: It's Only Crazy Until It Happense" id="6789469" price={16.00} rating ={3} Imagesrc="https://m.media-amazon.com/images/I/51oYKAvqTbS._AC_SY780_.jpg"/>
                    <Product desc="AmazonBasics Mid Back Office Chair (Black)" id="65789790" price={75.08} rating ={4} Imagesrc="https://m.media-amazon.com/images/I/411H11DTHfL._AC_SY580_FMwebp_.jpg"/>
                </ProductList>

                <ProductList>
                    <Product id="7688750" desc="V-Guard iMagno 410 Inverter AC Stabilizer for up to 1.5 ton (Working Range: 170-270 V AC) (Digital Display) (White)" price={69.99} rating ={4} Imagesrc="https://images-eu.ssl-images-amazon.com/images/I/41mg2MIHgBL._AC_UL480_SR480,480_.jpg"/>
                    <Product id="4355778" desc='(Renewed) realme Watch S with 1.3" TFT-LCD Touchscreen, 15 Days Battery Life, SpO2 & Heart Rate Monitoring, IP68 Water Resistance' price={15.99} rating ={4} Imagesrc="https://m.media-amazon.com/images/I/41VYHWF7ZZS._AC_SY580_FMwebp_.jpg"/>
                    <Product id="7667890" desc="LG 8.0 Kg 5 Star Inverter Fully-Automatic Front Loading Washing Machine (FHM1208ZDL, Luxury Silver, Direct Drive Technology)" price={314.98} rating ={3} Imagesrc="https://m.media-amazon.com/images/I/41UFocAjfVL._AC_SY1000_FMwebp_.jpg"/>

                </ProductList>

                <ProductList>
                    <Product id="67283199" desc="LG 1.5 Ton 5 Star Inverter Split AC (Copper, Convertible 5-in-1 Cooling, HD Filter with Anti-Virus protection , 2021 Model, MS-Q18YNZA, White)" price={297.49} rating ={4} Imagesrc="https://m.media-amazon.com/images/I/21s9ftWDudL._AC_SY1000_FMwebp_.jpg"/>
                </ProductList>

                <ProductList>
                    <Product id="3245678" desc="GecciNice Mens ankle socks, men low cut breathable comfort short socks, 6 pairs pack" price={11.99} rating ={3} Imagesrc="https://m.media-amazon.com/images/I/91YAk4Xo4wL._AC_UY1000_.jpg"/>
                    <Product id="08954478" desc="The Lean Startup: How Constant Innovation Creates Radically Successful Businesse" price={11.96} rating ={3} Imagesrc="https://images-na.ssl-images-amazon.com/images/I/51aEhyjQGrL._SX316_BO1,204,203,200_.jpg"/>
                </ProductList>

            </Content>
        </Wrapper>
    );
};

export default HomeContent
