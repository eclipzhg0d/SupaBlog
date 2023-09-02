import React from "react";
import LazyImage from "./ui/LazyImage";
import LogoClouds from "./ui/LogoClouds";

export default function HomePage() {
  return (
    <section className="pt-12 md:pt-24">
      <div className="px-12 mx-auto max-w-7xl">
        <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
          <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-zinc-200 md:text-6xl md:tracking-tight ">
            <span>Modern </span>
            <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
              fullstack <br />
            </span>
            <span>blog template</span>
          </h1>
          <p className="px-0 mb-8 text-lg text-zinc-400 md:text-xl lg:px-24">
            This app is based on Next JS 13 using App Router and Supabase &
            Clerk Auth as a backend.
          </p>
          <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
            <a
              href="https://github.com/eclipzhg0d/SupaBlog/"
              className="inline-flex items-center justify-center w-full px-4 py-3 mb-2 text-md text-white bg-green-500 rounded-2xl sm:w-auto sm:mb-0 hover:bg-green-700 transition duration-300  "
            >
              Documentation
              <svg
                className="w-4 h-4 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="/new/"
              className="inline-flex items-center justify-center w-full px-4 py-3 mb-2 text-md bg-zinc-200 hover:bg-zinc-300 rounded-2xl sm:w-auto sm:mb-0 transition duration-300 "
            >
              Get Started
            </a>
          </div>
        </div>
        <LogoClouds />
        <div className="w-full mx-auto mt-20 text-center md:w-10/12">
          <div className="relative z-0 w-full mt-8">
            <div className="relative overflow-hidden shadow-2xl">
              <div className="flex items-center flex-none px-4 bg-green-500 rounded-b-none h-11 rounded-xl">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                  <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                  <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                </div>
              </div>
              <LazyImage imageSrc="/landing.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
