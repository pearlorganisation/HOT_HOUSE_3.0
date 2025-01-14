"use client";
import React from "react";
import { SlSocialInstagram } from "react-icons/sl";
import { FiFacebook } from "react-icons/fi";
import { SiWhatsapp } from "react-icons/si";
import { FaPhone } from "react-icons/fa6";
import { FaStore } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

import Link from "next/link";
import Image from "next/image";
import logo from "../../../_assets/images/PizzaInnno_SVG.svg";

const Footer = ({ pizzaData, randomId, dispatch, getCustomizationDetails }) => {
  return (
    <div className="bg-red-800 pt-9 text-white">
      <div className="container mx-auto w-full max-w-[1166px] px-4 xl:px-0">
        <div className="flex flex-col items-center md:flex-row md:justify-between gap-x-10 sm:px-[18px] md:px-10">
          {/* Column 1: About */}
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
            <Link href="/" className="flex justify-center mb-4">
              <Image src={logo} alt="logo" width={280} />
            </Link>
          </div>

          {/* Column 2: Policies */}
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
            <h1 className="font-bold text-lg mb-4 text-center md:text-left">POLICIES</h1>
            <p className="hover:text-yellow-500 text-sm">
              <Link href="/termsAndConditions">Terms & Conditions</Link>
            </p>
            <p className="hover:text-yellow-500 text-sm">
              <Link href="/refundPolicy">Refund Policy</Link>
            </p>
            <h1 className="font-bold text-lg mt-4 mb-2 text-center md:text-left">
              Follow Us on Social Media
            </h1>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://www.facebook.com/Pizzainnolondon/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110"
              >
                <FiFacebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/pizzainnowatford/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110"
              >
                <SlSocialInstagram size={20} />
              </a>
              <a
                href="https://wa.me/+447769108542"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110"
              >
                <SiWhatsapp size={20} />
              </a>
            </div>
          </div>

          {/* Column 3: Contact */}
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start mt-4">
  <h1 className="font-bold text-lg mb-4 text-center md:text-left">CONTACT US</h1>
  <p className="flex gap-2 items-center md:items-start text-center md:text-left mb-2">
    <FaStore className="mr-2 md:mr-0" size={20} />
    <span className="block md:inline">
      167-169 The Parade High St, <br className="md:hidden" />
      Watford WD17 1NJ, United Kingdom
    </span>
  </p>
  <p className="flex gap-2 items-center justify-center md:justify-start mb-2">
    <IoMdMail className="mr-2 md:mr-0" size={20} />
    Info@pizzainno.com
  </p>
  <p className="flex gap-2 items-center justify-center md:justify-start mb-4">
    <FaPhone className="mr-2 md:mr-0" size={20} />
    +44 1923 318913
  </p>
</div>

        </div>

        {/* Footer Bottom */}
        <hr className="mt-[10px] text-white" />
        <div className="flex items-center justify-center pb-2 pt-[9px]">
          <p className="text-[10px] font-normal text-white md:text-[12px]">
            © 2024, All Rights Reserved by PizzaInno
          </p>
        </div>
      </div>

    </div>
  );
};

export default Footer;
