import React from "react";
import Button from "./Button";

const Features = () => {
  return (
    <div>
      <div className="gr-1 absolute" />
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-semibold  tracking-tight text-white sm:text-5xl">
          Our Features
        </h1>
        <p className="mt-6  max-w-2xl mx-auto  text-gray-200">
          Transform your space with our state-of-the-art digital signage
          solutions. Elevate communication, captivate audiences, and deliver
          messages with impact.
        </p>
      </div>
      <div className="gr-2 absolute right-0 " />
      <section className="mt-4">
        <div className="mx-auto w-full max-w-7xl px-5 py-8 md:px-10 ">
          <div className="grid grid-cols-1 items-center gap-8 sm:gap-20 lg:grid-cols-2">
            <div>
              <img
                src="/feature1.svg"
                alt="Features Image"
                className="mx-auto inline-block h-full w-full max-w-[640px] rounded-2xl object-cover"
              />
            </div>
            <div className="max-w-[720px]">
              <h3 className="mb-4 mt-6 text-2xl text-white  md:text-3xl">
                Never miss any payment
              </h3>
              <p className="mb-6 max-w-[480px] text-white md:mb-10 lg:mb-12">
                Say goodbye to payment headaches with SecurePay! Our easy-to-use
                payment platform makes it simple for businesses and individuals
                to send and receive payments quickly and securely.
              </p>
              <Button title="Learn More"/>
            </div>
          </div>
        </div>
        <div className="gr-2 absolute left-0   " />

        <div className="mx-auto w-full max-w-7xl px-5 py-8 md:px-10 ">
          <div className="grid grid-cols-1 items-center gap-8 sm:gap-20 lg:grid-cols-2">
            <div className="max-w-[720px]">
              <h3 className="mb-4 mt-6 text-2xl text-white  md:text-3xl">
                Never miss any payment
              </h3>
              <p className="mb-6 max-w-[480px] text-white md:mb-10 lg:mb-12">
                Say goodbye to payment headaches with SecurePay! Our easy-to-use
                payment platform makes it simple for businesses and individuals
                to send and receive payments quickly and securely.
              </p>
              <Button title="Learn More"/>
            </div>
            <div>
              <img
                src="/feature2.svg"
                alt="Features Image"
                className="mx-auto inline-block h-full w-full max-w-[640px] rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
