import { useState, useEffect } from "react";
import Admin from "..";
import Posts from "../../../admin/posts";
import { useStateValue } from "../../../context/StateProvider";
import { FETCH_DATA } from "../../../util";

const Page = () => {
  const [{posts}, dispatch] = useStateValue()
  useEffect(() => {
    //   fetch and dispatch posts and categories if empty
    posts.length <= 0 && FETCH_DATA("posts", (data:any) => {
        dispatch({
            type: "SET_POSTS",
            posts: data
        });
    });
    }, [])
  return <Admin page={<Posts />} />;
};

export default Page;
