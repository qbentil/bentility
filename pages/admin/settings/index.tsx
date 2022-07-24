import { useState } from "react";
import Admin from "..";
import Settings from "./__auth";

const Page = () => {
  return (
    <Admin page={<Settings />} />
  );
};

export default Page;
