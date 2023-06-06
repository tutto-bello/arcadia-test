import React from "react";
import Image from "next/image";
import { signOut, signIn } from "next-auth/react";
import { DefaultSession } from "next-auth";

interface NavbarProps {
  user: undefined | DefaultSession["user"];
}

const Navbar = (props: NavbarProps) => {
  const { user } = props;

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://arcadiaastronautics.recruitee.com/"
          className="flex items-center"
        >
          <Image src="/logo.png" alt="Arcadia Logo" width={40} height={40} />

          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Arcadia
          </span>
        </a>
        <div className="flex items-center md:order-2 relative">
          {user?.image ? (
            <>
              <button
                type="button"
                className="peer flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open user menu</span>
                <Image
                  src={user.image}
                  alt="Arcadia Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </button>
              <div className="z-50 hidden peer-hover:block absolute top-4 right-4 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
                <div className="px-4 py-3">
                  <span className="block text-sm text-gray-900 dark:text-white">
                    {user?.name}
                  </span>
                  <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                    {user?.email}
                  </span>
                </div>
              </div>
              <button
                className="ml-4 bg-gray-500 p-2 rounded-md hover:opacity-80"
                onClick={() => signOut()}
              >
                Sign out
              </button>
            </>
          ) : (
            <button
              onClick={() => signIn()}
              type="button"
              className="bg-gray-500 p-2 rounded-md hover:opacity-80 mt-4"
            >
              Sign in
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
