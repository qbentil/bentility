import { useState } from "react";
import Admin from "..";
import Categories from "./__auth";

const Page = () => {
  return (
    <Admin page={<Categories />} />
  );
};

export default Page;
