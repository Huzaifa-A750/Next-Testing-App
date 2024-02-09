'use client'


import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

import Logo2 from "../public/assets/images/Vector 12.svg";
import Logo from "../public/assets/images/Logo.svg";
import Cross from "../public/assets/images/Vector.png";
import Vector from "../public/assets/images/Vector.svg";
import ResponsiveArrow from "../public/assets/images/responsive-arrow.svg";
import UnderLine from "../public/assets/images/UnderLine.svg";
import Heroimg from "../public/assets/images/hero.png";
import DigitalExcellence from "../public/assets/images/Digital-Excellence.svg";
import UnderLine2 from "../public/assets/images/UnderLine.svg";
import Union from "../public/assets/images/Union.svg";
import Radar from "../public/assets/images/Radar.png";
import Cube from "../public/assets/images/Cube.png";
import HalfCube from "../public/assets/images/Half-Cube.svg";
import Maps from "../public/assets/images/Maps.png";
import Facebook from "../public/assets/images/Facebook.svg";
import Instagram from "../public/assets/images/Instagram.svg";
import Twitter from "../public/assets/images/Twitter.svg";
import Youtube from "../public/assets/images/Youtube.svg";
import Rocket from "../public/assets/images/rocket.svg";
import ArrowDown from "../public/assets/images/arrow-down.svg";
import Excellence from "../public/assets/images/Excellence.svg";
import Happy from "../public/assets/images/happy.svg";
import User from "../public/assets/images/user.svg";
import HTML from "../public/assets/images/HTML.png";
import Javascript from "../public/assets/images/Javascript.png";
import React from "../public/assets/images/React.png";
import Flutter from "../public/assets/images/Flutter.png";
import Bootstrap from "../public/assets/images/Bootstrap.png";
import NodeJS from "../public/assets/images/NodeJS.png";
import Python from "../public/assets/images/Python.png";
import PHP from "../public/assets/images/php.svg";
import Wordpress from "../public/assets/images/Wordpress.svg";
import Webflow from "../public/assets/images/webflow.svg";
import MicrosoftIIS from "../public/assets/images/MicrosoftIIS.svg";
import Drupal from "../public/assets/images/Drupal.svg";
import dropdownarrow from "../public/assets/images/Icon.svg";

