import Cta from "./Cta";

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
  {
    id: 1,
    name: "Focus Paper Refill",
    href: "#",
    description: "3 sizes available",
    imageSrc:
      "/products/p1.svg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 2,
    name: "Focus Paper Refill",
    href: "#",
    description: "3 sizes available",
    imageSrc:
      "/products/p2.svg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 1,
    name: "Focus Paper Refill",
    href: "#",
    description: "3 sizes available",
    imageSrc:
      "/products/p3.svg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 1,
    name: "Focus Paper Refill",
    href: "#",
    description: "3 sizes available",
    imageSrc:
      "/products/p4.svg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 1,
    name: "Focus Paper Refill",
    href: "#",
    description: "3 sizes available",
    imageSrc:
      "/products/p5.svg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 1,
    name: "Focus Paper Refill",
    href: "#",
    description: "3 sizes available",
    imageSrc:
      "/products/p6.svg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },

  // More products...
];

export default function Products() {
  return (
    <div className="">
    
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
        <div className="gr-1 absolute left-[40%]" />

          <h1 className="text-4xl font-semibold  tracking-tight text-white sm:text-5xl">
            Our Products
          </h1>
          <p className="mt-6  max-w-2xl mx-auto  text-gray-200">
            Transform your space with our state-of-the-art digital signage
            solutions. Elevate communication, captivate audiences, and deliver
            messages with impact.
          </p>
        </div>
        <div className="grid mt-24 grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 max-h-[500px] w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div className="mt-4 flex items-center justify-between text-base font-medium text-white">
                <h3>{product.name}</h3>
              </div>
              <p className="mt-1 text-sm italic text-gray-500">
                {product.description}
              </p>
            </a>
          ))}
        </div>
      </div>
      <Cta/>
    </div>
  );
}
