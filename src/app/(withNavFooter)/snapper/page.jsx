import SnapperBanner from "@/components/Snapper/SnapperBanner";
import SnapperRegister from "@/components/Snapper/SnapperRegister";
import SnapperTab from "@/components/Snapper/SnapperTab";
import React from "react";

export const metadata = {
  title: "PhotoOp Snapper",
  description: "Ready. Pose. Snap.",
};

const page = () => {
  return (
    <div>
      <SnapperBanner />
      <SnapperTab />
      <SnapperRegister />
    </div>
  );
};

export default page;
