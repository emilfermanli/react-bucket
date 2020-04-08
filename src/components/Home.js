import React from 'react';
import HeroImg from './Home/HeroImg';
import HomeSlider from './Home/HomeSlider';
import VideoSide from './Home/VideoSide';
import Product from './Home/Product';
import Discount from './Home/Discount';
import Services from "./Home/Services";
import Subscribe from "./Home/Subscribe";

export default function Home() {
    return (
        <div>
            <HeroImg />
            <HomeSlider />
            <VideoSide />
            <Product />
            <Discount />
            <Services />
            <Subscribe />
        </div>
    )
}
