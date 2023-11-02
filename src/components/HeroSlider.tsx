"use client"
import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";



import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
const HeroSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, A11y]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      loop={true}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <Link href="/contactus" className="relative mx-auto isolate flex flex-col hover:scale-95 transition-all duration-150 ease-in-out cursor-pointer hover:shadow-2xl justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-32 h-[500px] max-w-[380px]">
          <img
            src="/images/img1.svg"
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="/contactus" className="relative mx-auto isolate flex flex-col hover:scale-95 transition-all duration-150 ease-in-out cursor-pointer hover:shadow-2xl justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-32 h-[500px] max-w-[380px]">
          <img
            src="/images/img2.svg"
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="/contactus" className="relative mx-auto isolate flex flex-col hover:scale-95 transition-all duration-150 ease-in-out cursor-pointer hover:shadow-2xl justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-32 h-[500px] max-w-[380px]">
          <img
            src="/images/img3.svg"
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="/contactus" className="relative mx-auto isolate flex flex-col hover:scale-95 transition-all duration-150 ease-in-out cursor-pointer hover:shadow-2xl justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-32 h-[500px] max-w-[380px]">
          <img
            src="/images/img4.svg"
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="/contactus" className="relative mx-auto isolate flex flex-col hover:scale-95 transition-all duration-150 ease-in-out cursor-pointer hover:shadow-2xl justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-32 h-[500px] max-w-[380px]">
          <img
            src="/images/img5.svg"
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="/contactus" className="relative mx-auto isolate flex flex-col hover:scale-95 transition-all duration-150 ease-in-out cursor-pointer hover:shadow-2xl justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-32 h-[500px] max-w-[380px]">
          <img
            src="/images/img6.svg"
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="/contactus" className="relative mx-auto isolate flex flex-col hover:scale-95 transition-all duration-150 ease-in-out cursor-pointer hover:shadow-2xl justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-32 h-[500px] max-w-[380px]">
          <img
            src="/images/img7.svg"
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
        </Link>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;