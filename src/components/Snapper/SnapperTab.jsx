import React from "react";
import Container from "../ui/Container";
import Image from "next/image";
import { aboutImg } from "../../../public/assets/AllImages";

const SnapperTab = () => {
  return (
    <section className="relative py-12 sm:py-28 text-base-color overflow-hidden">
      <Container>
        <div className="flex flex-col items-center gap-5 sm:gap-16">
          {/* 1st page section  */}
          <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center gap-10 mt-16">
            <div className="grid grid-cols-2 gap-1 sm:gap-2 w-full">
              <Image
                alt="about_us"
                src={aboutImg.about1}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full max-h-[300px] col-span-2  rounded-xl"
              />
            </div>
            <div className="w-full ">
              <h2 className="text-3xl sm:text-3xl text-secondary-color font-semibold mb-8 lg:text-4xl">
                The best part about being a Snapper?
              </h2>
              <p className="w-full lg:w-[80%] xl:w-[80%] text-lg sm:text-xl">
                No prior experience is required! You can get started right away
                and develop your skills as you go.
              </p>
            </div>
          </div>
          {/* 2nd page section  */}
          <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center gap-10 mt-5">
            <div className="grid grid-cols-2 gap-1 sm:gap-2 w-full order-first lg:order-last">
              <Image
                alt="about_us"
                src={aboutImg.profesional3}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full max-h-[300px] col-span-2  rounded-xl"
              />
            </div>
            <div className="w-full ">
              <h2 className="text-3xl sm:text-3xl text-secondary-color font-semibold mb-8 lg:text-4xl ">
                What we look for in a Snapper
              </h2>
              <p className="w-full lg:w-[80%] xl:w-[80%] text-lg sm:text-xl">
                We encourage Snappers to bring positive energy, creativity, and
                fun to every mini shoot, ensuring clients have an unforgettable
                experience!
              </p>
            </div>
          </div>
          {/* 3rd page section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center gap-10  mt-5">
            <div className="grid grid-cols-2 gap-1 sm:gap-2 w-full">
              <Image
                alt="about_us"
                src={aboutImg.experience2}
                width={0}
                height={0}
                sizes="100vw"
                className="!w-[100vw] max-h-[300px] col-span-2  rounded-xl"
              />
            </div>
            <div className="w-full ">
              <h2 className="text-3xl sm:text-3xl text-secondary-color font-semibold mb-8 lg:text-4xl">
                Snapper Requirements
              </h2>
              <p className="w-full lg:w-[80%] xl:w-[80%] text-lg sm:text-xl">
                <span className="text-secondary-color">-</span> Must be at least
                18 years old <br />
                <span className="text-secondary-color">-</span> Must clear a
                background check
                <br /> <span className="text-secondary-color">-</span> Must have
                a smartphone with a 12-megapixel camera or higher <br />
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SnapperTab;
