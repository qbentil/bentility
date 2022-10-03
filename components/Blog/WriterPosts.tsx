import React, { useEffect } from "react";
import SingleBlog, { WriterSignature } from "./item";
import { convertDate, readingTime } from "../../util/functions";

import { BsClock } from "react-icons/bs";
import CategoriesBadge from "../Categories/badge";
import { Empty } from "../Promises";
import { MdDateRange } from "react-icons/md";
import { Post } from "../../types";
import { useRouter } from "next/router";
import { useStateValue } from "../../context/StateProvider";

const WriterPosts = ({ id }: { id: string }) => {
  const router = useRouter();
  const [{ posts }, dispatch] = useStateValue();
  const [writerPosts, setWriterPosts] = React.useState<Post[]>(
    posts.filter((post: Post) => post?.writer === id)
  );
  const viewPost = (slug: string) => {
    router.push({
      pathname: `/blog/${slug}`,
    });
  };
  useEffect(() => {
    posts && setWriterPosts(posts.filter((post: Post) => post?.writer === id));
  }, [posts, id]);
  return (
    <>
      {writerPosts.length > 0 &&
        writerPosts.map((post: Post) => (
          <div key={post?._id} className={`hover:cursor-pointer  mb-14`} onClick={() => viewPost(post?.slug)} >
            <div className="h-[40vh] bg-white border-primary border items-center flex  justify-center shadow-sm shadow-gray-50 hover:shadow-lg mb-3  ">
              <div className="w-full md:w-[85%]  flex flex-col items-center justify-around h-[85%]  ">
                <div className="w-full lg:w-[80%]  px-5  font-bold text-gray-600">
                  <p className={`text-lg lg:text-xl `}>{post?.title}</p>

                  <div className="text-sm font-normal text-gray-500 my-3">
                    <p>{post?.content.slice(0, 50)} ...</p>
                  </div>
                </div>
                <div className="flex gap-3 overflow-hidden max-w-[80%]">
                  <CategoriesBadge ids={post?.categories} />
                </div>
                <div className="flex flex-col w-full gap-4">
                  <div className="flex gap-4 items-center mx-auto w-full px-4 max-w-[75%] justify-evenly">
                    <div className="flex items-center justify-center gap-x-2">
                      <MdDateRange className="text-[0.7rem] text-primary" />
                      <p className="text-[0.7rem] text-gray-500 flex items-center gap-x-1">
                        {convertDate(post?.createdAt || "", "long")}
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-x-2">
                      <BsClock className="text-[0.7rem] text-primary " />
                      <p className="text-[0.7rem] text-gray-500 flex items-center gap-x-1">
                        {readingTime(post?.content || "")}
                      </p>
                    </div>
                  </div>
                  <WriterSignature id={post?.writer || ""} />
                </div>
              </div>
            </div>
          </div>
        ))}
      {writerPosts.length === 0 && <Empty text={"No posts yet"} />}
    </>
  );
};

export default WriterPosts;
