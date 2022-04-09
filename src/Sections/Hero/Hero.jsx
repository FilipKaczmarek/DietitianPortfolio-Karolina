import React from "react";
import PropTypes from "prop-types";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay, Parallax } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const content = [
  {
    id: 1,
    title: "Title 1",
    textContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
        laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.`,
  },
  {
    id: 2,
    title: "Title 2",
    textContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
        laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.`,
  },
  {
    id: 3,
    title: "Title 3",
    textContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
        laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.`,
  },
];

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
        <SwiperSlide className="w-screen h-[80vh]">
          <div className="max-w-screen-xl mx-auto h-full flex flex-col items-end justify-center">
            <h1
              className="title w-6/12 justify-end"
              data-swiper-parallax="-300"
            >
              Title
            </h1>
            <p className="text w-6/12" data-swiper-parallax="-100">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-screen h-[80vh]">
          <div className="max-w-screen-xl mx-auto">
            <div className="max-w-screen-xl mx-auto">
              <h1 className="title" data-swiper-parallax="-300">
                Title
              </h1>
              <div className="text" data-swiper-parallax="-100">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam dictum mattis velit, sit amet faucibus felis iaculis
                  nec. Nulla laoreet justo vitae porttitor porttitor.
                  Suspendisse in sem justo.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-screen h-[80vh]">
          <div className="max-w-screen-xl mx-auto">
            <div className="max-w-screen-xl mx-auto">
              <h1 className="title" data-swiper-parallax="-300">
                Title
              </h1>
              <div className="text" data-swiper-parallax="-100">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam dictum mattis velit, sit amet faucibus felis iaculis
                  nec. Nulla laoreet justo vitae porttitor porttitor.
                  Suspendisse in sem justo.
                </p>
              </div>
            </div>
          </div>
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
