import React, { useState } from "react";
import Button from "../../components/Button";
import CategorySelector from "../../components/Selectors/categorySelector";
import CustomEditor from "../../components/Admin/new/editor";
import { VALIDATE_POST } from "../../components/Validations";
import { toast } from "react-toastify";
import { useStateValue } from "../../context/StateProvider";
import {
  BiAddToQueue,
  BiArrowBack,
  BiLoaderCircle,
  BiReset,
} from "react-icons/bi";
import { useRouter } from "next/router";
import UtilButton from "../../components/UtilButton";
import Link from "next/link";
import { BsEye } from "react-icons/bs";
import { EDIT_POST } from "../../util/posts";

const EditP = () => {
  const router = useRouter();
  const path = router.asPath;
  const paths = path.split("/");
  const pslug = paths[paths.length - 1];
  const [{ posts, user }, dispatch] = useStateValue();
  const post = posts.filter((post: any) =>
    post?.slug.toLowerCase().includes(pslug.toLowerCase())
  )[0];

  const [categories, setCategories] = useState(post?.categories);
  const [body, setBody] = useState(post?.content);
  const [title, setTitle] = useState(post?.title);
  const [slug, setSlug] = useState(post?.slug);
  const [loading, setLoading] = useState(false);

  const handleCategoryChange = (selectedCategories: any) => {
    const options = selectedCategories.map((category: any) => {
      return category.value;
    });
    setCategories(options);
    console.log(options);
  };

  const handleTitleChange = (e: any) => {
    setTitle(e.target.value);
    generateSlug(e.target.value);
  };

  const generateSlug = (title: string) => {
    setSlug(title.toLowerCase().replace(/ /g, "-"));
  };

  const updatePost = async () => {
    setLoading(true);
    const data = {
      title,
      slug,
      content: body,
      categories,
    };
    if (!VALIDATE_POST(post)) return toast.error("Please fill all the fields");
    toast.promise(
      EDIT_POST(user?.access_token, post?._id, data, (data: any) => {
        if (data.success) {
          dispatch({
            type: "EDIT_POST",
            post: data.data,
          });
          toast.success(data?.message || "Post updated successfully");
          router.push(`/admin/posts/view/${data.data.slug}`);
        } else {
          toast.error(data?.message || "Something went wrong >>");
        }
      }),
      {
        pending: "Updating post...",
      }
    );
    setLoading(false);
  };
  const resetForm = () => {
    setTitle(post?.title);
    setBody(post?.content);
    setSlug(post?.slug);
    setCategories(post?.categories);
  };

  return (
    <div className="w-full h-full bg-white rounded p-4 poppins">
      <form
        action=""
        method="post"
        autoComplete="off"
        autoCorrect="on"
        autoSave="on"
      >
        <div className="flex items-center justify-start gap-x-5 ">
          <div className="flex items-center justify-center gap-x-5 ">
            <UtilButton
              icon={<BiArrowBack />}
              color="blue-600"
              title="Back"
              onClick={() => router.back()}
            />
            <Link href={`/admin/posts/view/${slug}`}>
              <UtilButton icon={<BsEye />} color="green-500" title="View" />
            </Link>
          </div>
          <h1 className="font-bold text-xl capitalize text-primary font-sans mb-4">
            Edit Post
          </h1>
        </div>
        <div className="w-full h-full flex items-center jusstify-center gap-x-4">
          <div className="w-1/2">
            <div className="flex flex-col mb-3">
              <label
                htmlFor="title-input"
                className="block mb-2 font-medium text-gray-900"
              >
                Title
              </label>
              <input
                type="text"
                id="title-input"
                value={title}
                onChange={handleTitleChange}
                className="block p-2 px-4 w-full text-gray-900 border-2 border-transparent focus:border-primary bg-gray-50 rounded-lg outline-none"
                placeholder="Title"
              />
            </div>
            <div className="flex flex-col mb-3">
              <label
                htmlFor="slug-input"
                className="block mb-2 font-medium text-gray-900"
              >
                Slug
              </label>
              <input
                type="text"
                id="slug-input"
                readOnly
                value={slug}
                onChange={(e) => generateSlug(e.target.value)}
                className="block p-2 px-4 w-full text-gray-900 border-2 border-transparent focus:border-primary bg-gray-50 rounded-lg outline-none"
                placeholder="Slug"
              />
            </div>
            <div className="flex flex-col mb-3">
              <label
                htmlFor="categories-selector"
                className="block mb-2 font-medium text-gray-900"
              >
                Category (s)
              </label>
              <CategorySelector
                values={categories}
                onChange={handleCategoryChange}
              />
            </div>
          </div>
          <div className="w-1/2">
            <div className="flex flex-col mb-3">
              <CustomEditor val={body} setVal={setBody} />
            </div>
            <div className="flex justify-start gap-x-3 flex-row-reverse mb-3 items-start">
              <Button
                text={loading ? "Updating...." : "Update"}
                icon={
                  loading ? (
                    <BiLoaderCircle className="animate animate-spin" />
                  ) : (
                    <BiAddToQueue />
                  )
                }
                type="button"
                disabled={loading}
                shape="rounded-md"
                onClick={updatePost}
              />
              <Button
                text={"Reset"}
                icon={<BiReset />}
                type="button"
                shape="rounded-md"
                onClick={resetForm}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditP;
