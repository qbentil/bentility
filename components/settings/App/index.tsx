import React, { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { RiSecurePaymentLine } from "react-icons/ri";
import { useStateValue } from "../../../context/StateProvider";
import PlatformSettings from "./platform";
import Profile from "./Profile";
import Quickedit from "../editbox";

const AppSettings = () => {
    const [editing, setEditing] = useState(false)
  return (
    <div className="flex items-center justify-center w-full h-ful ">
      <div className="w-full min-h-full grid grid-cols-2 font-sans">
        <PlatformSettings />
        {/*  */}
        {
            !editing ? <Profile setEditing={setEditing} /> : <Quickedit setEditing={setEditing} customClose />
        }
      </div>
    </div>
  );
};

export default AppSettings;
