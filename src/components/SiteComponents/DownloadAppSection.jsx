"use client";
import React, { useState } from "react";
import Container from "../ui/Container";
import Image from "next/image";
import { Button } from "antd";
import { allIcons, AllImages } from "../../../public/assets/AllImages";
import ComingSoonModal from "../ui/ComingSoonModal";

const DownloadAppSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <section className="py-20  bg-primary-color">
      <Container className="max-w-[1450px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-x-10 items-end">
          <div className="justify-self-center lg:justify-self-start xl:col-span-3">
            <Image
              src={AllImages.dualSmartPhone}
              alt="play_store"
              width={0}
              height={0}
              sizes="100vw"
              className="h-[300px] md:h-[450px] lg:h-[400px] xl:h-[600px] w-[400px] md:w-[500px]  lg:w-[800px]"
            />
          </div>
          <div className="text-center lg:justify-self-start mt-10 lg:mt-0 xl:col-span-2">
            <h2 className="text-base-color text-3xl md:text-4xl xl:text-5xl font-bold mb-7">
              Relive Your Greatest Moments
            </h2>
            <p className="text-base-color md:text-lg">
              Experience the joy of revisiting your most cherished memories. Our
              platform allows you to relive and celebrate your greatest moments,
              preserving them for you to enjoy forever.
            </p>

            <a href="/apk/photoOp.apk" download={true} target="_blank">
              <Button
                type="primary"
                className="mt-10 mb-8 px-10 py-7 text-lg md:text-2xl bg-secondary-color border-none text-base-color font-bold rounded-3xl shadow-inner shadow-[#ffffff40]"
              >
                Download App
              </Button>
            </a>
            <div className="flex justify-center items-center gap-2">
              <Button
                onClick={() => {
                  showModal();
                }}
                className=" text-start gap-1 py-8  md:w-[200px] bg-section-color border-none rounded-xl"
              >
                <Image
                  src={allIcons.playstore}
                  alt="play_store"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-[20px] w-[20px] sm:h-[30px] sm:w-[30px] md:h-[40px] md:w-[40px]"
                />
                <div>
                  <p className="text-xs text-base-color mb-1">
                    Download on the
                  </p>
                  <h4 className="text-base-color text-sm sm:text-lg md:text-xl">
                    Google Play
                  </h4>
                </div>
              </Button>
              <Button
                onClick={() => {
                  showModal();
                }}
                className=" text-start gap-1 py-8  md:w-[200px] bg-section-color border-none rounded-xl"
              >
                <Image
                  src={allIcons.appleStore}
                  alt="apple_store"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-[20px] w-[20px] sm:h-[30px] sm:w-[30px] md:h-[40px] md:w-[40px]"
                />
                <div>
                  <p className="text-xs text-base-color mb-1">
                    Download on the
                  </p>
                  <h4 className="text-base-color text-sm sm:text-lg md:text-xl">
                    Apple Store
                  </h4>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </Container>
      <ComingSoonModal
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
        message={"Our Apps Will Be Available Soon."}
      />
    </section>
  );
};

export default DownloadAppSection;
