import { useState } from "react";
import Admin from "..";
import Posts from "../../../admin/posts";

const Page = () => {
  return (
    <Admin page={<Posts />} />
  );
};

export default Page;
