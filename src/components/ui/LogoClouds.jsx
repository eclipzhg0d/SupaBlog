import React from "react";

export default function LogoClouds() {
  return (
    <section className=" md:py-12 overflow-hidden">
      <div className="container  mx-auto">
        <div className="flex flex-wrap items-center justify-center ">
          <div className="w-auto pt-6 pb-2">
            <img
              src="https://seeklogo.com/images/N/next-js-logo-7929BCD36F-seeklogo.com.png"
              alt=""
              width={100}
              className="invert"
            />
          </div>
          <div className="w-auto p-6">
            <img
              src="https://docs.polyscale.ai/assets/images/supabase-logo-wordmark--light-b617e32c858ef00be44f4e539edb774e.png"
              alt=""
              width={100}
              className="invert"
            />
          </div>
          <div className="w-auto p-6">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Tailwind_CSS_logo.svg/2560px-Tailwind_CSS_logo.svg.png"
              alt=""
              width={100}
              className="invert"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
