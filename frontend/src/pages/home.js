import React from 'react'
// import { Link } from "react-router-dom";
import Images from '../components/Images';
import Carousel from '../components/carousel';
// import ban4 from'../images/Banner-4.webp';
  
const Home = () => {
    return (
       <div>
        <Carousel images={Images}></Carousel>
      </div>
    )
}

export default Home;
