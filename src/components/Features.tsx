import React from "react";
import Button from "./Button";

const Features = () => {
  return (
    <div>
     <div className="gr-1 left-[40%] absolute" />
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
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
      </div>

      <div className=" pb-32 pt-16">
        <div className="py-16">
          <div className="mx-auto lg:flex gap-20 justify-center items-center max-w-7xl  ">
            <div className="">
              <div className="md:p-0 p-6  ">
                <img
                  className="w-full   "
                  src="/images/f1.svg"
                  alt="Inbox user interface"
                />
              </div>
            </div>
            <div className="md:w-[60%] px-6 py-10 ">
              <div>
                <div className="">
                <div className="gr-1 absolute left-0" />
                  <h2 className="text-3xl font-bold tracking-tight text-white">
                    Global Reach, Local Touch
                  </h2>
                  <p className="mt-4 text-lg text-gray-200">
                    Our solutions have reached clients across the globe, yet we
                    remain committed to providing personalized service and
                    support. We understand the nuances of different markets and
                    strive to deliver solutions that resonate locally.
                  </p>
                  <div className="mt-6">
                    <Button title="Get Started"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="gr-1 absolute" />
          </div>
        </div>
        <div className="py-16">
          <div className="mx-auto lg:flex gap-20 justify-center items-center max-w-7xl  ">
            <div className="md:w-[60%] px-6 py-10 ">
              <div>
                <div className="">
                  <h2 className="text-3xl font-bold tracking-tight text-white">
                    Diverse Industry Applications{" "}
                  </h2>
                  <p className="mt-4 text-lg text-gray-200">
                    From corporate offices and retail spaces to educational
                    institutions and entertainment venues, our digital signage
                    solutions cater to a wide array of industries. We ensure
                    that our products and services meet the specific needs of
                    each sector, enhancing the overall experience for your
                    audience.
                  </p>
                  <div className="mt-6">
                  <Button title="Get Started"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="md:p-0 p-6  ">
                <img
                  className="w-full   "
                  src="/images/f2.svg"
                  alt="Inbox user interface"
                />
              </div>
            </div>
          </div>
          <div className="gr-1 absolute left-0" />
        </div>
        <div className="py-16">
          <div className="mx-auto lg:flex gap-20 justify-center items-center max-w-7xl  ">
            <div className="">
              <div className="md:p-0 p-6  ">
                <img
                  className="w-full   "
                  src="/images/f3.svg"
                  alt="Inbox user interface"
                />
              </div>
            </div>
            <div className="md:w-[60%] px-6 py-10 ">
              
              <div>
                <div className="">
                <div className="gr-1 absolute" />
                  <h2 className="text-3xl font-bold tracking-tight text-white">
                    State-of-the-Art Technology
                  </h2>
                  <p className="mt-4 text-lg text-gray-200">
                    At Delite Ace, we pride ourselves on staying ahead of the
                    curve. Our solutions incorporate the latest in digital
                    signage
                  </p>
                  <div className="mt-6">
                  <Button title="Get Started"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gr-1 absolute" />
        </div>
        <div className="py-16">
          <div className="mx-auto lg:flex gap-20 justify-center items-center max-w-7xl  ">
            <div className="md:w-[60%] px-6 py-10 ">
              <div>
              <div className="gr-1 absolute left-0" />
                <div className="">
                  <h2 className="text-3xl font-bold tracking-tight text-white">
                    Transforming Spaces, Delivering Impact{" "}
                  </h2>
                  <p className="mt-4 text-lg text-gray-200">
                    Our digital signage solutions do more than just display
                    content; they transform spaces and create experiences.
                    Whether it’s a captivating LED display, an interactive
                    kiosk, or a seamless video wall, our products are designed
                    to leave a lasting impression.
                  </p>
                  <div className="mt-6">
                  <Button title="Get Started"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="md:p-0 p-6  ">
                <img
                  className="w-full "
                  src="/images/f4.svg"
                  alt="Inbox user interface"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
