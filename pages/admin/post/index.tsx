import { useState } from "react";
import Admin from "..";
import Post from "./__auth";

const Page = () => {
  return (
    <Admin page={<Post />} />
  );
};

export default Page;
