import React, { useState } from "react";
import AppSettings from "./App";
import SettingsHeader from "./header";
import SecuritySettings from "./security";
import UpdateSettings from "./update";

const SettingsView = () => {
  const [tab, setTab] = useState("app");
  return (
    <div className="w-full bg-white min-h-full px-3 py-2">
      {/* Header */}
      <SettingsHeader tab={tab} setTab={setTab} />
      {/* Body */}
      <div className="w-full h-full pt-4">
        {tab === "app" && <AppSettings />}
        {tab === "update" && <UpdateSettings />}
        {tab === "security" && <SecuritySettings />}
      </div>
    </div>
  );
};

export default SettingsView;
