import React from 'react';
import {Swiper, SwiperSlide ,useSwiper } from 'swiper/react';
import 'swiper/css';
import { sliderSettings } from '../../utils/common';
import './Residencies.css';
import data from '../../utils/slider.json';
const Residencies = () => {
  return (
    <section className="r-wrapper">
        <div className="paddings innerwidth r-container">
        <div className="r-head flexColStart">
        <span className="orangeText">Best Choices</span>
        <span className="primaryText">Popular Residencies</span>

        </div>
        <Swiper {...sliderSettings}>
{data.map((card , i) =>(
        <SwiperSlide key={i}>
        <div className="flexColStart r-card">
        <img src={card.image} alt="home"/>
        <span className="secondaryText r-price">
        <span style={{ color: "orange"}}>$</span>
        <span>{card.price}</span>

        </span>
        <span className="primaryText">{card.name}</span>
        <span className="SecondaryText">{card.detail}</span>

        </div>
        </SwiperSlide>
        ))}
        </Swiper>

        </div>

              </section>

  );
};

export default Residencies;
