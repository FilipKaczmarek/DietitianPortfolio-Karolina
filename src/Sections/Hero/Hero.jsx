import React from "react";
import PropTypes from "prop-types";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay, Parallax } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const Hero = ({ className }) => {
  return (
    <div className="w-screen h-[80vh]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y, Parallax]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={true}
        style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
        pagination={{ clickable: true }}
        speed={600}
        parallax={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: true,
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="mySwiper w-screen h-[80vh] flex flex-row overflow-hidden"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            "background-image": "url(./images/background-image.jpg)",
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Slide 2
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Subtitle
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-screen h-[80vh]">
          <div className="max-w-screen-xl mx-auto">Slide 1</div>
        </SwiperSlide>
        <SwiperSlide className="w-screen h-[80vh]">
          <div className="max-w-screen-xl mx-auto">Slide 2</div>
        </SwiperSlide>
        <SwiperSlide className="w-screen h-[80vh]">
          <div className="max-w-screen-xl mx-auto">Slide 3</div>
        </SwiperSlide>
      </Swiper>
    </div>

    // <div className="max-w-screen-xl mx-auto">

    // </div>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
};

export default Hero;
