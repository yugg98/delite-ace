import Link from "next/link";
import React from "react";

const Button = ({ title,link }: any) => {
  return (
      <Link
        href={link?link:"/contactus"}
        className="rounded-full sticky z-[60] cursor-pointer bg-white px-6 py-2.5 transition duration-150 ease-in-out  hover:scale-110 font-semibold text-blue shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        {title}
      </Link>
  );
};

export default Button;
