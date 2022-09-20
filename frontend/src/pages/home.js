import React from 'react'
// import { Link } from "react-router-dom";
import ban1 from'../images/Banner.webp';
import ban2 from'../images/Banner-2.webp';
import ban3 from'../images/banner-3.webp';
// import ban4 from'../images/Banner-4.webp';
  
const Home = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <image src={ban1}  alt="..."/>
          </div>
          <div className="carousel-item">
            <image src={ban2}  alt="..."/>
          </div>
          <div className="carousel-item">
            <image src={ban3}  alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    )
}

export default Home;
