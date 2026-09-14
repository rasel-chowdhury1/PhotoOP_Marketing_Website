"use client";
import { useEffect, useState } from "react";
import { Button, Dropdown, ConfigProvider } from "antd";
import Image from "next/image";
import { IoLogOut, IoMenu } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { AllImages } from "../../../public/assets/AllImages";
import Link from "next/link";
import Container from "../ui/Container";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const path = usePathname();
  const [selected, setSelected] = useState(null);
  const [hovered, setHovered] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSearchClick = () => {
    setSearchVisible(!searchVisible);
  };

  const handleMobileMenuClick = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleMouseEnter2 = () => {
    setHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setHovered2(false);
  };

  const select = (index) => {
    setSelected(index);
    setMobileMenuVisible(false);
  };

  const menu = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About App",
      link: "/about-the-app",
    },
    {
      name: "Snapper",
      link: "/snapper",
    },
    {
      name: "Contact Us",
      link: "/contact-us",
    },
    {
      name: "Download App",
      link: "/download-app",
    },
  ];

  // const profile = [
  //   {
  //     name: "Personal information",
  //     link: "/profile",
  //   },
  // ];

  const dropdownItems = menu.map((item, index) => ({
    key: String(index),
    label: (
      <Link href={item.link} key={index}>
        <Button
          className={`capitalize font-medium  w-full border-2 border-base-color ${
            path === item.link ? "text-[#FAFAFA]" : "text-[#FAFAFA]"
          }`}
          style={{
            backgroundColor: "#101010",
            // color: path === item.link ? " #fafafa" : " #fafafa",
          }}
          onClick={() => select(index)}
        >
          {item.icon && (
            <Image
              src={item.icon}
              alt={item.name}
              className="inline-block mr-1 h-6 w-6 text-[#1D1D1D]"
            />
          )}
          {item.name}
        </Button>
      </Link>
    ),
  }));

  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-primary-color shadow shadow-base-color/10">
      <Container>
        <div className="flex items-center justify-between py-2 ">
          <div className="flex justify-between w-full items-center">
            <Link href="/">
              <Image
                src={AllImages.logo}
                alt="logo"
                className="w-[90px] h-[60px]"
              />
            </Link>
            <div className="ml-8 hidden lg:flex gap-x-10 space-x-4">
              {menu.map((item, index) => (
                <Link href={item.link} key={index}>
                  <Button
                    className={`px-2 gap-0 cursor-pointer capitalize font-medium text-lg duration-200 hover:scale-105 shadow-none ${
                      item.link === path
                        ? "text-base-color border-0 rounded-none border-b-2 border-b-secondary-color"
                        : "text-base-color border-none"
                    }`}
                    style={{
                      backgroundColor: "transparent",
                      color: path === item.link ? "#ffe6b9" : "white",
                    }}
                    onClick={() => select(index)}
                  >
                    {/* {item.icon && (
                      <Image
                        src={item.icon}
                        alt={item.name}
                        className="inline-block h-6 w-6"
                      />
                    )} */}
                    {item.name}
                  </Button>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex gap-2 items-center lg:hidden bg-primary-color">
            <div className="lg:hidden">
              <Dropdown menu={{ items: dropdownItems }} placement="bottomRight">
                <Button
                  className="bg-primary-color border-primary-color"
                  shape="circle"
                  icon={
                    <IoMenu className="h-7 w-7 items-center justify-center -mt-1 bg-primary-color  hover:text-base-color  text-base-color " />
                  }
                  onClick={handleMobileMenuClick}
                />
              </Dropdown>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
