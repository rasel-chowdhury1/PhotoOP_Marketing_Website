"use client";
import { Button } from "antd";
import Container from "../ui/Container";
import { MdOutlineDone } from "react-icons/md";

const plans = [
  {
    plan: "Free",
    price: "$0",
    features: [
      "Voice messages anywhere",
      "Voice messages anywhere",
      "Voice messages anywhere",
    ],
    buttonStatus: "active", // 'active' or 'inactive'
  },
  {
    plan: "Premium",
    price: "$9.99",
    features: [
      "Voice messages anywhere",
      "Voice messages anywhere",
      "Voice messages anywhere",
    ],
    buttonStatus: "active",
  },
  {
    plan: "Premium Plus",
    price: "$29.99",
    features: [
      "Voice messages anywhere",
      "Voice messages anywhere",
      "Voice messages anywhere",
    ],
    buttonStatus: "inactive",
  },
];

const Subscription = () => {
  return (
    <section className="py-16 overflow-hidden my-10 lg:my-20">
      <Container>
        <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-semibold mb-20 text-base-color">
          Subscriptions
        </h1>
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="w-full min-h-[600px] max-w-[280px] md:max-w-[300px] lg:max-w-[280px] xl:max-w-[380px] mx-auto flex flex-col justify-between bg-section-color text-base-color p-7 rounded-3xl shadow-lg"
              >
                <div>
                  <h3 className="text-2xl font-bold mb-2">{plan.plan}</h3>
                  <p className="text-5xl font-bold mb-8">{plan.price}/mo</p>
                  <ul className="mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-2"
                      >
                        <div className="p-1 rounded-full bg-[#EDE9E9] -mt-4">
                          <MdOutlineDone className="size-3 text-base-color" />
                        </div>
                        <p className="text-xl text-[#EDE9E9] mb-5">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <Button className="w-full py-6 border border-secondary-color hover:border-secondary-color text-xl text-base-color bg-secondary-color font-semibold rounded-2xl mt-8">
                    Buy now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Subscription;
