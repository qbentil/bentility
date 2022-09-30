/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { useStateValue } from "../../../context/StateProvider";
import { User } from "../../../types";

import UtilButton from "../../UtilButton";
import { BiPencil, BiTrashAlt } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { RiAdminLine, RiUser3Line } from "react-icons/ri";
import Button from "../../Button";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import Link from "next/link";
import Searchbar from "../Searchbar";
import { Empty } from "../../Promises";
import { useRouter } from "next/router";

const AllUsers = () => {
  const [{ users }, dispatch] = useStateValue();
  const [filtered, setFiltered] = useState<User[]>(users);
  const [query, setQuery] = useState("");
  const search = (query: string) => {
    setQuery(query);
    setFiltered(
      users.filter((user: User) =>
        (user?.name || user.username || user.email)
          .toLowerCase()
          .includes(query.toLowerCase())
      )
    );
  };

  return (
    <div className="w-full h-full bg-white overflow-y-scroll pb-4 cs-scroll">
      <div className="bg-white h-full px-4">
        <div>
          <div className="bg-white w-full rounded-t-lg flex justify-between items-center py-2 px-4 ">
            <p className="text-xl  font-semibold text-primary">Users</p>

            <Searchbar value={query} onSearch={search} />

            <Link href="users/new">
              <Button
                text="Add User"
                icon={<AiOutlineUsergroupAdd />}
                shape="rounded-md"
              />
            </Link>
          </div>
          <div className=" max-h-[90%]">
            {/* Table header */}
            <div className="">
              <div className="w-full  grid grid-cols-3 text-center py-2 border-b-2 border-gray-400 px-4 hover:bg-active-bg group cursor-pointer transition-all ease-in-out duration-75">
                <div className="flex justify-start">
                  <p className="text-sm font-semibold text-blue-500">Name</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-blue-500">
                    Username
                  </p>
                </div>
                <div className="flex justify-end">
                  <p className="text-sm font-semibold text-blue-500">
                    Action Buttons
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              {filtered && filtered.length > 0 ? (
                filtered.map((user: any) => <Unit user={user} key={user._id} />)
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center gap-4 text-blue-500">
                  <Empty text="No users yet. Add Users to see them here." />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Unit = ({ user }: { user: User }) => {
  const router = useRouter();
  const viewUser = () => {
    router.push({
      pathname: `users/user/${user.username}`,
    });
  };
  return (
    <div className="w-full  grid grid-cols-3 py-2 border-b-2 border-gray-200 px-4 hover:bg-active-bg group cursor-pointer transition-all ease-in-out duration-75"  onClick={viewUser}>
      <div className="flex items-center  gap-8  ">
        <img
          src={
            user.avatar ||
            "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
          }
          alt=""
          className="object-cover w-10 h-10 rounded-full"
        />
        <div className="flex items-center justify-between gap-x-8 ">
          <div className="flex flex-col ">
            <h2 className="text-active capitalize truncate">{user.name}</h2>
            <p
              className={`text-[0.7rem] ${
                user.role === "admin" ? "text-primary" : "text-gray-600"
              } flex items-center `}
            >
              {user.role === "admin" ? (
                <RiAdminLine className=" text-md mr-1 inline-block" />
              ) : (
                <RiUser3Line className="text-md mr-1 inline-block" />
              )}
              {user.email}
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <p className="text-[#4B4B4B] text-sm mx-auto w-full text-center">
          {user.username}
        </p>
      </div>
      <div className="flex items-center justify-end gap-4  ">
        <div className="flex items-center justify-center gap-5">
          <UtilButton
            icon={<BsEye />}
            color="green-500"
            title="view"
            onClick={viewUser}
          />
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
