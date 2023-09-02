"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";


import MenuIcon from "./MenuIcon"; // Relative path to MenuIcon component
import CloseIcon from "./CloseIcon";

const Nav = () => {
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const toggleDropdownMenu = () => {
    setToggleDropdown(!toggleDropdown);
  };
  

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md p-4 z-10 ">
      <div className="flex-between ">
        <Link href="/" className="flex gap-2 items-center">
          <Image
            src="/assets/images/dog.gif"
            alt="logo"
            width={100}
            height={100}
            className="object-contain"
            loading="lazy"
          />
          <p className="logo_text text-base sm:text-xs md:text-lg">DoggoTales</p>
        </Link>

        {/* Desktop Navigation */}
        <div className="sm:flex hidden mr-20">
          <div className="flex gap-3 md:gap-5">
            <Link href="/" className="outline_btn">
              Home
            </Link>
            <Link href="/blogs" className="outline_btn">
              Blogs
            </Link>
            <Link href="/Funny" className="outline_btn">
              Funny
            </Link>
          </div>
        </div>


        {/* Mobile Navigation */}
        <div className="sm:hidden flex relative">
          <div className="flex items-center">
            {toggleDropdown ? (
              <CloseIcon onClick={toggleDropdownMenu} />
            ) : (
              <MenuIcon onClick={toggleDropdownMenu} />
            )}

            {toggleDropdown && (
              <div className="dropdown">
                <Link href="/" className="outline_btn" onClick={toggleDropdownMenu}>
                  Home
                </Link>
                <Link href="/blogs" className="outline_btn" onClick={toggleDropdownMenu}>
                  Blogs
                </Link>
                <Link href="/Funny" className="outline_btn" onClick={toggleDropdownMenu}>
                  Funny
                </Link>
              </div>
            )}
          </div>
          {/* ... your sign-in buttons ... */}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
