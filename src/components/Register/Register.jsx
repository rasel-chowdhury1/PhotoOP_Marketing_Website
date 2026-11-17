"use client";
import { Button, ConfigProvider, Form, Input } from "antd";
import Image from "next/image";
import React from "react";
import { AllImages } from "../../../public/assets/AllImages";
import Container from "../ui/Container";
import { MdOutlineMail } from "react-icons/md";
import { FaUser, FaUserPlus } from "react-icons/fa";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { BsCardText, BsFillSendFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { buttonVariants } from "@/utils/variants";
import { registerSnapperAction } from "@/app/actions/RegisterSnapperAction";
import { contactUs } from "@/app/actions/ContactUs";
import { BiSolidMessageDetail } from "react-icons/bi";

const Register = () => {
  const image = AllImages.RegisterIDCard;
  const { TextArea } = Input;
  const [form] = Form.useForm();
  const navigate = useRouter();
  const onFinish = async (values) => {
    const toastId = toast.loading("Awesome! Waiting for register....");
    try {
      const payload = { ...values, role: "snapper" }; // Add role here
      console.log(payload);
      const data = await contactUs(payload);
      console.log(data);

      if (data.success) {
        toast.success("You Have Registered Successfully", {
          id: toastId,
          duration: 2000,
        });
        form.resetFields();
        navigate.push("/thank-you");
      } else {
        console.log(data.error);
        toast.error(data.error, {
          id: toastId,
          duration: 2000,
        });
      }
    } catch (error) {
      toast.error("Something went wrong", {
        id: toastId,
        duration: 2000,
      });
    }
  };
  return (
    <section className="">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center gap-10 min-h-[90vh] py-10">
          <div className=" hidden lg:block">
            <Image
              src={image}
              alt="register_img"
              width={image.width}
              height={image.height}
              sizes="100vw"
              // className="h-[450px] sm:h-[450px] md:h-[500px] lg:h-[650px] xl:h-[700px] w-full"
              className="h-full w-full object-cover"
            />
          </div>
          <div
            className="w-full lg:order-first sm:w-[70%] md:w-[60%] lg:w-[90%] xl:w-[70%] mx-auto bg-gradient-to-bl from-[#FAA39E] via-[#DD1122] to-[#FAA39E] 
            p-[1px] bg-[#26272b] backdrop-blur-2xl rounded-md xl:min-w-[500px]"
          >
            <div className="bg-[#26272b] backdrop-blur-2xl rounded-md p-4 sm:p-7">
              <h1 className="text-base-color font-extrabold text-4xl sm:text-5xl lg:text-5xl xl:text-6xl text-center mb-7">
                Register
              </h1>

              <Form
                form={form}
                layout="vertical"
                className="bg-transparent w-full"
                onFinish={onFinish}
              >
                <Form.Item
                  name="name"
                  className="text-base-color "
                  rules={[
                    {
                      required: "Name is Required",
                    },
                  ]}
                >
                  <Input
                    prefix={<FaUser className="text-site-color mr-2" />}
                    placeholder="Name"
                    className="py-2 px-3 text-xl bg-transparent border border-input-color text-base-color  hover:border-secondary-color  focus:border-secondary-color"
                  />
                </Form.Item>

                <Form.Item
                  name="email"
                  className="text-base-color "
                  rules={[
                    {
                      required: true,
                      message: "Email is Required",
                    },
                  ]}
                >
                  <Input
                    prefix={<MdOutlineMail className="text-site-color mr-2" />}
                    placeholder="Email"
                    type="email"
                    className="py-2 px-3 text-xl bg-transparent border border-input-color text-base-color  hover:border-secondary-color  focus:border-secondary-color"
                  />
                </Form.Item>

                {/* New Fields  */}

                <Form.Item
                  name="subject"
                  className="text-base-color mb-5"
                  rules={[
                    {
                      required: true,
                      message: "Subject is Required",
                    },
                  ]}
                >
                  <Input
                    prefix={<BsCardText className="text-site-color mr-2" />}
                    placeholder="Enter your Subject"
                    className="py-2 px-3 text-xl bg-transparent border border-input-color text-base-color  hover:border-secondary-color  focus:border-secondary-color"
                  />
                </Form.Item>

                <Form.Item
                  name="message"
                  className="text-base-color mb-5"
                  rules={[
                    {
                      required: true,
                      message: "Message is Required",
                    },
                  ]}
                >
                  <TextArea
                    prefix={
                      <BiSolidMessageDetail className="text-site-color mr-2" />
                    }
                    placeholder="Enter your Message"
                    rows={4}
                    className="py-2 px-3 text-xl bg-transparent border border-input-color text-base-color  hover:border-secondary-color  focus:border-secondary-color"
                  />
                </Form.Item>
                {/* New Fields  */}

                <Form.Item>
                  <motion.button
                    variants={buttonVariants}
                    whileTap="tap"
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 7,
                    }}
                    className="flex items-center justify-center w-full py-3 border !border-secondary-color hover:border-secondary-color text-xl !text-base-color bg-secondary-color font-semibold rounded-lg mt-8"
                    type="submit"
                  >
                    <FaUserPlus className="mr-2" /> <p> Register</p>
                  </motion.button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Register;
