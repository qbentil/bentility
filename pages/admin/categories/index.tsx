import { useState } from "react";
import Admin from "..";
import Categories from "../../../admin/categories";

const Page = () => {
  return (
    <Admin page={<Categories />} />
  );
};

export default Page;
