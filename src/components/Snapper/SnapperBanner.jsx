import Image from "next/image";
import React from "react";
import { AllImages } from "../../../public/assets/AllImages";

const SnapperBanner = () => {
  return (
    <section className="relative h-[60vh] flex items-center justify-center ">
      <Image
        src={AllImages.snapperBanner}
        alt="banner-image"
        fill
        style={{ objectFit: "cover" }}
        className="absolute inset-0 w-full h-full object-center"
      />
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div className="absolute w-full h-full z-10 text-base-color text-center flex justify-center items-center">
        <div>
          <h1 className="lg:text-7xl md:text-6xl sm:text-5xl text-3xl font-semibold mb-5">
            B.Y.O.B
          </h1>
          <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold text-secondary-color">
            Be Your Own Boss
          </h1>

          <p className="sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] mt-8 text-lg sm:text-xl mx-auto">
            As a Snapper, you have the freedom to be your own boss, setting and
            managing your own schedule. With no limits on your earnings, your
            potential for growth is limitless!
          </p>
        </div>
      </div>
    </section>
  );
};

export default SnapperBanner;
