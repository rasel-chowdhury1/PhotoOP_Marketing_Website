/* eslint-disable react/no-unescaped-entities */
import Container from "@/components/ui/Container";
import React from "react";

export const metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicy() {
  return (
    <div>
      <Container>
        <div className="px-3 md:px-5 lg:px-8 xl:px-0 my-14 md:my-20">
          <p className="text-sm text-center sm:text-start sm:text-3xl font-semibold text-base-color">
            Privacy Policy
          </p>
          <div className="border-t border-secondary-color my-5"></div>
          <div className="flex flex-col gap-6 text-lg text-justify text-base-color">
            <p className="text-sm sm:text-lg">
              This Privacy Policy outlines how Photo Op ("we", "us", or "our")
              collects, uses, and shares your information when you use our
              website and services.
            </p>
            <div className="px-10 text-sm sm:text-lg">
              <ul>
                <li className="list-disc font-bold text-secondary-color marker:text-secondary-color">
                  Information We Collect:{" "}
                </li>
              </ul>
              <p>
                When you use the Photo Op platform, we may collect the following
                types of information.
              </p>
            </div>

            <div className="text-sm sm:text-lg">
              <p className="font-bold text-secondary-color ">
                1. Welfare Policy:
              </p>
              <div className="px-10 text-sm sm:text-lg mt-5">
                <ul>
                  <li className="list-disc font-bold text-secondary-color marker:text-secondary-color">
                    Safety:{" "}
                  </li>
                </ul>
                <p>
                  If a user or snapper at any point of the session — prior or
                  during — feels unsafe, environment is not suitable or users
                  are unruly (this applies only to snapper) then either snapper
                  or user may reserve the right to cancel the session, provide
                  reason code, and the session will be automatically terminated.
                </p>
              </div>
              <br />
              <div className="px-10 text-sm sm:text-lg">
                <ul>
                  <li className="list-disc font-bold text-secondary-color marker:text-secondary-color">
                    Attire Policy:{" "}
                  </li>
                </ul>
                <p>
                  No pornographic sessions are allowed. You must wear
                  appropriate clothing during your session. If you are not in
                  compliance with this policy the snapper reserves the right to
                  cancel your session and you will not be refunded.
                </p>
              </div>
            </div>
            <div className="text-sm sm:text-lg">
              <p className="font-bold text-secondary-color">
                2. Profile Information:
              </p>
              <p>
                We collect information you provide when you create or edit your
                profile, including your name, email address, and contact
                details.
              </p>
            </div>

            <div className="text-sm sm:text-lg">
              <p className="font-bold text-secondary-color">
                3. Booking Information:
              </p>
              <p>
                When you book a session, we collect details such as the date,
                time, location, and type of photography session. This includes
                any preferences or special requests you make during booking.
              </p>
            </div>

            <div className="text-sm sm:text-lg">
              <p className="font-bold text-secondary-color">
                4. Payment Information:
              </p>
              <p>
                If you choose to make a booking or purchase additional services,
                we collect payment information through our third-party
                processor, Stripe, to process your transaction securely.
              </p>
            </div>

            <div className="text-sm sm:text-lg">
              <p className="font-bold text-secondary-color">
                5. Usage Information:
              </p>
              <p>
                We collect data on how you interact with the platform, including
                your browsing activity, booking preferences, and use of
                features.
              </p>
            </div>

            <div className="text-sm sm:text-lg">
              <p className="font-bold text-secondary-color">
                6. How We Use Your Information:
              </p>
              <div className="flex flex-col gap-px sm:gap-1">
                <p>
                  We may use the information we collect for the following
                  purposes:
                </p>
                <p>
                  To provide and enhance the functionality and user experience
                  of Photo Op.
                </p>
                <p>
                  To communicate with you about your account, bookings, and
                  platform updates.
                </p>
                <p>To process payments for services and bookings.</p>
                <p>
                  To personalize your experience and offer relevant
                  recommendations.
                </p>
                <p>
                  To enforce our Terms of Service and other legal agreements.
                </p>
                <p>To comply with legal obligations.</p>
              </div>
            </div>

            <div className="text-sm sm:text-lg">
              <p className="font-bold text-secondary-color">
                7. Data Security:
              </p>
              <p>
                We implement reasonable measures to safeguard your information
                from unauthorized access or misuse. However, no method of
                transmission or storage is completely secure.
              </p>
            </div>

            <div className="text-sm sm:text-lg">
              <p className="font-bold text-secondary-color">
                8. Data Retention:
              </p>
              <p>
                We retain your data for as long as necessary to provide our
                services, or as required by law, depending on the nature of the
                information.
              </p>
            </div>

            <div className="text-sm sm:text-lg">
              <p className="font-bold text-secondary-color">
                9. Children's Privacy:
              </p>
              <p>
                Photo Op is not intended for use by children under the age of
                13. We do not knowingly collect personal data from children.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
