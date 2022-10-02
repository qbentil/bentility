import React, { useEffect } from "react";
import SingleBlog from "./item";
import { useStateValue } from "../../context/StateProvider";
import { Empty } from "../Promises";
import { useRouter } from "next/router";
import { Post } from "../../types";

const CategoryRelatedPosts = ({categories, filter}: {categories:string[], filter?:string}) => {
  const [{ posts }, dispatch] = useStateValue();

  const related = posts.filter((p:Post) => {
    const postCategories = p.categories || [];
    const isRelated = categories.some((c:any) => postCategories.includes(c));
    return isRelated && p.slug !== filter;
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
