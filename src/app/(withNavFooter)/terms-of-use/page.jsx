/* eslint-disable react/no-unescaped-entities */
import Container from "@/components/ui/Container";
import React from "react";

export const metadata = {
  title: "Terms of Use",
};

export default function TermsOfUse() {
  return (
    <div>
      <Container>
        <div className="px-3 md:px-5 lg:px-8 xl:px-0 text-sm sm:text-lg my-14 md:my-20 text-base-color">
          <div className="flex flex-col gap-5 text-justify">
            <div className="flex flex-col gap-2">
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-color mb-5">
                  Agreement between User and Photo Op LLC
                </h1>
                <p>
                  Welcome to Photo Op. By accessing or using the Photo Op
                  website (the “Site”) and mobile application (the “App”),
                  operated by Photo Op LLC (“Photo Op”), you agree to be bound
                  by these terms and conditions (the “Terms”). Please read them
                  carefully, and retain a copy for future reference. Photo Op
                  provides a platform that connects users with photographers
                  (“Snappers”) for photography services.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-10 px-5">
              {/* Privacy Policy */}
              <div className="text-sm sm:text-lg">
                <p className="font-bold text-secondary-color text-2xl ">
                  1. Privacy Policy
                </p>
                <p>
                  Your use of Photo Op is governed by our Privacy Policy, which
                  details our data collection and usage practices. By using the
                  Site or App, you consent to these practices.
                </p>
              </div>
              {/* Electronic Communications */}
              <div className="text-sm sm:text-lg">
                <p className="font-bold text-secondary-color text-2xl">
                  2. Electronic Communications
                </p>
                <p>
                  When you visit Photo Op or communicate with us electronically
                  (e.g., via email), you consent to receive communications from
                  us electronically. You agree that all agreements, notices,
                  disclosures, and other communications provided electronically
                  satisfy any legal requirement that such communications be in
                  writing.
                </p>
              </div>

              {/* User Accounts */}
              <div className="text-sm sm:text-lg">
                <p className="font-bold text-secondary-color text-2xl">
                  3. User Accounts
                </p>
                <p>
                  <span className="font-bold">Account Security:</span> You are
                  responsible for maintaining the confidentiality of your
                  account information, including your password, and for all
                  activities that occur under your account.
                  <br />
                  <br />
                  <span className="font-bold">Transfer Restrictions:</span> You
                  may not transfer or assign your account to any other person or
                  entity.
                  <br />
                  <br />
                  <span className="font-bold">Account Access:</span> Photo Op
                  LLC is not liable for unauthorized access to your account due
                  to theft or unauthorized use of your login credentials.
                  <br />
                  <br />
                  <span className="font-bold">Right to Refuse Service:</span>
                  Photo Op LLC reserves the right to terminate or refuse
                  service, suspend accounts, or remove content at its sole
                  discretion.
                </p>
              </div>

              {/* Children Under Thirteen */}
              <div className="text-sm sm:text-lg">
                <p className="font-bold text-secondary-color text-2xl">
                  4. Children Under Thirteen
                </p>
                <p>
                  Photo Op LLC does not knowingly collect personal information
                  from individuals under the age of thirteen. If you are under
                  18, you may use Photo Op only with the involvement of a parent
                  or guardian
                </p>
              </div>

              {/*  Cancellation and Refund Policy */}
              <div className="text-sm sm:text-lg">
                <p className="font-bold text-secondary-color text-2xl">
                  5. Cancellation and Refund Policy
                </p>
                <p>
                  <span className="font-semibold">Same-Day Sessions:</span> To
                  receive a full refund, cancellations must be made before the
                  Snapper arrives. If the Snapper has arrived but has not
                  checked in via QR code, a 50% refund will be provided. Once
                  the Snapper has checked in via QR code, no refund will be
                  issued unless the Snapper is found to be in violation of our
                  Welfare Policy. In such cases, a full refund will be issued
                  after review.
                  <br />
                  <br />
                  <span className="font-semibold">
                    Sessions Booked 24 Hours or More in Advance:{" "}
                  </span>{" "}
                  Cancellations must be made at least 12 hours before the
                  scheduled session to receive a full refund. Cancellations made
                  within the 12-hour window are not eligible for a refund.
                </p>
              </div>

              {/* Links to Third-Party Sites */}
              <div className="text-sm sm:text-lg">
                <p className="font-bold text-secondary-color text-2xl">
                  6. Links to Third-Party Sites
                </p>

                <p>
                  Photo Op may contain links to third-party websites or services
                  (“Linked Sites”). These Linked Sites are provided for your
                  convenience only, and Photo Op LLC does not endorse or control
                  them. We are not responsible for the content or practices of
                  any Linked Sites.
                </p>
              </div>

              {/* Prohibited Use and Intellectual Property */}
              <div className="text-sm sm:text-lg">
                <p className="font-bold text-secondary-color text-2xl ">
                  7. Prohibited Use and Intellectual Property
                </p>
                <p>
                  <span className="font-semibold"> License to Use: </span> You
                  are granted a non-exclusive, non-transferable, revocable
                  license to access and use Photo Op strictly in accordance with
                  these Terms. <br />
                  <br />
                  <span className="font-semibold">Prohibited Use: </span>
                  You agree not to use the Site for any unlawful purpose or in
                  any manner that could harm the Site’s functionality or impair
                  others' use of the Site. <br />
                  <br />
                  <span className="font-semibold">Intellectual Property: </span>
                  All content on the Site, including text, graphics, logos,
                  images, and software, is the property of Photo Op LLC or its
                  suppliers and is protected by intellectual property laws. You
                  may not copy, modify, distribute, or exploit any content
                  without our prior written consent.
                </p>
              </div>

              {/* International Use */}
              <div className="text-sm sm:text-lg">
                <p className="font-bold text-secondary-color text-2xl">
                  8. International Use
                </p>
                <p>
                  If you access the Site from outside the USA, you are
                  responsible for complying with local laws. You agree not to
                  use the Site in any country or manner prohibited by applicable
                  laws or regulations.
                </p>
              </div>
              {/* Indemnification */}
              <div className="text-sm sm:text-lg">
                <p className="font-bold text-secondary-color text-2xl">
                  9. Indemnification
                </p>
                <p>
                  You agree to indemnify, defend, and hold harmless Photo Op LLC
                  and its affiliates, officers, directors, employees, and agents
                  from any claims, liabilities, losses, or expenses arising from
                  your use of the Site, violation of these Terms, or
                  infringement of any third-party rights.
                </p>
              </div>
              {/* Dispute Resolution and Arbitration */}
              <div className="text-sm sm:text-lg">
                <p className="font-bold text-secondary-color text-2xl">
                  10. Dispute Resolution and Arbitration
                </p>
                <p>
                  <span className="font-semibold">
                    {" "}
                    Arbitration Agreement:{" "}
                  </span>{" "}
                  Any dispute arising from your use of the Site will be resolved
                  by binding arbitration, except for claims that can be
                  addressed in small claims court or requests for injunctive
                  relief. <br />
                  <br />
                  <span className="font-semibold">
                    Class Action Waiver:{" "}
                  </span>{" "}
                  You agree to pursue any claims individually, and waive your
                  right to participate in any class action or class-wide
                  arbitration.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div className="text-sm sm:text-lg">
                <p className="font-bold text-secondary-color text-2xl">
                  11. Limitation of Liability
                </p>
                <p>
                  To the fullest extent permitted by law, Photo Op LLC disclaims
                  all warranties, express or implied, regarding the information,
                  services, and products available on the Site. We are not
                  liable for any inaccuracies, errors, or omissions.
                </p>
              </div>
              {/* Termination of Access */}
              <div className="text-sm sm:text-lg">
                <p className="font-bold text-secondary-color text-2xl">
                  12. Termination of Access
                </p>
                <p>
                  Photo Op LLC reserves the right to terminate your access to
                  the Site or App, at its sole discretion, without notice, if
                  you violate these Terms.
                </p>
              </div>
              {/* Modifications to Terms */}
              <div className="text-sm sm:text-lg">
                <p className="font-bold text-secondary-color text-2xl">
                  13. Modifications to Terms
                </p>
                <p>
                  Photo Op LLC reserves the right to modify these Terms at any
                  time. The most recent version will be posted on the Site, and
                  your continued use of the Site constitutes acceptance of any
                  changes. We recommend reviewing the Terms periodically.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div className="text-sm sm:text-lg">
                <p className="font-bold text-secondary-color text-2xl">
                  14. Limitation of Liability
                </p>
                <p>
                  <span className="font-semibold">
                    No Guarantee of Service:{" "}
                  </span>
                  Photo Op LLC makes no representations or warranties about the
                  availability, reliability, or quality of services provided by
                  Snappers or the Site itself. You agree that your use of the
                  Site and services is at your own risk. <br />
                  <br />
                  <span className="font-semibold">Limitation on Damages: </span>
                  To the maximum extent permitted by law, Photo Op LLC, its
                  affiliates, employees, or agents will not be liable for any
                  direct, indirect, punitive, incidental, special, or
                  consequential damages arising out of or in any way connected
                  with your use of the Site, the App, or any services provided
                  by Snappers.
                  <br />
                  <br />
                  <span className="font-semibold">
                    No Liability for Third-Party Actions:{" "}
                  </span>
                  Photo Op LLC disclaims all liability for the actions,
                  omissions, and conduct of any Snappers, third-party users,
                  advertisers, or sponsors in connection with or related to your
                  use of the Site or services.
                  <br />
                  <br />
                  <span className="font-semibold">Force Majeure: </span>
                  Photo Op LLC shall not be held responsible for delays or
                  failures in performance caused by circumstances beyond its
                  reasonable control.
                </p>
              </div>

              {/* Data Protection */}
              <div className="text-sm sm:text-lg">
                <p className="font-bold text-secondary-color text-2xl">
                  15. Data Protection
                </p>
                <p>
                  <span className="font-semibold">Data Security: </span>Photo Op
                  LLC takes reasonable measures to protect the security of your
                  personal information. However, you acknowledge that no system
                  is entirely secure, and Photo Op LLC cannot guarantee the
                  absolute security of your data.
                  <br />
                  <br />
                  <span className="font-semibold">
                    Data Collection and Usage:{" "}
                  </span>{" "}
                  By using the Site or App, you consent to the collection,
                  storage, and use of your personal information as described in
                  our Privacy Policy. This includes data you provide when
                  creating an account, booking services, or communicating with
                  Snappers.
                  <br />
                  <br />
                  <span className="font-semibold">User Rights: </span> You have
                  the right to access, correct, or request deletion of your
                  personal data. If you wish to exercise these rights, please
                  contact us at [contact@photoop.com]. Photo Op LLC will comply
                  with all relevant data protection laws, including the CCPA and
                  GDPR where applicable.
                  <br />
                  <br />
                  <span className="font-semibold">
                    Data Sharing with Third Parties:{" "}
                  </span>{" "}
                  Photo Op LLC may share your personal information with Snappers
                  or third-party service providers as necessary to facilitate
                  the services offered on the Site. We do not sell your personal
                  data to third parties without your explicit consent.
                  <br />
                  <br />
                  <span className="font-semibold">
                    International Data Transfers:
                  </span>{" "}
                  If you are accessing the Site from outside the USA, your
                  personal data may be transferred to, and processed in, the
                  USA. By using the Site, you consent to such data transfers.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div>
                <p className="font-bold text-secondary-color text-2xl">
                  Contact Us:
                </p>
                <p>
                  Photo Op LLC welcomes your questions or comments regarding the
                  Terms:
                  <br />
                  Photo Op LLC
                  <br />
                  Contact@photooprps.com
                </p>
              </div>
              <div>
                <p className="font-bold text-secondary-color text-2xl">
                  Email Address:
                </p>
                <p>support@photooprps.com</p>
              </div>
              <div>
                <p className="font-bold text-secondary-color text-2xl">
                  Effective as of 10/12/2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
