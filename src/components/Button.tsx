import Link from 'next/link'
import React from 'react'

const Button = ({title}:any) => {
  return (
    <div>
         <Link
                    href="#"
                    className="rounded-full cursor-pointer bg-white px-10 py-2.5 text-lg  font-semibold text-blue shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    {title}
                  </Link>
    </div>
  )
}

export default Button