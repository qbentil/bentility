import { BiAddToQueue, BiLoaderCircle } from "react-icons/bi";

import Button from "../../Button";
import { CREATE_POST } from "../../../util/posts";
import CategorySelector from "../../Selectors/categorySelector";
import TextEditor from "../Editor";
import { VALIDATE_POST } from "../../Validations";
import { toast } from "react-toastify";
import { useState } from "react";
import { useStateValue } from "../../../context/StateProvider";

function NewPost() {
  const [categories, setCategories] = useState([]);
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [loading, setLoading] = useState(false);
  const [{ user }, dispatch] = useStateValue();
  const [mode, setMode] = useState("light");

  // handle category change
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

  const createPost = async () => {
    setLoading(true);
    const post = {
      title,
      slug,
      content: body,
      categories,
    };
    if (!VALIDATE_POST(post)) return toast.error("Please fill all the fields");
    await CREATE_POST(user?.access_token, post, (data: any) => {
      if (data.success) {
        dispatch({
          type: "ADD_POST",
          post: data.data,
        });
        clearForm();
        toast.success(data?.message || "Post created successfully");
      } else {
        toast.error(data?.message || "Something went wrong >>");
      }
    });
    setLoading(false);
  };
  const clearForm = () => {
    setTitle("");
    setBody("");
    setCategories([]);
    setSlug("");
  }
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
            Create a New Post
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
            <Button
              text={loading ? "Publishing...." : "Publish"}
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
              onClick={createPost}
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
              <CategorySelector onChange={handleCategoryChange} />
            </div>
          </div>
          <div className="w-full">
            <TextEditor value={body} setValue={setBody} mode={mode} />
          </div>
        </div>
      </form>
    </div>
  );
}

export default NewPost;
