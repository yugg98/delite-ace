"use client";
import { Container } from "@/components/Container";
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
export default function Contactus() {
  const [success, setSuccess] = useState(false);
  const router = useRouter();
  const [error, setError] = useState("");
  const [data, setData] = useState({
    firstname: "",
    email: "",
    lastname: "",
    phonenumber: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+/;

    if (!regex.test(data.email)) {
      setError("Enter email");
    } else {
      setError("");
      setSuccess(true);
      try {
        axios.post('/api/send', data, {
          headers: {
            'Content-Type': 'application/json',
          }
        })
      } catch (error) {
        console.error("Error adding data to Firestore: ", error);
      }
    }
  };
  return (
    <div className="relative isolate   my-24">
      <Container className="!px-0">
        <div className="mx-auto grid px-4 sm:px-6 lg:px-10 grid-cols-1 lg:grid-cols-2 ">
          <div className="relative  lg:static  md:pr-10 py-24 px-4">
            <h2 className="text-4xl font-dmserif sm:text-6xl font-bold tracking-tight text-white">
              Get in touch
            </h2>
            <p className="mt-4 text-lg leading-8 text-white">
            Connect with Delite Ace for cutting-edge digital signage solutions. Email, call, or submit a query online. We&apos;re here to light up your business&apos;s potential. Let&apos;s talk!
            </p>
            <dl className="mt-8 space-y-4 text-base leading-7 text-white">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon
                    className="h-7 w-6 text-white"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                 D - 4, Sec - 7
                  <br />Ground Floor
                  <br /> Noida
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon
                    className="h-7 w-6 text-white"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a className="text-white" href="tel:+1 (555) 234-5678">
                  +91 96502 07279
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon
                    className="h-7 w-6 text-white"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a className="text-white" href="mailto:hello@example.com">
                    umang@deliteace.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <form onSubmit={handleSubmit} className="md:py-24 md:px-10 px-4">
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
            <div className="gr-1 absolute" />
                
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-white"
                    >
                      First Name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="firstname"
                        value={data.firstname}
                        className="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Yug"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-white"
                    >
                      Last Name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="lastname"
                        value={data.lastname}
                        className="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Gupta"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-white"
                    >
                      Email
                    </label>
                    <div className="mt-2">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={data.email}
                        className="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="name@company.com"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-white"
                    >
                      Phonenumber
                    </label>
                    <div className="mt-2">
                      <input
                        type="phonenumber"
                        name="phonenumber"
                        value={data.phonenumber}
                        className="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="+919999999999"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-white"
                    >
                      Message
                    </label>
                    <div className="mt-2">
                      <textarea
                        name="message"
                        id="email"
                        value={data.message}
                        className="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Your Message here"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  className="rounded-full cursor-pointer bg-white px-6 text-sm py-2.5   font-semibold text-blue shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="md:mt-0 mt-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3504.686195058195!2d77.21345137549773!3d28.549150475710352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDMyJzU2LjkiTiA3N8KwMTInNTcuNyJF!5e0!3m2!1sen!2sin!4v1697278191185!5m2!1sen!2sin"
            className="w-full h-[450px]"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </Container>
    </div>
  );
}
