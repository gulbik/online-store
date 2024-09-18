import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {  } from "../../public/styles.css";

const ProductCarousel = () => {
    return (
        <Carousel className = "carousel">
            <Carousel.Item className = "carousel-item">
                <img
                    className="d-block "
                    src="https://www.sephora.com/contentimages/2024-07-11-slotting-bestsellers-v2-site-rwd-home-page-hero-banner-US_01.jpg?imwidth=1090e"
                    alt="First slide"
                />
                <Carousel.Caption className = "carousel-caption-shop">
                    <h3>Все самые лучшие продукты в одном месте</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://pcdn.goldapple.ru/p/msc/363638633133613636333462323030323062623232363034/web/5f6d756c7469536f75726365436f6d6d6f6e8dc9f6afda4010efullhd.webp"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Новые скидки каждый день</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://d1mqafote9yg5m.cloudfront.net/sites/files/beautyfresh/BFF.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption className="carousel-caption-firstorder">
                    <p>По промокоду "ПРИВЕТ" на нашем сайте</p>
                </Carousel.Caption>
            </Carousel.Item>
            
        </Carousel>
    );
};

export default ProductCarousel;
