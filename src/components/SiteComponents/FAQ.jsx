"use client";
import React, { useRef, useState } from "react";
import Container from "../ui/Container";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Accordion from "../ui/Accordion";

const FAQ = () => {
  const [activeButton, setActiveButton] = useState("general");
  const ref = useRef(null);
  const isInView = useInView(ref);

  const generalData = [
    {
      title: "What is PhotoOp?",
      content:
        "PhotoOp is a mobile app that connects you with Snappers for any occasion, making bookings for weddings, corporate events, or personal photoshoots simple, convenient, and affordable.",
    },
    {
      title: "How does it work? ",
      content:
        "Browse available Snappers, view portfolios, and choose the best fit for your needs. After booking, your Snapper will capture the event, and you'll receive your photos via the app.",
    },
    {
      title: "What types of events can I book?",
      content:
        "You can book Snappers for personal shoots, weddings, corporate events, family gatherings, and more.",
    },
  ];

  const aboutSnappersData = [
    {
      title: "What’s a Snapper?",
      content:
        "A type of Photographer who has a wide range of experience, creative flair, flexibility, and meticulous attention.",
    },
    {
      title: "Do I have to be a professional Photographer?",
      content: "No, no experience is required.",
    },
    {
      title: " What is required to become a Snapper?",
      content: "A Smartphone with at least a 12 megapixels camera.",
    },
    {
      title: "What’s the age requirement to be a Snapper?",
      content: "You must be at least 18.",
    },
  ];

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView && { opacity: 1 }}
      transition={{ duration: 0.1 }}
      className="py-10 overflow-hidden my-10 lg:my-20"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div>
            <h3 className=" text-4xl sm:text-5xl font-semibold mb-10 text-secondary-color">
              Frequently{" "}
              <span className="text-base-color">Asked Questions</span>
            </h3>
            <div className="flex flex-col gap-2">
              <div
                className="flex items-center gap-2"
                onClick={() => setActiveButton("general")}
              >
                {activeButton === "general" ? (
                  <div className="h-1 w-10 rounded-full bg-secondary-color"></div>
                ) : (
                  <div className="h-1 w-10 rounded-full bg-transparent"></div>
                )}
                <h3
                  className={`cursor-pointer text-xl text-base-color ${
                    activeButton === "general" && "font-bold"
                  }`}
                >
                  General
                </h3>
              </div>
              <div
                className="flex items-center gap-2"
                onClick={() => setActiveButton("aboutSnappers")}
              >
                {activeButton === "aboutSnappers" ? (
                  <div className="h-1 w-10 rounded-full bg-secondary-color"></div>
                ) : (
                  <div className="h-1 w-10 rounded-full bg-transparent"></div>
                )}
                <h3
                  className={`cursor-pointer text-xl text-base-color ${
                    activeButton === "aboutSnappers" && "font-bold"
                  }`}
                >
                  About Snappers
                </h3>
              </div>
            </div>
          </div>
          <div>
            {activeButton === "general" ? (
              <div>
                {generalData.map((item, index) => (
                  <Accordion
                    key={index}
                    title={item.title}
                    content={item.content}
                  />
                ))}
              </div>
            ) : activeButton === "aboutSnappers" ? (
              <div>
                {aboutSnappersData.map((item, index) => (
                  <Accordion
                    key={index}
                    title={item.title}
                    content={item.content}
                  />
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </motion.section>
  );
};

export default FAQ;
