// hero.tsx
import React from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, image }) => {
  return (
    <section className="bg-white">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="mb-10 lg:mb-0 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">
              <p className="inline-block px-3 py-px mb-4 text-teal-800 text-xs font-semibold tracking-wider uppercase rounded-full bg-teal-accent-400">
                Brand New
              </p>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                {title}
                <br className="hidden md:block" />
                <span className="text-teal-500">{subtitle}</span>
              </h2>
            </div>
          </div>
          <div className="relative lg:max-w-xl lg:w-full">
            <img
              className="object-cover w-full h-full rounded shadow-2xl lg:rounded-r-none"
              src={image}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// features.tsx
import React from 'react';

interface FeatureProps {
  title: string;
  subtitle: string;
  image: string;
}

const Feature: React.FC<FeatureProps> = ({ title, subtitle, image }) => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <div className="bg-white text-gray-600 rounded shadow-md p-6">
          <div className="flex items-center justify-center w-16 h-16 mb-3 rounded-full bg-indigo-50">
            <svg
              className="w-12 h-12 text-deep-purple-accent-400"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23"
              />
            </svg>
          </div>
          <h6 className="mb-3 text-xl font-medium">{title}</h6>
          <p className="mb-5 font-light">{subtitle}</p>
        </div>
        {/* Add more Feature components here */}
      </div>
    </div>
  );
};

export default Feature;

// testimonials.tsx
import React from 'react';

interface TestimonialProps {
  name: string;
  title: string;
  image: string;
  quote: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  name,
  title,
  image,
  quote,
}) => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <blockquote className="max-w-2xl mb-6">
            <svg
              className="text-gray-400 transform -rotate-90 absolute left-0 top-0 h-12 w-12 text-center pointer-events-none"
              viewBox="0 0 52 29"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.352 4.646a.5.5 0 0 1 .708 0L22 17.293l11.647-12.646a.5.5 0 0 1 .708.708l-12 13.357a.5.5 0 0 1-.708 0L22 18.443 10.354 6.046a.5.5 0 0 1-.708-.708L21.293 15 10.093 5.354z" />
            </svg>
            <p className="text-2xl font-medium text-gray-900">{quote}</p>
          </blockquote>
          <footer className="flex items-center mt-6">
            <img
              className="object-cover w-10 h-10 rounded-full"
              src={image}
              alt={name}
            />
            <div className="ml-4">
              <p className="text-lg font-semibold text-gray-900">{name}</p>
              <p className="text-gray-500">{title}</p>
            </div>
          </footer>
        </div>
        {/* Add more Testimonial components here */}
      </div>
    </div>
  );
};

export default Testimonial;

// pricing.tsx
import React from 'react';

interface PriceProps {
  plan: string;
  price: string;
  features: string[];
}

const Price: React.FC<PriceProps> = ({ plan, price, features }) => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <h2 className="mb-4 text-4xl font-extrabold leading-none text-gray-900">
            Our Pricing
          </h2>
          <p className="mb-6 text-base font-medium text-gray-500 md:text-lg">
            Choose a plan that works for you.
          </p>
        </div>
        <div className="lg:col-span-2">
          <div className="flex flex-col sm:flex-row justify-center pt-6 sm:pt-0 border-b-2 border-gray-200 sm:space-x-8">
            <div className="flex-1 pb-6 sm:pb-0 sm:pr-8">
              <div className="mb-4 text-xl font-medium text-gray-900">
                {plan}
              </div>
              <p className="text-3xl font-extrabold text-gray-900">
                ${price}
                <span className="text-gray-500">/mo</span>
              </p>
              <ul className="list-inside space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="text-gray-500">
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full mt-6 bg-teal-500 hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-teal-300 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Sign Up
              </button>
            </div>
          </div>
        </div>
        {/* Add more Price components here */}
      </div>
    </div>
  );
};

export default Price;

// cta.tsx
import React from 'react';

interface CtaProps {
  title: string;
  subtitle: string;
  image: string;
}

const Cta: React.FC<CtaProps> = ({ title, subtitle, image }) => {
  return (
    <section className="bg-white">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="mb-12 lg:mb-0 lg:pr-5 lg:text-right">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              {title}
              <br className="hidden md:block" />
              <span className="text-teal-500">{subtitle}</span>
            </h2>
            <p className="max-w-xl mb-6 text-base text-gray-500 lg:mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="flex items-center justify-center w-full h-full lg:w-5/6 lg:h-auto">
            <img
              className="object-cover w-full h-full rounded shadow-lg lg:rounded-r-none"
              src={image}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;