const ContactUs = () => {
  const [isActive, setIsActive] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsActive(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  // Responsive-Navbar

  const [isActiveMobile, setIsActiveMobile] = useState(false);

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsActiveMobile(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  // Dropdown

  const dropdowndata = [
    {
      image: <Image src={Rocket} alt="Rocket" />,
      title: "Innovation at the Heart",
      content:
        "We believe in constantly challenging the status quo. Our team is dedicated to exploring new horizons, thinking outside the box, and bringing groundbreaking ideas to life.",
    },
    {
      image: <Image src={Excellence} alt="Excellence" />,
      title: "Excellence",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium cumque est expedita voluptatem porro accusantium, alias iusto delectus amet iure voluptas culpa nobis necessitatibus beatae inventore sapiente quis tempora deleniti.",
    },
    {
      image: <Image src={Happy} alt="Happy" />,
      title: "Collaborative Growth",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium cumque est expedita voluptatem porro accusantium, alias iusto delectus amet iure voluptas culpa nobis necessitatibus beatae inventore sapiente quis tempora deleniti.",
    },
    {
      image: <Image src={User} alt="User" />,
      title: "Adaptability and Agility",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium cumque est expedita voluptatem porro accusantium, alias iusto delectus amet iure voluptas culpa nobis necessitatibus beatae inventore sapiente quis tempora deleniti.",
    },
  ];

  const [selected, setSelected] = useState(false);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(false);
    }

    setSelected(i);
  };

  const [opened, setOpened] = useState(false);
  const [open, setOpen] = useState(false);

  const shift = (i) => {
    if (opened === i) {
      return setOpened(false);
    }

    setOpened(i);
  };

  const down = (i) => {
    if (open === i) {
      return setOpen(false);
    }

    setOpen(i);
  };

  const faq1 = [
    {
      title: "What industries does your company cater to?",
      content:
        "We offer a comprehensive range of services including web and mobile app development, UX/UI design, and digital marketing solutions.",
    },
    {
      title: "Tell me more about your UX/UI design services.",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nesciunt necessitatibus sint.",
    },
    {
      title: "How can digital marketing services benefit my business?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nesciunt necessitatibus sint.",
    },
    {
      title:
        "What is the typical timeline for completing a web or mobile app development project?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nesciunt necessitatibus sint.",
    },
    {
      title:
        "Is ongoing support and maintenance provided after the completion of a project?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nesciunt necessitatibus sint.",
    },
  ];

  const faq2 = [
    {
      title: "What services does your tech company provide?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nesciunt necessitatibus sint.",
    },
    {
      title: "How can I contact your team for inquiries?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nesciunt necessitatibus sint.",
    },
    {
      title: "What sets your web and mobile development services apart?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nesciunt necessitatibus sint.",
    },
    {
      title:
        "Do you provide custom solutions or use pre-built templates for websites and apps?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nesciunt necessitatibus sint.",
    },
    {
      title: "How can I request a quote for my project?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nesciunt necessitatibus sint.",
    },
  ];

  return (
    <div>
      {/* Navbar */}

      <div
        className="grid container mx-auto px-8 sm:px-3 xl:px-[70px] py-6"
        ref={menuRef}
      >
        <div className="flex justify-between md:justify-center gap-0 md:gap-x-14 lg:gap-0 lg:justify-between items-center">
          <Link href="/">
            <Image src={Logo} alt="" className="cursor-pointer" />
          </Link>

          {/* Hamburger */}

          <div className="md:hidden grid">
            <button
              className=""
              onClick={(e) => setIsActiveMobile(!isActiveMobile)}
            >
              <Image src={ResponsiveArrow} alt="Responsive-Arrow" />
            </button>
          </div>

          {/* Responsive-Navbar */}

          {isActiveMobile && (
            <div className="bg-[#FBFBFB] w-[-webkit-fill-available] top-0 left-0 md:hidden grid mx-auto absolute">
              <div className="justify-end grid">
                <div className="px-4 py-[21.67px]">
                  <Image
                    src={Cross}
                    alt="Cross"
                    className="cursor-pointer"
                    onClick={(e) => setIsActiveMobile(!isActiveMobile)}
                  />
                </div>
              </div>
              <ul className=" font-bold text-base text-black text-start">
                <li className="px-6 py-4 border-b-2 border-t-2 border-solid border-black border-opacity-10">
                  <Link href="/about">About</Link>
                </li>
                <li className="px-6 py-4 border-b-2 border-solid border-black border-opacity-10">
                  <Link href="">Blogs</Link>
                </li>
                <li className="px-6 py-4 border-b-2 border-solid border-black border-opacity-10">
                  <Link href="">Services</Link>
                </li>
                <li className="px-6 py-4 border-b-2 border-solid border-black border-opacity-10">
                  <Link href="">Contact Us</Link>
                </li>
              </ul>
            </div>
          )}

          <div className="hidden md:flex items-center gap-x-14 lg:gap-x-20">
            <div className="">
              <ul className="gap-x-10 items-center hidden md:flex font-normal">
                <li className="text-base text-black font-normal leading-6 tracking-[0.32px]">
                  <Link href="">About Us</Link>
                </li>
                <li className="text-base text-black font-normal leading-6 tracking-[0.32px]">
                  <Link href="">Blogs</Link>
                </li>
                <li
                  className="text-base text-black font-normal leading-6 tracking-[0.32px]"
                  onClick={(e) => setIsActive(!isActive)}
                >
                  <Link href="" className="flex">
                    Services
                    <Image src={Vector} alt="Vector" className="ml-[10px]" />
                  </Link>
                </li>
                <div className="md:grid hidden">
                  <div className="bg-[#2678F2] text-white px-[30px] py-[10px] rounded-3xl">
                    <Link href="">Contact Us</Link>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>

        {isActive && (
          <div className="justify-center hidden md:flex">
            <div
              className="bg-[#EFF5FD] px-4 lg:px-[130px] py-[22px] rounded-full mt-[10px] flex justify-center w-[700px] lg:w-[1000px] xl:w-[1136px]
        absolute top-[4.48rem]"
            >
              <div className="">
                <ul className=" flex gap-x-4 lg:gap-x-8 xl:gap-x-[60px] font-semibold text-black">
                  <li>
                    <Link href="">
                      <p className="hover:text-[#2678F2]">Web Development</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <p className="hover:text-[#2678F2]">Digital Marketing</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <p className="hover:text-[#2678F2]">Ecommerce</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <p className="hover:text-[#2678F2]">
                        Design and Branding
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <p className="hover:text-[#2678F2]">Others</p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Body */}

      <div>
        {/* Section-1 */}

        <div className="pt-2 sm:pt-[149px] sm:pb-10 pb-2 px-5">
          <div className="text-[#1B1B1B]  font-semibold grid justify-center text-[28px] sm:text-[45px] leading-[40px] sm:leading-[54px]">
            <h1 className="w-auto md:w-[733px] text-center">
              Navigating the Digital Depths with Innovation and{" "}
              <span className="text-[#2678F2]">
                Expertise
                <div className="w-auto md:w-[680px] grid pt-[1px] justify-center md:justify-end">
                  <Image src={UnderLine} alt="UnderLine" />
                </div>
              </span>
            </h1>
          </div>
          <div className="grid justify-center pt-[90.95px] pb-10 sm:pb-15">
            <Image src={Heroimg} alt="Hero" />
          </div>
        </div>

        {/* Section-2 */}

        <div className="container mx-auto">
          <div className="px-10 pb-8 md:pb-20 sm:pb-[151px] grid lg:flex justify-center md:justify-evenly items-center">
            <div className="justify-center grid">
              <Image src={DigitalExcellence} alt="Digital-Excelence" />
            </div>

            {/* Divider */}

            <div class="justify-center lg:flex hidden px-12">
              <div class="h-[664px] w-[1px] bg-black grid items-center">
                <div class="h-[62px] w-[13px] bg-[#2678F2] -ml-[6px]"></div>
              </div>
            </div>

            <div className="w-auto justify-center sm:w-[544px] grid lg:text-start text-center">
              <h2 className="text-[#1B1B1B] text-2xl sm:text-[40px] pr-0 lg:pr-20 xl:pr-40 font-semibold sm:leading-[48px] leading-7 mb-[13px]">
                Digital Excellence for Your Business
              </h2>
              <div className="text-[#1B1B1B] text-base  font-normal leading-6">
                TechScylla is where ambition, innovation, and experience
                converge to create impactful digital solutions. As a
                full-service software development firm, we specialize in
                crafting tools that not only meet your immediate needs but also
                drive your business forward.
                <br />
                <br />
                Our approach combines strategic insight with cutting-edge
                technology, ensuring every solution is a step towards your
                success. With TechScylla, elevate your business in the digital
                world.
                <div className="pt-8 lg:pt-[54px] grid justify-center">
                  <button className="px-8 py-3 sm:px-[60px] sm:py-5 bg-[rgb(38,120,242)] rounded-full text-white tracking-[0.32px] leading-6  text-base font-semibold">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section-3 */}

        <div className="container mx-auto mt-10 md:mt-0 grid xl:flex justify-center lg:pb-32 pb-10">
          <div className="px-4 sm:px-8 md:px-4 xl:px-16">
            <div className="justify-center grid xl:justify-start">
              <div className="w-auto sm:w-[448px]">
                <h2 className="text-[#1B1B1B] text-center sm:text-start text-2xl sm:text-[40px]  font-semibold leading-7 sm:leading-[48px] mb-0.5">
                  Engineering Digital Excellence in Four Steps
                </h2>
                <div className="justify-center sm:justify-end grid sm:w-[480px]">
                  <Image src={UnderLine2} alt="UnderLine" />
                </div>
              </div>
            </div>

            {/* Services */}

            <div className="mt-10 md:mt-20">
              {/* Row-1 */}

              <div className="grid justify-center md:justify-normal md:flex gap-x-16 mb-10 md:mb-[113px]">
                <div className="text-center md:text-start">
                  <div className="grid justify-center md:justify-start">
                    <Image
                      src={HalfCube}
                      alt="HalfCube"
                      className="mb-[14.85px]"
                    />
                  </div>

                  <h3 className="text-2xl tracking-[0.48px] leading-[50px]  font-semibold text-black mb-[8px]">
                    Discovery & Consultation
                  </h3>
                  <p className="px-6 sm:px-0 sm:w-[312px] text-black text-base  font-normal leading-6">
                    <span className="italic">“Understanding Your Vision”</span>
                    <br />
                    Our journey begins with understanding your business, goals,
                    and challenges. This phase involves discussions, requirement
                    gathering, and setting clear objectives for your project.
                  </p>
                </div>
                <div className="mt-10 md:mt-0 text-center md:text-start">
                  <div className="grid justify-center md:justify-start">
                    <Image src={Cube} alt="Cube" className="mb-[22px]" />
                  </div>

                  <h3 className="text-2xl tracking-[0.48px] leading-[50px]  font-semibold text-black mb-[8px]">
                    Strategy & Planning
                  </h3>
                  <p className="px-6 sm:px-0 sm:w-[312px] text-black text-base  font-normal leading-6">
                    <span className="italic">
                      “Crafting a Tailored Approach”
                    </span>
                    <br />
                    With the insights from the discovery phase, we develop a
                    strategic plan. This includes outlining the project scope,
                    timelines, and choosing the right technologies to meet your
                    specific needs.
                  </p>
                </div>
              </div>

              {/* Row-2 */}

              <div className="grid justify-center md:justify-normal md:flex gap-x-16">
                <div className="text-center md:text-start">
                  <div className="grid justify-center md:justify-start">
                    {" "}
                    <Image src={Union} alt="Union" className="mb-[22px]" />
                  </div>

                  <h3 className="text-2xl tracking-[0.48px] leading-[50px]  font-semibold text-black mb-[18px]">
                    Execution & Development
                  </h3>
                  <p className="px-6 sm:px-0 sm:w-[312px] text-black text-base  font-normal leading-6">
                    <span className="italic">“Bringing Ideas to Life”.</span>
                    <br />
                    Our skilled team gets to work, turning the strategy into
                    reality. Whether it's building a website, developing an app,
                    or implementing a digital solution, we ensure high-quality
                    execution with regular progress updates.
                  </p>
                </div>

                <div className="mt-10 md:mt-0 text-center md:text-start">
                  <div className="grid justify-center md:justify-start">
                    <Image src={Radar} alt="Radar" className="mb-[22px]" />
                  </div>

                  <h3 className="text-2xl tracking-[0.48px] leading-[50px]  font-semibold text-black mt-[4px] mb-[18px]">
                    Testing & Deployment
                  </h3>
                  <p className="px-6 sm:px-0 sm:w-[312px] text-black text-base  font-normal leading-6">
                    <span className="italic">“Understanding Your Vision”</span>
                    <br />
                    Our journey begins with understanding your business, goals,
                    and challenges. This phase involves discussions, requirement
                    gathering, and setting clear objectives for your project.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact us Form */}

          <div className="grid items-center justify-center mt-12 xl:mt-0">
            <div className="bg-[#303030] pb-[70px] rounded-[30px] px-6 pt-[41px] grid justify-center min-h-[280px] w-auto sm:w-[500px] md:w-[700px] xl:w-[390px] text-center">
              <h3 className="text-white text-[40px] font-medium  leading-normal">
                Contact <span className="text-[#2678F2]">us</span>
              </h3>
              <p className="text-base text-white leading-normal  font-normal">
                Let's get in touch!
              </p>
              <div className="mt-5">
                <form className="gap-y-5 grid max-w-[500px] xl:max-w-0">
                  {/* Email */}
                  <label className="hidden focus:grid text-xs text-white justify-start">
                    Email
                  </label>
                  <input
                    type="text"
                    placeholder="Email*"
                    className="font-[Poppins] font-light bg-inherit border-b-[1px] border-solid sm:w-[340px] placeholder:text-white px-2 text-white focus:outline-none focus:border-b-[1px] focus:border-solid"
                  />
                  {/* Name */}
                  <label className="hidden focus:grid text-xs text-white justify-start">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Name*"
                    className="font-[Poppins] font-light bg-inherit border-b-[1px] h-11 border-solid sm:w-[340px] placeholder:text-white px-2 text-white focus:outline-none"
                  />
                  {/* Phone-Number */}
                  <label className="hidden focus:grid text-xs text-white justify-start">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="font-[Poppins] font-light bg-inherit border-b-[1px] h-11 border-solid sm:w-[340px] placeholder:text-white px-2 text-white focus:outline-none"
                  />
                  {/* Text-Area */}
                  <textarea
                    name="Content"
                    placeholder="Message*"
                    cols="30"
                    className="font-[Poppins] mt-[10px] font-light bg-inherit border-b-[1px] border-solid sm:w-[340px] placeholder:text-white px-2 text-white h-[140px] resize-none focus:outline-none"
                  ></textarea>
                  {/* Checkbox */}
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="checkbox-secondary accent-white bg-[#303030] focus:outline-none h-4 w-4 mr-2"
                    />
                    <label
                      for="checkbox"
                      className="text-xs  font-normal leading-normal text-white"
                    >
                      I would like to receive the newsletter.
                    </label>
                  </div>
                </form>
              </div>
              <button className="mt-[37px] mb-[33px] text-[18px] font-medium leading-normal  text-white bg-[#2678F2] duration-150 rounded-md h-[37px]">
                Submit
              </button>
              <div className="relative mb-[34px]">
                <Image src={Maps} alt="Maps" className="forms3" />
                <div className="text-start absolute top-[9px] right-[9px] mb-[34px] bg-white w-[113px] h-[63px] font-[Poppins] rounded-[10px] px-[6px] py-[5px] gap-y-[2px]">
                  <p className="text-[#DE6E4B] text-xs leading-normal font-semibold">
                    Company name
                  </p>
                  <p className="text-black text-[11px] leading-normal font-normal">
                    315 W 36th St.
                  </p>
                  <p className="text-black text-[11px] leading-normal font-normal">
                    NY 10018
                  </p>
                </div>
              </div>
              <div className="flex gap-x-[15px] justify-center ">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:-mt-1 duration-150"
                >
                  <Image src={Instagram} alt="Instagram" />
                </a>
                <a
                  href="https://www.twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:-mt-1 duration-150"
                >
                  <Image src={Twitter} alt="Twitter" />
                </a>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:-mt-1 duration-150"
                >
                  <Image src={Facebook} alt="Facebook" />
                </a>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:-mt-1 duration-150"
                >
                  <Image src={Youtube} alt="Youtube" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Section-4 */}

        <div className="bg-[#D0E1FA] flex justify-center bg-opacity-[34%]">
          <div className="container justify-center grid lg:flex items-center py-12">
            <div className="justify-center grid xl:justify-start">
              <div className="w-auto sm:w-[512px] text-center sm:text-start px-4">
                <h2 className="text-black  text-2xl sm:text-[32px] font-semibold text-center md:text-start leading-[41.6px] pb-1">
                  Our Vision at TechScylla
                </h2>
                <p className="text-black leading-6  text-base text-center md:text-start md:px-0 md:pt-0">
                  We strive to empower businesses and startups by harnessing the
                  power of technology, delivering digital services that redefine
                  the boundaries of creativity and efficiency.{" "}
                </p>
              </div>

              {/* Divider-Start */}

              <div className="justify-center md:grid md:justify-normal">
                <hr class="my-10 xl:my-11 h-[1px] w-auto md:w-full xl:w-[476px] border-t-0 bg-[#54505066]" />
              </div>

              {/* Divider-End */}

              <div className="grid justify-center gap-y-10 text-center sm:text-start sm:justify-normal sm:flex gap-x-[40px]">
                <div className="w-[159px] gap-y-[10px] grid text-center">
                  <p className="text-4xl text-[#302C33] leading-[50px] font-bold  tracking-[0.72px]">
                    2x
                  </p>
                  <p className="text-black  leading-6 font-normal">
                    <strong>Lower</strong> cost compared to in-house rates
                  </p>
                </div>
                <div className="w-[159px] sm:w-[126px] gap-y-[10px] grid text-center">
                  <p className="text-4xl text-[#302C33] leading-[50px] font-bold  tracking-[0.72px]">
                    30+
                  </p>
                  <p className="text-black  leading-6 font-normal mt-0 sm:-mt-6">
                    <strong>Industries</strong> served
                  </p>
                </div>
                <div className="w-[159px] sm:w-[152px] gap-y-[10px] grid text-center">
                  <p className="text-4xl text-[#302C33] leading-[50px] font-bold  tracking-[0.72px]">
                    400+
                  </p>
                  <p className="text-black  leading-6 font-normal">
                    <strong>Projects</strong> successfully completed
                  </p>
                </div>
              </div>
            </div>

            {/* Vertical-Divider-Start */}

            <div class="hidden lg:grid">
              <div class="inline-block h-[620px] w-[1px] bg-[#54505066] lg:mx-8 xl:mx-[56px] opacity-40"></div>
            </div>

            {/* col-1 */}

            <div className="grid gap-y-2 pt-16 sm:pt-0 justify-center">
              {dropdowndata.map((items, index) => (
                <div className="w-[300px] sm:w-[500px] md:w-auto">
                  <div
                    key={index} //
                    className={`flex border-[4px] items-center w-auto px-0 sm:px-20 py-5 linear-gradient border-[#ECF3FD] border-solid rounded-[18px] bg-[#F4F4F4] justify-between cursor-pointer ${
                      selected === index
                        ? "bg-[#D0E1FA] shadow-xl transition-all duration-100 ease-in-out"
                        : "shadow-none bg-inherit border-none rounded-none" // Apply a different background color when selected
                    }`}
                    onClick={() => toggle(index)}
                  >
                    <div className="pt-2 sm:items-start grid">
                      {items.image}
                    </div>
                    <div className="grid w-[241px] sm:w-[400px] md:w-[420px] lg:w-[250px] xl:w-[420px] mx-6">
                      <div className=" justify-between text-black font-semibold leading-7 sm:leading-[50px] text-base tracking-[0.38px]">
                        {items.title}
                      </div>
                      {selected === index && (
                        <div className="text-black  text-sm md:text-base grid font-normal leading-6">
                          {items.content}
                        </div>
                      )}
                    </div>
                    <div
                      className={`items-center grid ${
                        selected === index
                          ? ""
                          : "items-center md:-mr-3 lg:-mr-9"
                      }`}
                    >
                      <Image
                        src={ArrowDown}
                        alt="ArrowDown"
                        className={`hover:-mt-1 duration-300 ${
                          selected === index ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </div>
                  <hr
                    class={`h-[1px] w-auto sm:mx-20 border-t-0 bg-[#54505066] ${
                      selected === index ? "hidden" : "grid"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section-5 */}

        <div className="container mx-auto">
          <div className="grid justify-center pt-[90px]">
            <div className="justify-center text-center pb-9 sm:pb-[78px] gap-y-2 grid px-0 md:px-4">
              <h1 className="text-black w-auto sm:w-[627px]  text-2xl sm:text-[40px] font-semibold leading-9 sm:leading-[48px] pb-2 px-2 md:px-0 sm:pb-0">
                Your Full-Spectrum Digital Partner
              </h1>
              <p className="text-black w-auto sm:w-[627px] text-base  font-normal leading-6 px-12">
                At TechScylla, we offer more than just services; we provide
                partnerships. By hiring a dedicated team from us.
              </p>
            </div>
            <div className="justify-center overflow-x-auto text-center mb-[40px] border-b-[1px] border-solid border-[#54505066]">
              <div className="flex">
                <div>
                  <button className="px-[40px] w-[236px] py-[6px] rounded-[8px] text-[#545050E5] text-[18px] font-medium  leading-8 tracking=[0.36px] hover:text-[white] mb-2 hover:bg-[#2678F2] duration-200">
                    Web Development
                  </button>
                </div>
                <div>
                  <button className="px-[40px] w-[222px] py-[6px] rounded-[8px] text-[#545050E5] text-[18px] font-medium  leading-8 tracking=[0.36px] hover:text-[white] mb-2 hover:bg-[#2678F2] duration-200">
                    Digital Marketing
                  </button>
                </div>
                <div>
                  <button className="px-[40px] w-[178px] py-[6px] rounded-[8px] text-[#545050E5] text-[18px] font-medium  leading-8 tracking=[0.36px] hover:text-[white] mb-2 hover:bg-[#2678F2] duration-200">
                    Ecommerce
                  </button>
                </div>
                <div>
                  <button className="px-[40px] w-[255px] py-[6px] rounded-[8px] text-[#545050E5] text-[18px] font-medium  leading-8 tracking=[0.36px] hover:text-[white] mb-2 hover:bg-[#2678F2] duration-200">
                    Design and Branding
                  </button>
                </div>
                <div>
                  <button className="px-[40px] w-[116] py-[6px] rounded-[8px] text-[#545050E5] text-[18px] font-medium  leading-8 tracking=[0.36px] hover:text-[white] mb-2 hover:bg-[#2678F2] duration-200">
                    SEO
                  </button>
                </div>
                <div>
                  <button className="px-[40px] w-[137px] py-[6px] rounded-[8px] text-[#545050E5] text-[18px] font-medium  leading-8 tracking=[0.36px] hover:text-[white] mb-2 hover:bg-[#2678F2] duration-200">
                    Others
                  </button>
                </div>
              </div>
            </div>

            {/* Row-1 */}

            <div className="grid justify-center items-center px-8">
              <div className="mb-0 md:mb-[50px] flex-wrap gap-y-4 flex items-center justify-center relative">
                {/* < className="flex flex-wrap gap-x-14 gap-y-7 lg:gap-x-[78px] justify-center md:mb-0 mb-7 items-center"> */}
                <button className="px-10 pt-6 pb-5 innershadow rounded-xl duration-200 grid text-black text-base font-medium items-center leading-8 tracking-[0.32px] ">
                  <div className="grid items-center justify-center gap-y-2 -mb-3">
                    <div className="grid justify-center">
                      <Image src={HTML} alt="HTML" />
                    </div>
                    <p>HTML5</p>
                  </div>
                </button>
                <button className="px-12 pt-9 pb-5 innershadow rounded-xl duration-200 gap-y-[5px] grid text-black text-base font-medium leading-8 tracking-[0.32px] ">
                  <div className="grid justify-center">
                    <Image src={Javascript} alt="Javascript" />
                  </div>
                  <p>Javascript</p>
                </button>
                <button className="px-12 pt-6 pb-5 innershadow rounded-xl duration-200 grid text-black text-base font-medium leading-8 tracking-[0.32px] ">
                  <div className="grid justify-center">
                    <Image src={React} alt="React" />
                  </div>
                  <p>React</p>
                </button>
                <button className="px-12 pt-6 -mt-0 pb-5 innershadow rounded-xl duration-200 gap-y-[4px] grid text-black text-base font-medium leading-8 tracking-[0.32px] ">
                  <div className="grid justify-center">
                    <Image src={Flutter} alt="Flutter" />
                  </div>
                  <p>Flutter</p>
                </button>

                <button className="px-12 pt-7 -mt-1 pb-5 innershadow rounded-xl duration-200 gap-y-[4px] grid text-black text-base font-medium leading-8 tracking-[0.32px] ">
                  <div className="grid justify-center">
                    <Image src={Bootstrap} alt="Bootstrap" />
                  </div>
                  <p>Bootstrap</p>
                </button>
                <button className="px-12 pt-9 pb-5 -mt-3 innershadow rounded-xl duration-200 gap-y-[4px] grid text-black text-base font-medium leading-8 tracking-[0.32px] ">
                  <div className="grid justify-center">
                    <Image src={NodeJS} alt="NodeJS" />
                  </div>
                  <p>Node.JS</p>
                </button>
                <button className="px-12 pt-6 pb-5 innershadow hidden rounded-xl duration-200 gap-y-[8px] md:grid text-black text-base font-medium leading-8 tracking-[0.32px] ">
                  <div className="grid justify-center">
                    <Image src={Python} alt="Python" />
                  </div>
                  <p>Python</p>
                </button>
              </div>

              {/* Row-2 */}

              <div className="justify-center flex-wrap gap-y-7 flex gap-x-4 mb-10 md:mb-[63px] items-center">
                <button className="px-12 pt-9 pb-5 innershadow rounded-xl duration-200 gap-y-[8px] grid text-black text-base font-medium leading-8 tracking-[0.32px] ">
                  <div className="grid justify-center">
                    <Image src={PHP} alt="PHP" />
                  </div>
                  <p>PHP</p>
                </button>
                <button className="px-12 pt-9 pb-5 innershadow rounded-xl duration-200 grid text-black text-base font-medium leading-8 tracking-[0.32px] ">
                  <div className="grid justify-center">
                    <Image src={Wordpress} alt="Wordpress" />
                  </div>
                  <p>Wordpress</p>
                </button>
                <button className="px-12 pt-9 pb-5 innershadow rounded-xl duration-200 gap-y-[12px] grid text-black text-base font-medium leading-8 tracking-[0.32px] ">
                  <div className="grid justify-center">
                    <Image src={Webflow} alt="Webflow" />
                  </div>
                  <p>Webflow</p>
                </button>

                <button className="px-12 pt-9 pb-5 innershadow rounded-xl duration-200 gap-y-[4px] grid text-black text-base font-medium leading-8 tracking-[0.32px] ">
                  <div className="grid justify-center">
                    <Image src={MicrosoftIIS} alt="MicrosoftIIS" />
                  </div>
                  <p>Microsoft IIS</p>
                </button>
                <button className="px-12 grid md:hidden pt-6 pb-5 innershadow rounded-xl duration-200 gap-y-[8px] text-black text-base font-medium leading-8 tracking-[0.32px] ">
                  <div className="grid justify-center">
                    <Image src={Python} alt="Python" />
                  </div>
                  <p>Python</p>
                </button>
                <button className="px-12 pt-9 pb-5 innershadow rounded-xl duration-200 gap-y-[18px] grid text-black text-base font-medium leading-8 tracking-[0.32px] ">
                  <div className="grid justify-center">
                    <Image src={Drupal} alt="Drupal" />
                  </div>
                  <p>Drupal</p>
                </button>
              </div>
              <div className="justify-center grid">
                <button className="py-4 px-8 sm:px-20 md:px-[200px] lg:px-[325px] text-[18px] font-semibold leading-[29px]  text-white bg-[#2678F2] duration-150 rounded-full">
                  View all Technologies
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Section-6 */}

        <div className="container mx-auto mt-16 lg:mt-[220px] pb-[65px]">
          <div className="text-black gap-x-10 xl:gap-x-20 justify-center grid text-center lg:text-start lg:flex px-8">
            <div className="font-semibold w-auto md:w-[500px]">
              <div className="gap-y-6 grid text-[45px]  text-start sm:text-center px-0 sm:px-8 mb-[60px]">
                <h1 className="leading-9 sm:leading-[54px]">FAQs</h1>
                <p className="text-[18px] font-normal  leading-[27px]">
                  Your Gateway to a Wide Spectrum of Customized Digital
                  Solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Dropdown */}

          <div className="text-black w-full gap-x-10 xl:gap-x-6 justify-center grid text-center lg:text-start lg:flex px-8">
            <div className="gap-x-10 grid  font-normal">
              <div className="">
                {faq1.map((items, index) => (
                  <div className="">
                    <div
                      key={index} //
                      className={`flex w-auto xl:w-[549px] py-5 linear-gradient justify-between cursor-pointer pb-10 ${
                        (opened === index ? "" : "",
                        index === faq2.length - 1
                          ? "lg:border-b-[1px] border-t-[1px] border-solid border-black"
                          : "border-t-[1px] border-solid border-black")
                      }`}
                      onClick={() => shift(index)}
                    >
                      <div className="grid w-auto sm:w-[400px] md:w-[600px] lg:w-[420px]">
                        <div
                          className={` text-start sm:text-[18px] leading-[27px] grid items-center justify-between text-black text-base tracking-[0.38px] ${
                            opened === index ? "font-semibold" : "font-normal"
                          }`}
                        >
                          {items.title}
                        </div>
                        {opened === index && (
                          <div className="text-black  text-sm py-6 md:text-base grid font-normal leading-6">
                            {items.content}
                          </div>
                        )}
                      </div>
                      <div
                        className={`items-center grid ${
                          opened === index ? "" : "items-center"
                        }`}
                      >
                        <Image
                          src={dropdownarrow}
                          alt="dropdownarrow"
                          className={`duration-300 ${
                            opened === index ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Faq-2 */}

            <div className="w-auto grid  font-normal">
              <div className="">
                {faq2.map((items, index) => (
                  <div className="">
                    <div
                      key={index} //
                      className={`flex w-auto xl:w-[549px] py-5 justify-between linear-gradient cursor-pointer pb-10 ${
                        (open === index ? "" : "",
                        index === faq2.length - 1
                          ? "border-b-[1px] border-t-[1px] border-solid border-black"
                          : "border-t-[1px] border-solid border-black")
                      }`}
                      onClick={() => down(index)}
                    >
                      <div className="grid w-auto sm:w-[400px] md:w-[600px] lg:w-[420px]">
                        <div
                          className={` text-start sm:text-[18px] leading-[27px] grid items-center justify-between text-black text-base tracking-[0.38px] ${
                            open === index ? "font-semibold" : "font-normal"
                          }`}
                        >
                          {items.title}
                        </div>
                        {open === index && (
                          <div className="text-black  text-sm py-6 md:text-base grid font-normal leading-6">
                            {items.content}
                          </div>
                        )}
                      </div>
                      <div
                        className={`items-center grid ${
                          open === index ? "" : "items-center"
                        }`}
                      >
                        <Image
                          src={dropdownarrow}
                          alt="dropdownarrow"
                          className={`duration-300 ${
                            open === index ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}

      <div className="bg-[#2678F2] px-6 sm:px-16 py-20">
        <div className="container mx-auto">
          <div className="grid md:flex gap-10 xl:gap-24 pb-3 justify-between">
            {/* Sub-Section-1 */}
            <div className="justify-between md:grid flex px-2 sm:px-0">
              <div className="pr-0 justify-center pb-8 sm:pb-16 hidden md:grid md:pr-10 xl:pr-[134px]">
                <Image src={Logo2} alt="Logo" className="cursor-pointer" />
              </div>
              <div className="grid md:flex gap-8 lg:gap-6 xl:gap-[51px] text-start font-medium justify-start md:justify-center">
                <ul className="text-white gap-y-[13px] md:gap-0 flex flex-col font-thin w-auto">
                  <li className="mb-2 xl:mb-6">
                    <p className="text-base  leading-6">
                      Main
                    </p>
                  </li>
                  <div className="gap-y-3 grid tracking-[0.6px]">
                    <li>
                      <a
                        href="_blank"
                        className="hover:border-b-[1px] border-white opacity-[0.72]"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="_blank"
                        className="hover:border-b-[1px] border-white opacity-[0.72]"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="_blank"
                        className="hover:border-b-[1px] border-white opacity-[0.72]"
                      >
                        Contact Us
                      </a>
                    </li>
                  </div>
                </ul>
                <ul className="text-white gap-y-[13px] mt-5 md:mt-0 md:gap-0 flex flex-col font-thin w-auto">
                  <li className="mb-2 xl:mb-6">
                    <p className="text-base  leading-6">
                      Services
                    </p>
                  </li>
                  <div className="gap-y-3 grid tracking-[0.6px]">
                    <li>
                      <a
                        href="_blank"
                        className="hover:border-b-[1px] border-white opacity-[0.72]"
                      >
                        Development
                      </a>
                    </li>
                    <li>
                      <a
                        href="_blank"
                        className="hover:border-b-[1px] border-white opacity-[0.72]"
                      >
                        Digital Marketing
                      </a>
                    </li>
                    <li>
                      <a
                        href="_blank"
                        className="hover:border-b-[1px] border-white opacity-[0.72]"
                      >
                        Ecommerce
                      </a>
                    </li>
                    <li>
                      <a
                        href="_blank"
                        className="hover:border-b-[1px] border-white opacity-[0.72]"
                      >
                        Design &#38; building
                      </a>
                    </li>
                    <li>
                      <a
                        href="_blank"
                        className="hover:border-b-[1px] border-white opacity-[0.72]"
                      >
                        Others
                      </a>
                    </li>
                  </div>
                </ul>
              </div>
              <div className="pr-0 justify-center md:hidden items-end pb-12 sm:pb-16 grid md:pr-10 xl:pr-[134px]">
                <Image src={Logo2} alt="Logo" className="cursor-pointer" />
              </div>
            </div>
            {/* Sub-Section-2 */}
            <div className="grid justify-center text-start w-auto sm:w-[500px] gap-y-3 lg:gap-y-0 xl:gap-y-6">
              <div className="gap-y-4 grid">
                <p className="text-white text-base  font-medium leading-6">
                  Lorem Ipsum
                </p>
                <p className="text-white customclass text-base  font-medium leading-6 opacity-[0.72]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Utenim ad minim veniam, quis nostrud exercitation ullamco
                  laboris
                </p>
              </div>
              <div className="gap-y-4 grid">
                <form
                  action=""
                  className="gap-x-4 items-end justify-evenly flex mt-6"
                >
                  <input
                    type="text"
                    placeholder="Enter Your Text"
                    className="placeholder:text-white placeholder:opacity-[0.72] w-full sm:w-[341px] bg-inherit text-base text-white font-normal leading-6  px-0 py-3 md:p-3 border-b-[1px] border-solid border-white focus:outline-none md:text-center text-start lg:text-start"
                  />
                  <button className="bg-white text-black  font-medium rounded-full px-6 py-3">
                    Subscribe
                  </button>
                </form>
                <p className="text-white text-sm  font-medium leading-[21px] opacity-[0.72]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor in
                </p>
              </div>
            </div>
          </div>
          <div>
            <hr className="mt-16 mb-8 h-[1px] border-t-0 bg-white" />
            <div className="grid sm:flex gap-y-4 items-center justify-start sm:justify-between">
              <div className="text-center">
                <p className="opacity-[0.72] text-white pb-16 sm:pb-0  text-sm font-normal leading-normal sm:leading-[21px]">
                  2023 TECHSCYLLA. All right reserved.
                </p>
              </div>
              <div className="hidden sm:flex gap-4 text-white text-2xl justify-center">
                <i className="fa-brands fa-facebook-f rounded-full cursor-pointer duration-200"></i>
                <i className="fa-brands fa-instagram rounded-full cursor-pointer"></i>
                <i className="fa-brands fa-twitter rounded-full cursor-pointer"></i>
                <i className="fa-brands fa-linkedin rounded-full cursor-pointer"></i>
              </div>
            </div>
            <div className="flex sm:hidden gap-4 text-white text-2xl justify-center">
              <i className="fa-brands fa-facebook-f rounded-full cursor-pointer duration-200"></i>
              <i className="fa-brands fa-instagram rounded-full cursor-pointer"></i>
              <i className="fa-brands fa-twitter rounded-full cursor-pointer"></i>
              <i className="fa-brands fa-linkedin rounded-full cursor-pointer"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
