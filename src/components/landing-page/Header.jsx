"use client";
import Link from "next/link";
import React, { useEffect, useState, useCallback } from "react";
import { MdClose } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";
import { FaUser, FaCaretDown } from "react-icons/fa";


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
                    className="font-normal hover:font-bold w-20 h-6 justify-center items-center px-12 text-base text-[#767676] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] hoverEffect"
                    href={link}
                  >
                    <span>{title}</span>
                  </Link>
                ))}
              </div>
            )}
            <HiMenuAlt2
              onClick={toggleSidenav}
              className="inline-block md:hidden cursor-pointer w-8 h-6 absolute top-6 right-4"
            />
            {sidenav && (
              <div className="fixed top-0 left-0 w-full h-screen bg-black text-gray-200 bg-opacity-80 z-50">
                <div className="w-[80%] h-full relative">
                  <div className="w-full h-full bg-primeColor p-6">
                    <ul className="text-gray-200 flex flex-col gap-2">
                      {navBarList.map((item) => (
                        <li
                          key={item.id}
                          className="font-normal hover:font-bold items-center text-lg text-gray-200 hover:underline underline-offset-[4px] decoration-[1px] hover:text-white md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                        >
                          <Link href={item.link} onClick={closeSidenav}>
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4">
                      <h1
                        onClick={toggleCategory}
                        className="flex justify-between text-base cursor-pointer items-center font-titleFont mb-2"
                      >
                        Shop by Category{" "}
                        <span className="text-lg">{category ? "-" : "+"}</span>
                      </h1>
                      {category && (
                        <div className="text-sm flex flex-col gap-1">
                          {[
                            "New Arrivals",
                            "Gudgets",
                            "Accessories",
                            "Electronics",
                            "Others",
                          ].map((cat) => (
                            <li key={cat} className="headerSedenavLi">
                              {cat}
                            </li>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="mt-4">
                      <h1
                        onClick={toggleBrand}
                        className="flex justify-between text-base cursor-pointer items-center font-titleFont mb-2"
                      >
                        Shop by Brand{" "}
                        <span className="text-lg">{brand ? "-" : "+"}</span>
                      </h1>
                      <ul>
                        {brand && (
                          <div className="text-sm flex flex-col gap-1">
                            {[
                              "New Arrivals",
                              "Gudgets",
                              "Accessories",
                              "Electronics",
                              "Others",
                            ].map((brd) => (
                              <li key={brd} className="headerSedenavLi">
                                {brd}
                              </li>
                            ))}
                          </div>
                        )}
                      </ul>
                    </div>
                  </div>
                  <span
                    onClick={closeSidenav}
                    className="w-8 h-8 border-[1px] border-gray-300 absolute top-2 -right-10 text-gray-300 text-2xl flex justify-center items-center cursor-pointer hover:border-red-500 hover:text-red-500 duration-300"
                  >
                    <MdClose />
                  </span>
                </div>
              </div>
            )}
          </div>
            <div className="pr-6 cursor-pointer relative">
              <div onClick={() => setShowUser(!showUser)} className="flex">
                <FaUser />
                <FaCaretDown />
              </div>
              {showUser && (
                <ul
                  className="absolute bg-black top-6 right-0 z-50 w-32 text-[#767676] h-auto p-4 pb-6"
                >
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
        </div>
      </nav>
    </div>
  );
};

export default Header;
