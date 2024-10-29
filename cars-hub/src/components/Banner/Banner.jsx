"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Banner.components.css';
import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import img1 from "../../../public/images/images/banner2.webp";
import img2 from "../../../public/images/images/banner3.webp";
import img3 from "../../../public/images/images/banner4.webp";

export default function Banner() {
  return (
    <>
      <div className="relative">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="absolute z-30 flex flex-col justify-center left-0 p-4 sm:left-10 md:left-16">
              <h1 className="text-white font-bold text-xs sm:text-sm md:text-2xl lg:text-3xl hidden md:block">
                Certified car with
              </h1>
              <h1 className="text-white hidden md:block font-bold text-xs sm:text-sm md:text-3xl lg:text-4xl">
                Upto 12 Month Warranty Plan
              </h1>
              <div className="flex justify-center mt-2 sm:mt-4">
                <Link to={"/shop"}>
                  <button className="bg-lime-500 text-xs sm:text-sm md:text-base lg:text-lg text-white mt-3 rounded px-3 py-2">
                    Explore Here
                  </button>
                </Link>
              </div>
            </div>
            <img
              src={img1}
              className="w-full h-[calc(100vh-64px)] object-cover"
              alt="Banner 1"
            />
          </SwiperSlide>

          <SwiperSlide>
            <div className="absolute z-30 flex flex-col justify-center left-0 p-4 sm:left-10 md:left-16">
              <h1 className="text-white hidden md:block font-bold text-xs sm:text-sm md:text-2xl lg:text-3xl">
                Always There for You.
              </h1>
              <h1 className="text-white hidden md:block font-bold text-xs sm:text-sm md:text-3xl lg:text-4xl">
                Get Car At Zero Down Payment
              </h1>
              <div className="flex justify-center mt-2 sm:mt-4">
                <Link to={"/shop"}>
                  <button className="bg-lime-500 text-xs sm:text-sm md:text-base lg:text-lg text-white mt-3 rounded px-3 py-2">
                    Explore Here
                  </button>
                </Link>
              </div>
            </div>
            <img
              src={img2}
              className="w-full h-[calc(100vh-64px)] object-cover"
              alt="Banner 2"
            />
          </SwiperSlide>

          <SwiperSlide>
            <div className="absolute z-30 flex flex-col justify-center left-0 p-4 sm:left-10 md:left-16">
              <h1 className="text-white hidden md:block font-bold text-xs sm:text-sm md:text-2xl lg:text-3xl">
                Driving in style, leaving a lasting impression
              </h1>
              <h1 className="text-white hidden md:block font-bold text-xs sm:text-sm md:text-3xl lg:text-4xl">
                Get Best Offers On Festivals
              </h1>
              <div className="flex justify-center mt-2 sm:mt-4">
                <Link to={"/shop"}>
                  <button className="bg-lime-500 text-xs sm:text-sm md:text-base lg:text-lg text-white mt-3 rounded px-3 py-2">
                    Explore Here
                  </button>
                </Link>
              </div>
            </div>
            <img
              src={img3}
              className="w-full h-[calc(100vh-64px)] object-cover"
              alt="Banner 3"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
