/* eslint-disable @next/next/no-img-element */

import { FETCH_DATA, FETCH_OCTOKIT } from "../../util";
import { FaGithub, FaStar } from "react-icons/fa";
import React, { useEffect } from "react";

import { BsMoonFill } from "react-icons/bs";
import { GoRepoForked } from "react-icons/go";
import Link from "next/link";
import { useStateValue } from "../../context/StateProvider";

const Navbar = () => {
  const [{ pusers, posts, categories }, dispatch] = useStateValue();
  const [repoInfo, setRepoInfo] = React.useState<{ stars: number, forks: number }>({
    stars: 0, forks: 0
  });

  useEffect(() => {
    //   fetch and dispatch posts and categories if empty
    posts.length <= 0 && FETCH_DATA("posts", (data: any) => {
      dispatch({
        type: "SET_POSTS",
        posts: data
      });
    });
    categories.length <= 0 && FETCH_DATA("categories", (data: any) => {
      dispatch({
        type: "SET_CATEGORIES",
        categories: data
      });
    })
    pusers.length <= 0 && FETCH_DATA("users", (data: any) => {
      dispatch({
        type: "SET_PUSERS",
        users: data
      });
    })

    // fetch repo info
    FETCH_OCTOKIT((data: {data:{ stars: number, forks: number }}) => {
      setRepoInfo(data.data)
    })

  }, [])
  return (
    <div
      className={
        "lg:h-[25vh] md:h-[20vh] w-full flex flex-col items-center justify-center h-[10vh]"
      }
    >
      <div className="md:w-[80%] flex justify-between items-center w-[90%]">
        <div className="flex justify-center items-center">
          <Link href="/">
            <div className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-full">
              <img
                src="https://codersquiz.netlify.app/img/bentil.jpeg"
                alt="ben"
                className="w-[90%] h-[90%] border border-gray-200 rounded-full"
              />
            </div>
          </Link>
          <Link href="/">
            <h1 className="font-brand font-[500] text-2xl md:text-5xl cursor-pointer">
              Bentility
            </h1>
          </Link>
        </div>
        <div className="flex items-center justify-around md:w-[10%]">
          <a
            href="https://github.com/qbentil/bentility"
            target={"_blank"}
            rel="noreferrer"
          >
            <FaGithub className={`text-gray-600 mr-2 text-xl lg:text-3xl hover:text-black`} />
          </a>
          <p
            className="flex gap-x-2 items-center justify-center bg-gray-200 rounded-lg py-1 px-2 mx-2"
          >
            <GoRepoForked className={`text-gray-600 ml-2 text-sm lg:text-lg cursor-pointer hover:text-black`} /> <span className="text-sm">Fork</span> <span className="rounded-full bg-gray-300 h-6 w-6 flex items-center justify-center">{repoInfo.forks}</span>
          </p>
          <p
            className="flex gap-x-2 items-center justify-center bg-gray-200 rounded-lg py-1 px-2"
          >
            <FaStar className={`text-yellow-500 ml-2 text-sm lg:text-lg cursor-pointer hover:text-yellow-600`} /> <span className="text-sm">Starred</span> <span className="rounded-full bg-gray-300 h-6 w-6 flex items-center justify-center">{repoInfo.stars}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
