import { Empty } from "../Promises";
import React from "react";
import SingleBlog from "./item";
import { useStateValue } from "../../context/StateProvider";

const Blog = () => {
  const [{ posts }, dispatch] = useStateValue();

  return (
    <div>
      {posts.length > 0 ? (
        <div className="py-2 grid grid-flow-row grid-cols-1 md:grid-cols-2 md:gap-4 gap-0">
          {posts &&
            posts.slice(0, 8).map((post: any) => {
              if (post.status !== "published") return null;
              <SingleBlog key={post._id} data={post} />;
            })}
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
