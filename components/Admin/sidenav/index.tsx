import { FiHome, FiSettings } from "react-icons/fi";
import Link from "next/link";
import React from "react";
import { FaClipboardList } from "react-icons/fa";
import { CgListTree } from "react-icons/cg";
import { BsCalendarEvent } from "react-icons/bs";
import { BiLogOutCircle } from "react-icons/bi";
const Navs = [
  {
    name: "Dashboard",
    icon: <FiHome />,
    link: "",
  },
  {
    name: "Posts",
    icon: <FaClipboardList />,
    link: "/posts",
  },
  {
    name: "Categories",
    icon: <CgListTree />,
    link: "/categories",
  },
  {
    name: "Settings",
    icon: <FiSettings />,
    link: "/settings",
  },
  {
    name: "Archives",
    icon: <BsCalendarEvent />,
    link: "/archives",
  },
];

function Sidenav({ page }: { page: string }) {
  return (
    <div className="bg-white px-4 h-[90vh] w-[20%] flex items-center justify-between">
      <div className="w-[85%] mx-auto h-full flex flex-col justify-between items-center pt-20">
        <div className=" w-full h-[50vh] flex flex-col gap-2">
          {/* Navigations */}
          {Navs.map((nav, index) => (
            <Link href={`/admin/${nav.link}`} key={index}>
              <div className={`flex gap-2 items-center cursor-pointer ${page === nav.name? "hover:text-[#5C6E9A] hover:bg-transparent bg-[#EB2E64] text-white":"text-[#5C6E9A] hover:bg-[#EB2E64] hover:text-white"} py-2 px-5 w-full rounded-full transition-all duration-75 ease-in-out`}>
                {nav.icon}
                <p>{nav.name}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className=" w-full flex flex-col mb-5">
          <Link href="/admin">
            <div className="flex gap-3 items-center cursor-pointer bg-[#EB2E64] text-white hover:bg-transparent hover:text-[#5C6E9A] py-2 px-5 w-full rounded-full transition-all duration-75 ease-in-out">
              <BiLogOutCircle />
              <p>Logout</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidenav;
