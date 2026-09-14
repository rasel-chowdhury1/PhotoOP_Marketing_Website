/* eslint-disable react/no-unescaped-entities */
import { Button } from "antd";
import Link from "next/link";
import React from "react";
import Container from "../ui/Container";

const SnapperRegister = () => {
  return (
    <section className="relative py-12 sm:py-28 text-base-color overflow-hidden">
      <Container>
        <div className=" text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-base-color  mb-3 w-full sm:[w-90%] lg:w-[80%] xl:w-[70%] mx-auto">
            <span className="text-secondary-color"> Snapper </span> Registration
          </h2>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-base-color mb-12"></h2>
          <h4 className="text-[#FFFFFF] text-xl md:text-2xl lg:text-3xl mb-16 sm:w-[80%] md:w-[70%] xl:w-[60%] mx-auto">
            If you're interested in becoming a Snapper, please register here by
            clicking Register Now button!
          </h4>
          <Link href="/register">
            <Button
              type="primary"
              className="mt-5 px-8 py-5 md:px-10 md:py-6 text-xl md:text-2xl bg-secondary-color border-none text-site-color font-semibold rounded-3xl"
            >
              Register Now
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default SnapperRegister;
