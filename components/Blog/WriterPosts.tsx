import React, { useEffect } from "react";
import SingleBlog from "./item";
import { useStateValue } from "../../context/StateProvider";
import { Empty } from "../Promises";
import { useRouter } from "next/router";
import { Post } from "../../types";

const WriterPosts = () => {
  const [{ posts, pusers }, dispatch] = useStateValue();
  const router = useRouter();
  const path = router.asPath;
  const paths = path.split("/");
  const username = paths[paths.length - 1];
  const writer = pusers.filter((user: any) => user.username === username)[0];
  const writerPosts = posts.filter((post: any) => post.writer === writer._id);



  return (
    <div>
      {writerPosts.length > 0 ? (
        <div className="py-2 grid grid-flow-row grid-cols-1 md:grid-cols-2 md:gap-4 gap-0">
          {writerPosts.map((post: any) => (
            <SingleBlog key={post._id} data={post} />
          ))}
        </div>
      ) : (
        <div className="mx-auto">
          <Empty text={"Writer has no post yet!. Watch this space more!"} />
        </div>
      )}
    </div>
  );
};

export default WriterPosts;
