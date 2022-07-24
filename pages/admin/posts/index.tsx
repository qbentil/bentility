import { useState } from "react";
import Admin from "..";
import Posts from "./__auth";

const Page = () => {
  return (
    <Admin page={<Posts />} />
  );
};

export default Page;
