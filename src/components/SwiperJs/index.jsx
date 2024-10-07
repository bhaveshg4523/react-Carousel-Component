import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import React from "react";

const SwiperJs = () => {
  return (
    <div className="flex items-center justify-center bg-white font-mono font-normal mb-40">
      <div className="container px-4 h-96">
        <Swiper
          className="my-16"
          style={{ width: "100%", height: "100%" }}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide
            style={{ height: "100%" }}
            className="bg-gray-500 text-white text-2xl rounded-lg shadow-lg"
          >
            <div className="text-center"> Slide 1</div>
          </SwiperSlide>
          <SwiperSlide
            style={{ height: "100%" }}
            className="bg-green-500 text-white text-2xl rounded-lg shadow-lg"
          >
            <div className="text-center">Slide 2</div>
          </SwiperSlide>
          <SwiperSlide
            style={{ height: "100%" }}
            className="bg-yellow-500 text-white text-2xl rounded-lg shadow-lg"
          >
            <div className="text-center"> Slide 3</div>
          </SwiperSlide>
          <SwiperSlide
            style={{ height: "100%" }}
            className="bg-red-500 text-white text-2xl rounded-lg shadow-lg"
          >
            <div className="text-center"> Slide 4</div>
          </SwiperSlide>
          <SwiperSlide
            style={{ height: "100%" }}
            className="bg-gray-500 text-white text-2xl rounded-lg shadow-lg"
          >
            <div className="text-center"> Slide 5</div>
          </SwiperSlide>
          <SwiperSlide
            style={{ height: "100%" }}
            className="bg-green-500 text-white text-2xl rounded-lg shadow-lg"
          >
            <div className="text-center"> Slide 6</div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperJs;
