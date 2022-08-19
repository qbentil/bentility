import { useState } from "react";
import Admin from "..";
import Users from "../../../admin/users";

const Page = () => {
  return (
    <Admin page={<Users />} />
  );
};

export default Page;
