import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://arcadiaastronautics.recruitee.com/"
            className="flex items-center mb-4 sm:mb-0"
            target="_blank"
          >
            <Image src="/logo.png" alt="Arcadia Logo" width={40} height={40} />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Arcadia
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a
                href="https://arcadia.dev/contact-us.html"
                className="hover:underline"
                target="_blank"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a
            href="https://arcadiaastronautics.recruitee.com/"
            className="hover:underline"
            target="_blank"
          >
            Arcadia™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
