import { useRouter } from "next/router";
import React, { useState } from "react";
import { useStateValue } from "../../../context/StateProvider";
import AppSettings from "./App";
import SettingsHeader from "./header";
import SecuritySettings from "./security";
import UpdateSettings from "./update";

const UserView = () => {
  const router = useRouter()
	const path = router.asPath;
	const paths = path.split("/");
	const username = paths[paths.length - 1];
  const [tab, setTab] = useState("app");
  const [{users}, dispatch] = useStateValue();
  const user = users.filter((user: any) => user.username.toLowerCase().includes(username.toLowerCase()))[0];
  return (
    <div className="w-full bg-white min-h-full px-3 py-2">
      {/* Header */}
      <SettingsHeader tab={tab} setTab={setTab} user={user} />
      {/* Body */}
      <div className="w-full h-full pt-4">
        {tab === "app" && <AppSettings user={user} />}
        {tab === "update" && <UpdateSettings user={user} />}
        {tab === "security" && <SecuritySettings user={user} />}
      </div>
    </div>
  );
};

export default UserView;
