import React from "react";
import PropTypes from "prop-types";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";

import "swiper/css";
import "swiper/css/effect-cards";

import './transformation.css'

export const Transformation = ({ className }) => {
  return (
    <div className="max-w-screen-xl mx-auto flex flex-row items-center my-5 py-5">
      <div className="w-6/12">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta sequi
        asperiores, soluta blanditiis magni natus molestiae eaque modi itaque,
        saepe delectus veritatis sit aspernatur recusandae amet facere sed
        perspiciatis maiores?
      </div>
      <div className="w-6/12">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="transformation-swiper"
        >
          <SwiperSlide className="transformation-swiper--card">Slide 1</SwiperSlide>
          <SwiperSlide className="transformation-swiper--card">Slide 2</SwiperSlide>
          <SwiperSlide className="transformation-swiper--card">Slide 3</SwiperSlide>
          <SwiperSlide className="transformation-swiper--card">Slide 4</SwiperSlide>
          <SwiperSlide className="transformation-swiper--card">Slide 5</SwiperSlide>
          <SwiperSlide className="transformation-swiper--card">Slide 6</SwiperSlide>
          <SwiperSlide className="transformation-swiper--card">Slide 7</SwiperSlide>
          <SwiperSlide className="transformation-swiper--card">Slide 8</SwiperSlide>
          <SwiperSlide className="transformation-swiper--card">Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

Transformation.propTypes = {
  className: PropTypes.string,
};

export default Transformation;