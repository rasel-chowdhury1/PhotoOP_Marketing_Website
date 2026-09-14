"use client";

import Image from "next/image";
import React from "react";

import { AllImages } from "../../../public/assets/AllImages";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// import required modules
import { EffectFade, Autoplay } from "swiper/modules";
import Link from "next/link";
import { Button } from "antd";

export default function Banner() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center ">
      <Swiper
        spaceBetween={0}
        draggable={false}
        effect={"fade"}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay]}
        className="mySwiper h-[90vh] w-full "
      >
        <SwiperSlide>
          <Image
            src={AllImages.banner1}
            alt="banner-image"
            fill
            style={{ objectFit: "cover" }}
            className="absolute inset-0 w-full h-full object-center"
          />
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={AllImages.banner2}
            alt="banner-image"
            fill
            style={{ objectFit: "cover" }}
            className="absolute inset-0 w-full h-full object-center"
          />
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={AllImages.banner3}
            alt="banner-image"
            fill
            style={{ objectFit: "cover" }}
            className="absolute inset-0 w-full h-full object-center"
          />
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </SwiperSlide>
      </Swiper>

      <div className="absolute w-full h-[90vh] z-10 text-base-color text-center flex justify-center items-center">
        <div>
          <h1 className="lg:text-7l md:text-6xl sm:text-5xl text-3xl font-semibold ">
            Ready. Pose. Snap.
          </h1>
          {/* 
          <p className="mt-6 text-lg sm:text-xl ">
            Enhance your photography skills with
            <span className="text-secondary-color font-bold"> Photo OP</span>.
          </p> */}
          <Link href="/contact-us">
            <Button
              type="primary"
              className="mt-12 px-8 py-5 md:px-10 md:py-6 text-xl md:text-2xl bg-secondary-color border-none text-base-color font-semibold rounded-3xl shadow-none"
            >
              Contact us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
