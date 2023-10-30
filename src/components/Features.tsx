import React from "react";

const Features = () => {
  return (
    <div>
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl  tracking-tight text-white sm:text-4xl">
          Our Features
        </h1>
        <p className="mt-6  text-gray-200">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
        </p>
      </div>

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
              <a
                href="#"
                className="inline-block bg-blue    px-5 py-3 text-center font-bold text-white transition  "
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
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
              <a
                href="#"
                className="inline-block bg-blue    px-5 py-3 text-center font-bold text-white transition  "
              >
                Learn More
              </a>
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
