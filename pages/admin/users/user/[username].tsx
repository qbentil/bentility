import { useState } from "react";
import Admin from "../..";
import SingleUser from "../../../../admin/users/user/";


const Page = () => {
  return (
    <Admin page={<SingleUser />} />
  );
};

export default Page;