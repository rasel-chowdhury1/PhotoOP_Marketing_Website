import Container from "@/components/ui/Container";
import React from "react";

export const metadata = {
  title: "Support",
};

export default function Support() {
  return (
    <div>
      <Container>
        <div className="px-3 md:px-5 lg:px-8 xl:px-0 my-14 md:my-20">
          <p className="text-sm text-center sm:text-start sm:text-3xl font-semibold text-base-color">
            Support
          </p>
          <div className="border-t border-secondary-color my-5"></div>

          <div className="flex flex-col gap-6 text-sm sm:text-lg text-justify text-base-color">
            <p>
              If you face any issues while using the <strong>Photo Op</strong>{" "}
              app or have any questions, feel free to contact us.
            </p>

            <ul className="px-6 flex flex-col gap-1">
              <li className="list-disc marker:text-secondary-color">
                App usage issues
              </li>
              <li className="list-disc marker:text-secondary-color">
                Account-related help
              </li>
              <li className="list-disc marker:text-secondary-color">
                Booking or payment questions
              </li>
              <li className="list-disc marker:text-secondary-color">
                Feedback and suggestions
              </li>
            </ul>

            <div className="flex flex-col gap-1">
              <p>
                <span className="font-bold text-secondary-color">Email:</span>{" "}
                <a
                  href="mailto:contact@photooprps.com"
                  className="text-secondary-color"
                >
                  contact@photooprps.com
                </a>
              </p>
              <p>
                <span className="font-bold text-secondary-color">
                  Support Availability:
                </span>{" "}
                24/7, 7 days a week
              </p>
            </div>

            <p>
              We aim to respond as quickly as possible and help resolve your
              concerns.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
