import React, { useEffect } from "react";
import SingleBlog from "./item";
import { useStateValue } from "../../context/StateProvider";
import { Empty } from "../Promises";
import { useRouter } from "next/router";
import { Post } from "../../types";

const CategoryRelatedPosts = () => {
  const [{ posts }, dispatch] = useStateValue();
  const router = useRouter();
  const path = router.asPath;
  const paths = path.split("/");
  const slug = paths[paths.length - 1];
  const post = posts.filter((post: any) =>
    post.slug.toLowerCase().includes(slug.toLowerCase())
  )[0];

  const related = posts.filter((p:Post) => {
    const categories = post?.categories || [];
    const postCategories = p.categories || [];
    const isRelated = categories.some((c:any) => postCategories.includes(c));
    return isRelated && p.slug !== post?.slug;
  }) 

  return (
    <div>
      {related.length > 0 ? (
        <div className="py-2 grid grid-flow-row grid-cols-1 md:grid-cols-2 md:gap-4 gap-0">
          {related.map((post: any) => (
            <SingleBlog key={post._id} data={post} />
          ))}
        </div>
      ) : (
        <div className="mx-auto">
          <Empty text={"No related posts yet. Watch out for more!"} />
        </div>
      )}
    </div>
  );
};

export default CategoryRelatedPosts;
