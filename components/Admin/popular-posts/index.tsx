import Link from "next/link";
import { Post as POST_TYPE } from "../../../types";
import Post from "../post";
import React from "react";
import { RiSoundModuleLine } from "react-icons/ri";
import { useStateValue } from "../../../context/StateProvider";

function PopularPosts() {
  const [{ posts }, dispatch] = useStateValue();
  return (
    <div className="w-[60%] flex flex-col items-center px-5 my-4">
      {/* section head */}
      <div className="bg-white w-full rounded-t-lg flex justify-between items-center py-2 px-4 border-b-2 border-gray-200">
        <p className=" text-active font-sans">Popular Posts</p>
        <Link href="/admin/posts">
          <div className="flex items-center justify-center gap-3 border hover:bg-active-bg ease-in-out duration-300 transition-colors border-active-bg py-2 px-4 font-sans cursor-pointer">
            <RiSoundModuleLine className="text-primary" />
            <p className=" text-active text-sm">View All</p>
          </div>
        </Link>
      </div>
      {/* posts table */}
      <div className="w-full flex flex-col bg-white pt-2 gap-2 overflow-y-auto h-[59vh]">
        {posts &&
          posts
            .slice(0, 8)
            .map((post: POST_TYPE) => {
				if(post.status !== "published" || !post.isPublished) return null;
				return <Post post={post} key={post._id} />
			})}
      </div>
    </div>
  );
}

export default PopularPosts;
