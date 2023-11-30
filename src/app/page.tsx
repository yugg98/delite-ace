"use client";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Products from "@/components/Product";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import Cta from "@/components/Cta";
import Marquee from "react-fast-marquee";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <main className="">
      <div className="pt-14">
        <svg
          width="583"
          height="593"
          viewBox="0 0 583 593"
          fill="none"
          className="absolute max-w-full right-0 top-0"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_116_1466)">
            <ellipse
              cx="215.642"
              cy="237.754"
              rx="215.642"
              ry="237.754"
              transform="matrix(-0.123619 0.99233 -0.990615 -0.136684 768.36 -74.0059)"
              fill="url(#paint0_linear_116_1466)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_116_1466"
              x="0.873535"
              y="-377.246"
              width="1010.61"
              height="969.461"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="134.13"
                result="effect1_foregroundBlur_116_1466"
              />
            </filter>
            <linearGradient
              id="paint0_linear_116_1466"
              x1="506.33"
              y1="764.767"
              x2="218.152"
              y2="-153.791"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#3A102F" stop-opacity="0" />
              <stop offset="1" stop-color="#445BE9" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          className=" left-0 absolute max-w-full"
          width="474"
          height="924"
          viewBox="0 0 474 924"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_116_1465)">
            <ellipse
              cx="193.013"
              cy="200.39"
              rx="193.013"
              ry="200.39"
              transform="matrix(-0.123619 0.99233 -0.990615 -0.136684 227.74 297.78)"
              fill="url(#paint0_linear_116_1465)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_116_1465"
              x="-462.847"
              y="0.157715"
              width="936.436"
              height="923.531"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="134.13"
                result="effect1_foregroundBlur_116_1465"
              />
            </filter>
            <linearGradient
              id="paint0_linear_116_1465"
              x1="453.198"
              y1="644.583"
              x2="222.132"
              y2="-137.561"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#3A102F" stop-opacity="0" />
              <stop offset="1" stop-color="#445BE9" />
            </linearGradient>
          </defs>
        </svg>
        <img src="/hero.svg" className="absolute left-[30%]" />
        <div className="py-24 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl  text-center">
              <h1 className="text-4xl font-semibold  tracking-tight text-white sm:text-6xl">
                Elevating spaces with elite signage.
              </h1>
              <p className="mt-6 text-lg  mx-auto leading-8 text-gray-200">
                Delite Ace transforms spaces with unparalleled digital signage,
                enhancing communication, captivating audiences, and ensuring
                impactful, visually excellent experiences.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/contactus"
                  className="rounded-full sticky z-[100] cursor-pointer bg-white px-10 py-2.5 text-lg  font-semibold text-blue shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className=" flow-root mb-24">
          <Swiper
            modules={[Navigation, Autoplay, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
            loop={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <img src="/images/img1.svg" className="w-xl mx-auto rounded-lg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/img2.svg" className="w-xl mx-auto rounded-lg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/img3.svg" className="w-x mx-auto rounded-lg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/img4.svg" className="w-x mx-auto rounded-lg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/img5.svg" className="w-x mx-auto rounded-lg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/img6.svg" className="w-x mx-auto rounded-lg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/img7.svg" className="w-x mx-auto rounded-lg" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <h1 className="text-4xl text-center font-semibold  tracking-tight text-white sm:text-5xl">
      Worldwide Collaborations
        </h1>
        <p className="mb-6 mt-2 text-center  max-w-2xl mx-auto  text-gray-200">
          Showcasing diverse clients from every corner of the world.
        </p>
       
        <div className="mx-auto  max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          <Marquee pauseOnHover={true}>
            <img
              className="col-span-2 mx-4  max-h-24 w-full object-contain lg:col-span-1"
              src="logo1.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            />

            <img
              className="col-span-2 mx-4  max-h-24 w-full object-contain lg:col-span-1"
              src="logo2.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 mx-4 max-h-16 w-full object-contain lg:col-span-1"
              src="logo3.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 mx-4 max-h-16 w-full object-contain lg:col-span-1"
              src="logo4.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 mx-4 max-h-16 w-full object-contain lg:col-span-1"
              src="logo5.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 mx-4 max-h-16 w-full object-contain lg:col-span-1"
              src="logo6.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 mx-4 max-h-16 w-full object-contain lg:col-span-1"
              src="logo7.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 mx-4 max-h-16 w-full object-contain lg:col-span-1"
              src="logo8.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 mx-4 max-h-16 w-full object-contain lg:col-span-1"
              src="logo9.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 mx-4 max-h-16 w-full object-contain lg:col-span-1"
              src="logo10.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 mx-4 max-h-16 w-full object-contain lg:col-span-1"
              src="logo11.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            />
          </Marquee>
        </div>
      </div>

      <Products />
      <Features />
      <Testimonials />
      <Cta />
    </main>
  );
}
