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
                      <a
                        href="#"
                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Get started
                      </a>
                    </div>
                  </div>
                  <div className="max-w-lg">
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
