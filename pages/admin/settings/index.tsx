import { useState } from "react";
import Admin from "..";
import Settings from "../../../admin/settings/";

const Page = () => {
  return (
    <Admin page={<Settings />} />
  );
};

export default Page;
