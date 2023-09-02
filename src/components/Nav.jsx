"use client";

import Link from "next/link";
import Logo from "./ui/Logo";
import { usePathname } from "next/navigation";
import Alert from "./ui/Alert";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
} from "@clerk/nextjs";

const navLink = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Posts",
    link: "/posts",
  },
  {
    name: "Create a Post",
    link: "/new",
  },
];

export default function Nav() {
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <Alert />
      <div className="text-slate-400 py-5 px-10 border-b border-zinc-900 flex items-center justify-between sticky top-0 z-10  backdrop-blur-xl  ">
        <div className="flex gap-5 items-center justify-between w-full">
          <Logo />
          <div className="hidden md:flex items-center gap-5 pl-5 flex-1 text-sm">
            {navLink.map(({ link, name }) => (
              <Link
                key={name}
                href={link}
                className={`${
                  pathname === link ? "text-slate-300" : "text-slate-400"
                }`}
              >
                {name}
              </Link>
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="text-md"
              onClick={() => setToggle((prevState) => !prevState)}
            >
              <FaBars />
            </button>
          </div>
          <div className="hidden md:flex items-center gap-3 text-white">
            <SignedIn>
              <UserButton />
              <SignOutButton>
                <button className="px-3 text-sm rounded-md py-1 bg-zinc-900 text-zinc-300 hover:text-red-400 transition duration-300">
                  Sign Out
                </button>
              </SignOutButton>
            </SignedIn>
            <SignedOut>
              <SignInButton>
                <button className="px-3 text-sm rounded-md py-1 bg-green-500  text-zinc-900 hover:bg-green-300  transition duration-300">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </div>

      {toggle && (
        <div className="flex flex-col gap-5 text-lg p-5 border-b border-zinc-900">
          {navLink.map(({ link, name }) => (
            <Link
              key={name}
              href={link}
              onClick={() => setToggle(false)}
              className={`${
                pathname === link ? "text-slate-300" : "text-slate-400"
              }`}
            >
              {name}
            </Link>
          ))}
          <div>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton>
                <button className="px-3 text-sm rounded-md py-2 bg-green-500  text-zinc-900 hover:bg-green-300  transition duration-300">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      )}
    </>
  );
}
