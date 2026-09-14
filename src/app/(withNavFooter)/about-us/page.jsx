import Container from "@/components/ui/Container";
import React from "react";

export const metadata = {
  title: "About PhotoOp",
  description: "photographer booking app",
};

export default function AboutUs() {
  return (
    <div>
      <Container>
        <div className="px-3 md:px-5 lg:px-8 xl:px-0 my-14 md:my-20">
          <p className="text-center sm:text-start text-lg sm:text-3xl font-semibold text-base-color">
            About Us
          </p>
          <div className="border-t border-secondary-color my-5"></div>
          <div className="flex flex-col gap-6 text-xs sm:text-lg text-justify text-base-color">
            <p>
              Welcome to PhotoOp, the premier photographer booking app. We
              connect you with skilled Snappers for any occasion—from weddings
              to corporate events—anytime, anywhere. Our platform is designed
              for your convenience, making booking easy and saving you time,
              money, and effort. With PhotoOp, capturing your special moments
              and enjoying a memorable mini-photo shoot has never been more
              easy.
            </p>
            <div className="flex flex-col gap-1">
              <p>Thank you for choosing Photo Op!</p>
              <p className="sm:text-xl font-semibold text-secondary-color">
                The Photo Op Team
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
