import { useState } from "react";
import Admin from "..";
import Dashboard from "./__auth";

const Page = () => {
  return (
    <Admin page={<Dashboard />} />
  );
};

export default Page;
