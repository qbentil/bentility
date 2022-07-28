import { useState } from "react";
import Admin from "..";
import New from "../../../admin/new";

const Page = () => {
  return (
    <Admin page={<New />} />
  );
};

export default Page;
