import React from "react";
import {
  Bell,
  FolderKanban,
  GalleryThumbnails,
  LayoutDashboard,
  PencilRuler,
  Plus,
} from "lucide-react";

type SidebarItem = {
  title: string;
  children?: {
    name: string;
    link: string;
    active: string;
    icon: JSX.Element;
    subChildren?: {
      active: string;
      name: string;
      link: string;
      icon: JSX.Element;
    }[];
  }[];
};

const sidebarItems: SidebarItem[] = [
  {
    title: "Menu",
    children: [
      {
        name: "Dashboard",
        link: "/dashboard",
        active: "/dashboard",
        icon: <LayoutDashboard />,
      },
      {
        name: "Parent",
        icon: <FolderKanban />,
        link: "",
        active: "",

        subChildren: [
          {
            name: "View Children",
            link: "/children",
            active: "/children",
            icon: <GalleryThumbnails />,
          },
          {
            name: "Add Children",
            link: "/children/create",
            active: "/children/create",
            icon: <Plus />,
          },
        ],
      },
    ],
  },
  {
    title: "Settings",
    children: [
      {
        name: "Units",
        link: "/units",
        active: "",
        icon: <PencilRuler />,
      },
      {
        name: "Notification",
        link: "/notification",
        active: "",
        icon: <Bell />,
      },
    ],
  },
];

export default sidebarItems;
