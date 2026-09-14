"use client";
/* eslint-disable react/no-unescaped-entities */
// pages/thank-you.js
import React from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { buttonVariants } from "@/utils/variants";
import { motion } from "framer-motion";
import Image from "next/image";
import { AllImages } from "../../../public/assets/AllImages";

const ThankYou = () => {
  return (
    <section className=" min-h-[90vh] flex flex-col items-center justify-center  text-base-color overflow-hidden">
      <Container>
        <div className="min-h-[90vh] flex flex-col items-center justify-center bg-primary-color text-base-color">
          <Image alt="thank-you" src={AllImages.logo} className="w-40 h-32" />
          <h1 className="text-4xl md:text-6xl font-bold text-base-color mt-10 mb-6">
            We'll Be In Touch!
          </h1>
          <p className="text-lg md:text-xl sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] mx-auto mb-8 text-center">
            Thank you for registering as a{" "}
            <span className="text-secondary-color">Snapper</span>! We are
            reviewing your application, and you will receive a confirmation
            message soon.
          </p>
          <Link href="/">
            <motion.button
              variants={buttonVariants}
              whileHover={"hover"}
              whileTap="tap"
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 7,
              }}
              className="flex items-center justify-center w-full px-16 py-3 border !border-secondary-color hover:border-secondary-color text-xl !text-base-color bg-secondary-color font-semibold rounded-lg mt-8"
            >
              Go Back To Home
            </motion.button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default ThankYou;
