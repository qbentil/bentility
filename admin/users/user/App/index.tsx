import React, { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { RiSecurePaymentLine } from "react-icons/ri";
import PlatformSettings from "./platform";
import Profile from "./Profile";
import Quickedit from "../editbox";
import { User } from "../../../../types";

const AppSettings = ({user}:{user:User}) => {
    const [editing, setEditing] = useState(false)
  return (
    <div className="flex items-center justify-center w-full h-ful ">
      <div className="w-full min-h-full grid grid-cols-2 font-sans">
        <PlatformSettings user={user} />
        {/*  */}
        {
            !editing ? <Profile setEditing={setEditing} user={user} /> : <Quickedit setEditing={setEditing} user={user} customClose />
        }
      </div>
    </div>
  );
};

export default AppSettings;
