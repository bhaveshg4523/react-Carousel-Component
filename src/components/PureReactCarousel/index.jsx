import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  ButtonFirst,
  ButtonLast,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export default class Carousel extends React.Component {
  render() {
    const naturalWidth = 400;
    const naturalHeight = (naturalWidth / 19) * 6;

    return (
      <div className="container mx-auto mt-10 font-mono">
        <CarouselProvider
          naturalSlideWidth={naturalWidth}
          naturalSlideHeight={naturalHeight}
          totalSlides={8}
          className="bg-white shadow-md rounded-lg overflow-hidden"
        >
          <Slider className="relative">
            {/* Generate slides */}
            {[...Array(8)].map((_, index) => (
              <Slide index={index} key={index}>
                <div
                  className={`flex items-center justify-center h-full text-white text-2xl font-bold ${
                    index % 2 === 0 ? "bg-blue-500" : "bg-green-500"
                  }`}
                >
                  I am slide {index + 1}.
                </div>
              </Slide>
            ))}
          </Slider>

          <div className="flex justify-center space-x-4 mt-2 mb-2">
            <ButtonFirst className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
              First
            </ButtonFirst>
            <ButtonBack className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
              Back
            </ButtonBack>
            <ButtonNext className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
              Next
            </ButtonNext>
            <ButtonLast className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
              Last
            </ButtonLast>
          </div>
        </CarouselProvider>
      </div>
    );
  }
}
