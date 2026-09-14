import React from "react";
import AboutApp from "../../../components/SiteComponents/AboutApp";
// import Banner from "@/components/shared/Banner";

export const metadata = {
  title: "PhotoOp App",
  description: "Ready. Pose. Snap.",
};

export default function AboutUs() {
  return (
    <div>
      {/* <Banner /> */}
      <AboutApp />
    </div>
  );
}
