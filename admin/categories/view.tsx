/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { BiArchiveIn, BiArrowBack } from "react-icons/bi";
import { BsPencil } from "react-icons/bs";
import UtilButton from "../../components/UtilButton";
import { useStateValue } from "../../context/StateProvider";
import { ColorOpacity, generateInitials } from "../../util/functions";

const ViewC = () => {
  const router = useRouter();
  const path = router.asPath;
  const paths = path.split("/");
  const cslug = paths[paths.length - 1];
  const [{ categories, user }, dispatch] = useStateValue();

  const cat = categories.filter((category: any) =>
    category.slug.toLowerCase().includes(cslug.toLowerCase())
  )[0];
  return (
    <div className="bg-white h-full w-full rounded-lg">
      <div className="bg-white w-full h-full rounded-md shadow-md p-5 flex gap-8">
        <div
          className="w-[80%] h-[80%] text-7xl flex justify-center items-center rounded-md group-hover:bg-white"
          style={{
            backgroundColor: ColorOpacity(cat?.color || "", 20),
            color: cat?.color || "black",
          }}
        >
          {cat?.imageURL ? (
            <div className="h-full w-full rounded-xl">
              <img
                src={cat?.imageURL}
                alt={cat?.slug}
                className="w-full  overflow-hidden h-full object-contain "
              />
            </div>
          ) : (
            <div>
              <p
                style={{
                  fontSize: "6rem",
                }}
                className="poppins"
              >
                {generateInitials(cat?.title)}
              </p>
            </div>
          )}
        </div>
        <div className="flex h-full w-full items-center justify-start flex-col">
          <div className="flex items-center justify-start gap-x-5 p-4">
            {/* back button */}
            <UtilButton
              icon={<BiArrowBack />}
              color="blue-600"
              title="Back"
              onClick={() => router.back()}
            />
            <UtilButton
              icon={<BiArchiveIn />}
              color="red-600"
              title="Archive"
            />
            <Link href={`/admin/categories/edit/${cat?.slug}`}>
              <UtilButton icon={<BsPencil />} color="black" title="Edit" />
            </Link>
          </div>
          <h1
            className="text-2xl font-bold poppins text-primary"
            style={{ color: cat?.color }}
          >
            {cat?.title}
          </h1>
          <p>{cat?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewC;
