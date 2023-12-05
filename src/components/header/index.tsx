"use client";
import React from "react";
import { ModeToggle } from "./components/DarkModeToggle";
import MyAvatar from "./components/Avatar";
import Logo from "../Logo";
import { Button } from "../ui/button";
import { usePathname, useRouter } from "next/navigation";
import { ArrowLeftSquare } from "lucide-react";

const Header = () => {
  const router = useRouter();
  const pathName = usePathname();

  return (
    <header className="sticky top-0 z-50 flex bg-white dark:bg-[#020817] h-20  w-full shadow-sm dark:shadow-gray-900 space-x-4 p-4 justify-between  items-center">
      <div className="lg:hidden">{/* <Logo /> */}</div>
      <div className="flex space-x-4 items-center">
        <ModeToggle />
        <MyAvatar />
      </div>
    </header>
  );
};

export default Header;
