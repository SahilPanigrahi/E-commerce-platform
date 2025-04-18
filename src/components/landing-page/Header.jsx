"use client";
import Link from "next/link";
import React, { useEffect, useState, useCallback } from "react";
import { MdClose } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";
import { FaUser, FaCaretDown } from "react-icons/fa";
import { usePathname } from "next/navigation";

const navBarList = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Shop", link: "/shop" },
  { id: 3, title: "About", link: "/about" },
];

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [sidenav, setSidenav] = useState(false);
  const [category, setCategory] = useState(false);
  const [brand, setBrand] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const pathname = usePathname();

  // Efficiently handle window resize for menu display
  const handleResize = useCallback(() => {
    setShowMenu(window.innerWidth >= 667);
  }, []);

  useEffect(() => {
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Add resize event
    return () => window.removeEventListener("resize", handleResize); // Cleanup on unmount
  }, [handleResize]);

  // Toggle sidenav visibility
  const toggleSidenav = useCallback(() => {
    setSidenav((prev) => !prev);
  }, []);

  // Close sidenav when a link is clicked
  const closeSidenav = useCallback(() => {
    setSidenav(false);
  }, []);

  // Toggle category/brand sections
  const toggleCategory = useCallback(() => {
    setCategory((prev) => !prev);
  }, []);
  const toggleBrand = useCallback(() => {
    setBrand((prev) => !prev);
  }, []);

  return (
    <div className="w-full h-20 bg-white sticky top-0 z-50 border-b-[1px] border-b-gray-200">
      <nav className="h-full px-4 max-w-[1600px] mx-auto relative">
        <div className="flex items-center justify-between h-full md:px-10">
          <Link href="/">
            <div className="font-bold md:text-lg md:leading-5 text-black hover:text-[#888888]">
              Shopping Website
            </div>
          </Link>
          <div>
            {showMenu && (
              <div className="flex items-center gap-2">
                {navBarList.map(({ id, title, link }) => (
                  <Link
                    key={id}
                    className={`font-normal hover:font-bold w-20 h-6 justify-center items-center px-12 text-base text-[#767676] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] hoverEffect ${
                      pathname === link
                        ? "font-bold text-black underline"
                        : "text-[#767676]"
                    }`}
                    href={link}
                  >
                    <span>{title}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div className="pr-6 cursor-pointer relative">
            <div onClick={() => setShowUser(!showUser)} className="flex">
              <FaUser />
              <FaCaretDown />
            </div>
            {showUser && (
              <ul className="absolute bg-black top-6 right-0 z-50 w-32 text-[#767676] h-auto p-4 pb-6">
                <Link href="/signin">
                  <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                    Login
                  </li>
                </Link>
                <Link onClick={() => setShowUser(false)} href="/signup">
                  <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer whitespace-nowrap">
                    Sign Up
                  </li>
                </Link>
                <Link onClick={() => setShowUser(false)} href="/profile">
                  <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                    Profile
                  </li>
                </Link>
              </ul>
            )}
          </div>
          <div className="pr-6 cursor-pointer relative">
            <div onClick={() => setShowNav(!showNav)} className="flex">
              <HiMenuAlt2
                className="inline-block sm:hidden cursor-pointer w-8 h-6"
              />
            </div>
            {showNav && (
              <ul className="absolute bg-black top-6 right-0 z-50 w-32 text-[#767676] h-auto p-4 pb-6">
                <Link href="/">
                  <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                    Home
                  </li>
                </Link>
                <Link onClick={() => setShowNav(false)} href="/shop">
                  <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer whitespace-nowrap">
                    Shop
                  </li>
                </Link>
                <Link onClick={() => setShowNav(false)} href="/about">
                  <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                    About
                  </li>
                </Link>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
