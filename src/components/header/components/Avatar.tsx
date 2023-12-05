import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const MyAvatar = () => {
  return (
    <div className="flex items-center space-x-4">
      <DropdownMenu>
        <div className="text-end hidden lg:block">
          <p className="font-semibold text-base">Arodos</p>
          <p className="text-sm">Builder</p>
        </div>
        <DropdownMenuTrigger asChild>
          <Avatar className="cursor-pointer h-12 w-12">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48 p-2">
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => console.log("clicked")}
          >
            My Profile
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => console.log("clicked")}
          >
            Account Settings
          </DropdownMenuItem>
          <Link href="/sign-in">
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => console.log("clicked")}
            >
              Log Out
            </DropdownMenuItem>
          </Link>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MyAvatar;
