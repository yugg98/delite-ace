import Button from "@/components/Button";
import HeroSlider from "@/components/HeroSlider";
import Products from "@/components/Product";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="">
        <main>
          <div className="relative isolate">
            <div className="overflow-hidden">
              <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
                <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                  <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <div className="gr-1 absolute left-0" />
                    <h1 className="text-4xl font-semibold  tracking-tight text-white sm:text-6xl">
                      Revolutionizing Visual Experiences:{" "}
                      <span className="text-indigo-600 ">
                        Our Innovative Product Suite{" "}
                      </span>
                    </h1>
                    <p className="relative mt-6 text-lg leading-8 text-gray-100 sm:max-w-md lg:max-w-none">
                      Embark on a journey of unparalleled visual excellence with
                      Delite Ace&apos;s cutting-edge digital signage solutions,
                      meticulously engineered to captivate, communicate, and
                      connect.
                    </p>
                    <div className="mt-10 flex items-center gap-x-6">
                    <Button title="Get Started"/>
                    </div>
                  </div>
                  <div className="max-w-lg md:mt-0 mt-10">
                    <HeroSlider />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Products />
    </div>
  );
};

export default page;
