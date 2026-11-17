/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React, { Suspense } from "react";
import { aboutImg } from "../../../public/assets/AllImages";
import SectionHeader from "../ui/SectionHeader";
import Container from "../ui/Container";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export default function AboutUs() {
  return (
    <section className="relative py-12 sm:py-28 text-base-color overflow-hidden">
      <Container>
        <div className="flex flex-col items-center gap-5 sm:gap-16">
          {/* page name */}
          <h3 className="text-center text-3xl sm:text-4xl lg:text-5xl font-semibold  text-base-color">
            <span className="text-secondary-color">About</span> Us
          </h3>

          {/* 1st page section  */}
          <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center gap-10 mt-16">
            <div className="grid grid-cols-2 gap-1 sm:gap-2 w-full">
              {/* <Suspense>
                <video autoPlay muted loop className="col-span-2 rounded-xl">
                  <source src="/assets/video/video1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Suspense> */}

              <Image
                alt="about_us"
                src={aboutImg.about1}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full max-h-[300px] col-span-2  rounded-xl"
              />

              <Image
                alt="about_us"
                src={aboutImg.about2}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full max-h-[250px] rounded-xl"
              />
              <Image
                alt="about_us"
                src={aboutImg.about3}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full max-h-[250px] rounded-xl"
              />
            </div>
            <div className="w-full flex flex-col justify-center items-center text-center">
              <h2 className="text-3xl sm:text-3xl text-base-color font-semibold mb-8 lg:text-4xl">
                About Photo Op
              </h2>
              <p className="w-full sm:w-[80%] lg:w-[80%] xl:w-[80%] text-lg sm:text-xl">
                At Photo Op, we believe every moment is worth capturing and
                cherishing. Our platform makes it simple to book passionate
                Snappers (photographer) on demand, anytime, anywhere, and at an
                affordable price—whether it's a wedding, birthday, or personal
                milestone. We’re here to ensure your most unforgettable memories
                are beautifully preserved by the right Snapper, with ease and
                convenience.
              </p>
            </div>
          </div>
          {/* 2nd page section  */}
          <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center gap-10 mt-5">
            <div className="grid grid-cols-2 gap-1 sm:gap-2 w-full order-first lg:order-last">
              {/* <Suspense>
                <video autoPlay muted loop className="col-span-2 rounded-xl">
                  <source src="/assets/video/video1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Suspense> */}

              <Image
                alt="about_us"
                src={aboutImg.profesional3}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full max-h-[300px] col-span-2  rounded-xl"
              />

              <Image
                alt="about_us"
                src={aboutImg.profesional2}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full max-h-[250px] rounded-xl"
              />
              <Image
                alt="about_us"
                src={aboutImg.profesonal1}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full max-h-[250px] rounded-xl"
              />
            </div>
            <div className="w-full flex flex-col justify-center items-center text-center">
              <h2 className="text-3xl sm:text-3xl text-base-color font-semibold mb-8 lg:text-4xl ">
                Meet our Snappers
              </h2>
              <p className="w-full sm:w-[80%] lg:w-[80%] xl:w-[80%] text-lg sm:text-xl">
                Our Snappers bring diverse experiences, ensuring every moment is
                beautifully and authentically captured. They bring creativity,
                precision, and a keen eye for detail to every mini shoot,
                ensuring you get stunning photos every time.
              </p>
            </div>
          </div>
          {/* 3rd page section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center gap-10  mt-5">
            <div className="grid grid-cols-2 gap-1 sm:gap-2 w-full">
              {/* <Suspense>
                <video autoPlay muted loop className="col-span-2 rounded-xl">
                  <source src="/assets/video/video1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Suspense> */}

              <Image
                alt="about_us"
                src={aboutImg.experience2}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full max-h-[300px] col-span-2  rounded-xl"
              />

              <Image
                alt="about_us"
                src={aboutImg.experience1}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full max-h-[250px] rounded-xl"
              />
              <Image
                alt="about_us"
                src={aboutImg.experience3}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full max-h-[250px] rounded-xl"
              />
            </div>
            <div className="w-full flex flex-col justify-center items-center text-center">
              <h2 className="text-3xl sm:text-3xl text-base-color font-semibold mb-8 lg:text-4xl">
                A Seamless Experience
              </h2>
              <p className="w-full sm:w-[80%] lg:w-[80%] xl:w-[80%] text-lg sm:text-xl">
                At Photo Op, we strive to provide a seamless booking experience
                from start to finish. Our user-friendly platform ensures that
                finding and booking the right Snapper is effortless. With
                transparent pricing and a clear, straightforward process, Photo
                Op puts you in control of your mini photo session.
              </p>
            </div>
          </div>
        </div>
      </Container>
      {/* <div
        style={{
          boxShadow: " 0px 0px 200px 50px #dd112288",
        }}
        className="hidden lg:block absolute left-[-15%] sm:left-[-10%] md:left-[-15%] xl:left-[-10%] lg:top-[20%] w-[8%] h-[20vh]"
      ></div> */}
    </section>
  );
}
