"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import Logo from "../Logo";
import sidebarItems from "./components/sidebarItems";

const Sidebar = () => {
  const pathName = usePathname();
  return (
    <div className="w-1/6 hidden lg:block border-r">
      <div className="sticky top-0 z-9999 flex  h-20 w-full shadow-sm dark:shadow-gray-900 space-x-4 p-4 justify-between items-center">
        <Logo />
      </div>
      <div className="h-full overflow-y-auto">
        <ul className="flex flex-col py-4 space-y-1">
          {sidebarItems.map((item, index) => (
            <Fragment key={index}>
              <li className="px-5">
                <div className="flex flex-row items-center h-8">
                  <div className="text-sm font-light tracking-wide dark:text-gray-200">
                    {item.title}
                  </div>
                </div>
              </li>
              {item.children?.map((child, childIndex) => (
                <Fragment key={childIndex}>
                  {child.subChildren ? (
                    <Accordion type="single" collapsible key={childIndex}>
                      <AccordionItem
                        value={`item-${childIndex}`}
                        className="border-b-0"
                      >
                        <AccordionTrigger
                          className={`w-full flex flex-row gap-2 justify-between items-center h-12 focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-white border-l-4 border-transparent hover:border-indigo-500 hover:no-underline pl-4 pr-2 tracking-wide truncate `}
                        >
                          <span className="flex items-center gap-2">
                            {child.icon}
                            {child.name}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="pb-0">
                          {child.subChildren.map((subChild, subChildIndex) => (
                            <Link href={subChild.link} key={subChildIndex}>
                              <button
                                className={`w-full flex flex-row gap-2 items-center h-11 focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-white border-l-4 hover:border-indigo-500 pl-8 text-sm tracking-wide truncate pr-4 ${
                                  subChild.active
                                    .split("||")
                                    .map((path) => path.trim())
                                    .some((path) => pathName === path)
                                    ? "border-indigo-500 bg-gray-100 dark:bg-gray-900 "
                                    : "border-transparent"
                                }`}
                              >
                                {subChild.icon}
                                {subChild.name}
                              </button>
                            </Link>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ) : (
                    <Link href={child.link} key={childIndex}>
                      <button
                        className={`relative w-full flex flex-row items-center h-12 focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-white border-l-4 hover:border-indigo-500 pr-4 ${
                          child.active
                            .split("||")
                            .map((path) => path.trim())
                            .some((path) => pathName === path)
                            ? "border-indigo-500 bg-gray-100 dark:bg-gray-900 "
                            : "border-transparent"
                        }`}
                      >
                        <span className="inline-flex justify-center items-center ml-4">
                          {child.icon}
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">
                          {child.name}
                        </span>
                      </button>
                    </Link>
                  )}
                </Fragment>
              ))}
            </Fragment>
          ))}
        </ul>
        <div className="h-20"></div>
      </div>
    </div>
  );
};

export default Sidebar;
