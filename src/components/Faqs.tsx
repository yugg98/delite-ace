"use client";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "What Distinguishes Delite Ace in the Realm of Digital Signage?",
    answer:
      "Delite Ace is recognized globally for providing innovative and impactful visual solutions, specifically designed to transform spaces and elevate communication. Our unwavering commitment to excellence ensures that we consistently deliver top-notch experiences and set the gold standard in the industry.        ",
  },
  {
    question:
      "How Can Delite Ace’s Digital Signage Solutions Propel My Business Forward?        ",
    answer:
      "Our diverse array of products, including Interactive Displays, LED Video Walls, and Custom Solutions, is meticulously crafted to serve a variety of sectors, aiming to boost customer engagement, streamline communication, and ultimately, drive sales and enhance brand visibility.          ",
  },
  {
    question: "Are Products from Delite Ace Easy to Use?        ",
    answer:
      "Yes, absolutely! We place a strong emphasis on user experience, ensuring that our products are straightforward to use, integrate seamlessly into various settings, and provide a smooth experience from installation to daily operations.",
  },
  {
    question: "Does Delite Ace Offer Support After the Sale?        ",
    answer:
      "Certainly! We provide extensive support and maintenance services to guarantee the longevity and optimal performance of your digital signage solutions, helping you get the most out of your investment.",
  },
  {
    question:
      "Is It Possible to Customize Digital Signage Solutions with Delite Ace?",
    answer:
      "Yes, it is! We excel in crafting tailor-made solutions that meet your specific needs, ensuring a perfect match for your unique space and requirements.",
  },
  {
    question: "How Can I Start My Journey with Delite Ace?",
    answer:
      "Initiating your journey with us is a breeze! Simply reach out via our contact page, or give us a call, and our dedicated team will be ready to assist you, guiding you towards finding the ideal digital signage solution for your space.",
  },
  {
    question: "Why Opt for Delite Ace for My Digital Signage Requirements?",
    answer:
      "Opting for Delite Ace means choosing a trusted partner in the digital signage realm, ensuring access to innovative solutions, unparalleled support, and a commitment to aiding you in creating memorable visual experiences",
  },
];

export default function Faqs() {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h1 className="text-4xl font-semibold  tracking-tight text-white sm:text-5xl">
              Faqs
            </h1>
            <p className="mt-4 text-base leading-7 text-gray-200">
              Can’t find the answer you’re looking for? Reach out to our{" "}
              <a
                href="#"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                customer support
              </a>{" "}
              team.
            </p>
          </div>
          <div className="mt-10 lg:col-span-7 lg:mt-0">
            <img src="/o.svg" className=" absolute max-w-full" />

            <dl className="space-y-6">
              {faqs.map((faq) => (
                <Disclosure
                  as="div"
                  key={faq.question}
                  className="px-4 py-4 rounded-xl bg-[#BABABA14] md:shadow"
                >
                  {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button className="flex items-start justify-between w-full text-left text-gray-900">
                          <span className="text-lg text-white font-medium leading-9">
                            {faq.question}
                          </span>
                          <span className="flex items-center ml-6 h-7">
                            {open ? (
                              <ChevronUpIcon
                                className="w-6 h-6 text-white"
                                aria-hidden="true"
                              />
                            ) : (
                              <ChevronDownIcon
                                className="w-6 h-6 text-white"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 lg:pr-12 ">
                        <p className="text-base leading-7 text-gray-200">
                          {faq.answer}
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
