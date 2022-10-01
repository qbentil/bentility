import React from "react";
import SingleBlog from "./item";
import { useStateValue } from "../../context/StateProvider";
import { Empty } from "../Promises";

const Blog = () => {
  const [{ posts, categories }, dispatch] = useStateValue();

  return (
    <div>
      {posts.length > 0 ? (
        <div className="py-2 grid grid-flow-row grid-cols-1 md:grid-cols-2 md:gap-4 gap-0">
          {posts &&
            posts
              .slice(0, 8)
              .map((post: any) => <SingleBlog key={post._id} data={post} />)}
        </div>
      ) : (
        <div className="mx-auto">
          <Empty text={"No posts yet. Watch out for more!"} />
        </div>
      )}
    </div>
  );
};

export default Blog;
