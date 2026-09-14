"use client";
import React from "react";
import Container from "../ui/Container";
import { Form, Input, Typography } from "antd";
import { motion } from "framer-motion";
import { buttonVariants } from "@/utils/variants";
import { HiOutlineMail } from "react-icons/hi";
import { BsPerson, BsCardText, BsFillSendFill } from "react-icons/bs";
import { BiSolidMessageDetail } from "react-icons/bi";
import { toast } from "sonner";
import { contactUs } from "@/app/actions/ContactUs";

const ContactUs = () => {
  const [form] = Form.useForm();
  const { TextArea } = Input;
  const onFinish = async (values) => {
    const toastId = toast.loading("Message Sending...");

    try {
      const data = await contactUs({ ...values, role: "user" });
      if (data.success) {
        toast.success("Message Send Successfully", {
          id: toastId,
          duration: 2000,
        });
        form.resetFields(); // Reset the form fields after successful submission
      } else {
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
    <section className="text-base-color bg-primary-color py-16">
      <h3 className="text-center text-4xl sm:text-5xl lg:text-6xl font-semibold mb-10 text-base-color">
        <span className="text-secondary-color">Contact</span> Us
      </h3>
      <Container className="max-w-[1024px]">
        <Form
          form={form}
          layout="vertical"
          className="bg-transparent w-full"
          onFinish={onFinish}
        >
          <Typography.Title level={4} style={{ color: "#fafafa" }}>
            <div className="flex items-center gap-2">
              <div>
                <BsPerson className="mt-[5px] text-secondary-color" />
              </div>{" "}
              <p className="m-0">Name</p>
            </div>
          </Typography.Title>
          <Form.Item
            name="name"
            className="text-base-color  mb-5"
            rules={[
              {
                required: true,
                message: "Name is Required",
              },
            ]}
          >
            <Input
              placeholder="Enter your name"
              className="py-2 px-3 text-xl !bg-primary-color border !border-input-color !text-base-color focus:bg-transparent "
            />
          </Form.Item>

          <Typography.Title level={4} style={{ color: "#fafafa" }}>
            <div className="flex items-center gap-2">
              <div>
                <HiOutlineMail className="mt-[5px] text-secondary-color" />
              </div>{" "}
              <p className="m-0">Email</p>
            </div>
          </Typography.Title>
          <Form.Item
            type="email"
            name="email"
            className="text-base-color  mb-5"
            rules={[
              {
                required: true,
                message: "Email is Required",
              },
            ]}
          >
            <Input
              placeholder="Enter your email"
              className="py-2 px-3 text-xl !bg-primary-color border !border-input-color !text-base-color focus:bg-transparent "
            />
          </Form.Item>

          <Typography.Title level={4} style={{ color: "#fafafa" }}>
            <div className="flex items-center gap-2">
              <div>
                <BsCardText className="mt-[5px] text-secondary-color" />
              </div>{" "}
              <p className="m-0">Subject</p>
            </div>
          </Typography.Title>
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
              placeholder="Enter your Subject"
              className="py-2 px-3 text-xl !bg-primary-color border !border-input-color !text-base-color focus:bg-transparent "
            />
          </Form.Item>

          <Typography.Title level={4} style={{ color: "#fafafa" }}>
            <div className="flex items-center gap-2">
              <div>
                <BiSolidMessageDetail className="mt-[5px] text-secondary-color" />
              </div>{" "}
              <p className="m-0">Message</p>
            </div>
          </Typography.Title>
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
              placeholder="Enter your Message"
              rows={6}
              className="py-2 px-3 text-xl !bg-primary-color border !border-input-color !text-base-color focus:bg-transparent "
            />
          </Form.Item>

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
              <BsFillSendFill className="mr-2" /> <p> Send Message</p>
            </motion.button>
          </Form.Item>
        </Form>
      </Container>
    </section>
  );
};

export default ContactUs;
