/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { BsFillMenuAppFill } from "react-icons/bs";
import { FiUser } from 'react-icons/fi';
import { GrSecure } from "react-icons/gr";
import { MdOutlineAppSettingsAlt, MdOutlineMarkEmailUnread } from "react-icons/md";
import { User } from '../../../types';
const SettingsHeader = ({tab, setTab, user}: {tab:string, setTab: (e:string) => void, user:User}) => {

  return (
    <div className="w-full flex bg-active-bg justify-between items-center px-5 py-3 rounded-md">
    {/* user */}
    <div className="flex items-center justify-center gap-x-3">
      {/* avatar */}
      <div className="w-16 h-16 rounded-lg bg-gray-200">
        <img
          src={user?.avatar}
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      {/* name and username */}
      <div className="flex flex-col gap-y-1 font-sans">
        <p className="font-semibold text-active">{user?.name}</p>
        <p className="text-xs text-gray-600 flex items-center justify-center gap-x-1">
          <MdOutlineMarkEmailUnread className='text-primary' />
          {user?.email} 
          <FiUser className='text-primary' /> @{user?.username}</p>
      </div>
    </div>
    {/* tab buttons */}
    <div className="grid grid-cols-3 gap-x-2 font-sans">
        <div className={`flex items-center justify-center gap-x-2 px-3 py-1 rounded-md cursor-pointer shadow-sm hover:shadow-md
            ${tab === "app" ? "bg-white text-active" : "bg-gray-100 text-gray-500"}
        `}
            onClick={() => setTab("app")}
        >
            <BsFillMenuAppFill />
            <p>App</p>
        </div>
        <div className={`flex items-center justify-center gap-x-2 px-3 py-1 rounded-md cursor-pointer shadow-sm hover:shadow-md
            ${tab === "update" ? "bg-white text-active" : "bg-gray-100 text-gray-500"}
        `}
            onClick={() => setTab("update")}
        >
            <MdOutlineAppSettingsAlt />
            <p>Update Profile</p>
        </div>
        <div className={`flex items-center justify-center gap-x-2 px-3 py-1 rounded-md cursor-pointer shadow-sm hover:shadow-md
            ${tab === "security" ? "bg-white text-active" : "bg-gray-100 text-gray-500"}
        `}
            onClick={() => setTab("security")}
        >
            <GrSecure />
            <p>Security</p>
        </div>
    </div>
  </div>
  )
}

export default SettingsHeader