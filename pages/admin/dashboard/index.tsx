import { useState } from "react";
import Admin from "..";
import Dashboard from "../../../admin/dashboard";

const Page = () => {
  return (
    <Admin page={<Dashboard />} />
  );
};

export default Page;
