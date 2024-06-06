"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
export default function Navbar() {
  const [showMenu, setShowMenu] = useState(true);
  const [showImage, setShowImage] = useState(false);

  return (
    <>
      <nav className=" flex justify-between gap-4  items-center shadow-md border-solid border-cyan-600 p-8  md:flex-col md:gap-4 md:justify-center ">
        <IoMdMenu
          size={35}
          onClick={() => setShowMenu((prevState) => !prevState)}
          className={
            showMenu ? "hidden md:flex absolute top-8 left-6" : "hidden"
          }
        />
        <RxCross2
          size={35}
          onClick={() => setShowMenu((prevState) => !prevState)}
          className={
            showMenu ? "hidden" : "hidden md:flex absolute top-8 left-6"
          }
        />
        <div className="flex gap-4 pl-16 md:absolute md:ml-0 md:top-4 md:right-4">
          <Image
            width={50}
            height={50}
            alt="no photo"
            src=""
            className="border border-solid rounded-md bg-cyan-600"
            onClick={() => setShowImage((prevState) => !prevState)}
          />
          <div
            className={
              showImage
                ? "flex flex-col justify-center items-center md:fixed md:mt-20 md:right-4 bg-slate-400 gap-8"
                : "hidden"
            }
          >
            <header className="md:flex md:top-12 md:right-12">
              Manoj's Portfolio
            </header>
            <Link href="/" className="">
              SignOut
            </Link>
          </div>
        </div>
        <div className="flex md:flex-col items-center md:gap-4">
          <input
            type="text"
            placeholder="Search"
            className="p-2 mx-2 rounded-xl"
          />
          <GoSearch size={35} />
        </div>
        <ul
          className={
            showMenu
              ? "flex justify-center items-center gap-24 mr-24  md:mr-0 md:flex-col md:gap-4 md:gap-8 md:hidden transition duration-1000"
              : "md:flex md:flex-col md:gap-6 md:pt-8 "
          }
        >
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
