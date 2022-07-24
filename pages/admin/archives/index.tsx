import { useState } from "react";
import Admin from "..";
import Archives from "./__auth";

const Page = () => {
  return (
    <Admin page={<Archives />} />
  );
};

export default Page;
