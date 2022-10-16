import React, { useState } from "react";
import Button from "../../components/Button";
import CategorySelector from "../../components/Selectors/categorySelector";
import { VALIDATE_POST } from "../../components/Validations";
import { toast } from "react-toastify";
import { useStateValue } from "../../context/StateProvider";
import { BiAddToQueue, BiLoaderCircle } from "react-icons/bi";
import { useRouter } from "next/router";
import { BsEye } from "react-icons/bs";
import { EDIT_POST } from "../../util/posts";
import TextEditor from "../../components/Admin/Editor";

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
  const [status, setStatus] = useState("");
  const [mode, setMode] = useState("light");

  const handleTitleChange = (e: any) => {
    setTitle(e.target.value);
    generateSlug(e.target.value);
  };

  const generateSlug = (title: string) => {
    setSlug(title.toLowerCase().replace(/ /g, "-"));
  };

  const updatePost = async (status: string) => {
    setStatus(status);
    setLoading(true);
    const data = {
      title,
      slug,
      content: body,
      categories,
      status,
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
        <div className="w-full flex items-center justify-between gap-x-4 py-2">
          <h1 className="font-bold text-xl capitalize text-primary font-sans mb-4">
            Edit Post
          </h1>
          <div className="flex items-center justify-center gap-x-3">
            <label
              htmlFor="follow"
              className="inline-flex relative items-center cursor-pointer"
            >
              <input
                type="checkbox"
                value=""
                id="follow"
                className="sr-only peer"
                onChange={(e) => setMode(e.target.checked ? "dark" : "light")}
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-1 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-base font-medium text-gray-600 capitalize">
                {mode} Mode
              </span>
            </label>
            {post?.status === "draft" ? (
              <Button
                text={
                  loading && status == "published"
                    ? "Publishing...."
                    : "Publish"
                }
                icon={
                  loading && status == "published" ? (
                    <BiLoaderCircle className="animate animate-spin" />
                  ) : (
                    <BiAddToQueue />
                  )
                }
                type="button"
                disabled={loading && status == "published"}
                shape="rounded-md"
                onClick={() => updatePost("published")}
              />
            ) : (
              <Button
                text={
                  loading 
                    ? "Updating...."
                    : "Update"
                }
                icon={
                  loading && status == "published" ? (
                    <BiLoaderCircle className="animate animate-spin" />
                  ) : (
                    <BiAddToQueue />
                  )
                }
                type="button"
                disabled={loading && status == "published"}
                shape="rounded-md"
                onClick={() => updatePost("published")}
              />
            )}
            <Button
              text={
                loading && status === "draft" ? "Saving...." : "Save as Draft"
              }
              icon={
                loading && status === "draft" ? (
                  <BiLoaderCircle className="animate animate-spin" />
                ) : (
                  <BiAddToQueue />
                )
              }
              type="button"
              disabled={loading && status === "draft"}
              shape="rounded-md"
              onClick={() => updatePost("draft")}
            />
          </div>
        </div>
        <div className="w-full h-full flex flex-col items-center jusstify-center gap-x-4">
          <div className="w-full flex items-start justify-start flex-col mb-3">
            <input
              type="text"
              id="title-input"
              value={title}
              onChange={handleTitleChange}
              className="block p-2 px-4 w-full text-gray-900 border-2 border-active-bg focus:border-primary bg-gray-50 rounded-lg outline-none"
              placeholder="Title"
            />
          </div>
          <div className="w-full grid grid-cols-2 gap-2">
            <div className="flex flex-col mb-3">
              <input
                type="text"
                id="slug-input"
                readOnly
                value={slug}
                onChange={(e) => generateSlug(e.target.value)}
                className="block p-2 px-4 w-full text-gray-900 border-2 border-active-bg focus:border-primary bg-gray-50 rounded-lg outline-none"
                placeholder="Slug"
              />
            </div>
            <div className="flex flex-col mb-3">
              <CategorySelector values={categories} onChange={setCategories} />
            </div>
          </div>
          <div className="w-full">
            <TextEditor value={body} setValue={setBody} mode={mode} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditP;
