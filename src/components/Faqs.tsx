"use client"
import { Disclosure } from "@headlessui/react"
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline"

const faqs = [
    {
      question: 'How do you make holy water?',
      answer:
        'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
    },
    {
        question: 'How do you make holy water?',
        answer:
          'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
      },
      {
        question: 'How do you make holy water?',
        answer:
          'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
      },
      {
        question: 'How do you make holy water?',
        answer:
          'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
      },
      {
        question: 'How do you make holy water?',
        answer:
          'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
      },
      {
        question: 'How do you make holy water?',
        answer:
          'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
      },

    // More questions...
  ]
  
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
                Can’t find the answer you’re looking for? Reach out to our{' '}
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  customer support
                </a>{' '}
                team.
              </p>
            </div>
            <div className="mt-10 lg:col-span-7 lg:mt-0">
            <div className="gr-1 absolute" />

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
    )
  }
  