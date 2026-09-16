import Container from "@/components/ui/Container";
import React from "react";

export const metadata = {
  title: "Delete Account",
};

const steps = [
  {
    title: "Step 1: Open Settings",
    description: 'Go to your profile and tap "Settings".',
    img: "https://res.cloudinary.com/nuzyf0ud/image/upload/v1789538741/Step_1_Delete.png",
    alt: "Open Settings",
  },
  {
    title: 'Step 2: Choose "Delete Account"',
    description: 'Scroll to the bottom and tap "Delete Account".',
    img: "https://res.cloudinary.com/nuzyf0ud/image/upload/v1789538887/Step_2_Delete.png",
    alt: "Choose Delete Account",
  },
  {
    title: "Step 3: Confirm Your Identity and Account Deletion",
    description:
      "When prompted, enter your account password or complete the required verification to confirm your identity.",
    img: "https://res.cloudinary.com/nuzyf0ud/image/upload/v1789539010/Step_3_Delete.png",
    alt: "Confirm Identity",
  },
];

export default function DeleteAccount() {
  return (
    <div>
      <Container>
        <div className="px-3 md:px-5 lg:px-8 xl:px-0 my-14 md:my-20">
          <p className="text-sm text-center sm:text-start sm:text-3xl font-semibold text-base-color">
            Steps to Delete Your Account
          </p>
          <div className="border-t border-secondary-color my-5"></div>
          <p className="text-sm sm:text-lg text-justify text-base-color mb-10">
            Follow these steps to permanently delete your account from the{" "}
            <strong>Photo Op</strong> app.
          </p>

          <div className="flex flex-col gap-12">
            {steps.map((step) => (
              <div
                key={step.title}
                className="flex flex-col items-center text-center gap-4"
              >
                <p className="font-bold text-secondary-color text-base sm:text-xl">
                  {step.title}
                </p>
                <p className="text-sm sm:text-lg text-base-color max-w-2xl">
                  {step.description}
                </p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={step.img}
                  alt={step.alt}
                  className="max-w-[320px] max-h-[400px] w-full h-auto object-contain border border-zinc-700 rounded-lg p-1 bg-white"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
