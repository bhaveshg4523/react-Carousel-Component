import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReactslickComponent = () => {
  return (
    <div className="container mx-auto relative mt-40 ">
      <Slider
        dots={true}
        slidesToShow={2}
        slidesToScroll={1}
        infinite={false}
        nextArrow={<SampleNextArrow />}
        prevArrow={<SamplePrevArrow />}
        swipeToSlide={true}
      >
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="flex justify-center items-center h-64 bg-gradient-to-r from-blue-400 to-green-400 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 ml-4"
          >
            <h3 className="text-4xl font-bold text-white">Slide {index + 1}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg cursor-pointer z-10"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-6 h-6 text-blue-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12H9m6-6l-6 6 6 6"
        />
      </svg>
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg cursor-pointer z-10"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-6 h-6 text-blue-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h6m-6-6l6 6-6 6"
        />
      </svg>
    </div>
  );
};

export default ReactslickComponent;
