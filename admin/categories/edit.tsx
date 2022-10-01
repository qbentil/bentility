import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { SketchPicker } from "react-color";
import { BiReset, BiArrowBack, BiLoaderCircle } from "react-icons/bi";
import { BsEye, BsTextCenter } from "react-icons/bs";
import {
  MdDriveFileRenameOutline,
  MdOutlineAddCircleOutline,
  MdOutlineColorLens,
} from "react-icons/md";
import { toast } from "react-toastify";
import Button from "../../components/Button";
import ImageUploader from "../../components/ImageUploader";
import UtilButton from "../../components/UtilButton";
import { useStateValue } from "../../context/StateProvider";
import { removeImage, uploadImage } from "../../firebase";
import { EDIT_CATEGORY } from "../../util/categories";

const EditC = () => {
  const router = useRouter();
  const path = router.asPath;
  const paths = path.split("/");
  const cslug = paths[paths.length - 1];
  const [{ categories, user }, dispatch] = useStateValue();

  const cat = categories.filter((category: any) =>
    category.slug.toLowerCase().includes(cslug.toLowerCase())
  )[0];

  const [image, setImage] = useState(cat?.imageURL);
  const [imageURI, setImageURI] = useState("");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [color, setColor] = useState(cat?.color || "#000");
  const [title, setTitle] = useState(cat?.title || "");
  const [description, setDescription] = useState(cat?.description);
  const [slug, setSlug] = useState(cat?.slug);
  const [loading, setLoading] = useState(false);

  const changeColor = (color: any) => {
    setColor(color.hex);
  };

  const generateSlug = (e: any) => {
    const value = e.target.value;
    const slug = value.toLowerCase().replace(/ /g, "-");
    setSlug(slug);
  };

  const resetForm = () => {
    setImage(cat?.imageURL);
    setImageURI("");
    setShowColorPicker(false);
    setColor(cat?.color || "#000");
    setTitle(cat?.title || "");
    setDescription(cat?.description);
    setSlug(cat?.slug);
  };

  const editCategory = () => {
    // TODO: Edit category here
    // check if image is changed
    if (image !== cat?.imageURL && imageURI === "")
      return toast.error("Upload a new image");
    // validate form
    setLoading(true);
    if (title === "") return toast.error("Title is required");
    if (slug === "") return toast.error("Slug is required");
    if (color === "#000")
      return toast.error("Color is required and cannot be black");
    if (description === "") return toast.error("Description is required");

    // if image is changed, upload image
    if (image !== cat?.imageURL && imageURI !== "") {
      toast.promise(
        uploadImage(imageURI, "categories", async (url) => {
          const category = {
            title,
            slug,
            color,
            description,
            imageURL: url,
          };
          EDIT_CATEGORY(
            user?.access_token,
            cat?._id,
            category,
            async (data: any) => {
              if (data.success) {
                dispatch({
                  type: "EDIT_CATEGORY",
                  category: data.data,
                });
                toast.success(data?.message || "Category edited successfully");
                router.push("/admin/categories");
              } else {
                // remove uploaded image
                await removeImage(url);
                toast.error(
                  data?.message || "Sorry something went wrong. Try again!"
                );
              }
            }
          );
        }),
        {
          pending: "Updating category...",
        }
      );
    } else {
      const category = {
        title,
        slug,
        color,
        description,
      };
      toast.promise(
        EDIT_CATEGORY(user?.access_token, cat?._id, category, (data: any) => {
          if (data.success) {
            dispatch({
              type: "EDIT_CATEGORY",
              category: data.data,
            });
            toast.success(data?.message || "Category edited successfully");
            router.push("/admin/categories");
          } else {
            toast.error(
              data?.message || "Sorry something went wrong. Try again!"
            );
          }
        }),
        {
          pending: "Updating category",
        }
      );
    }
    setLoading(false);
  };

  return (
    <div className="">
      <div className="bg-white w-full h-full rounded-md shadow-md p-5 flex flex-col gap-8">
        <div className="flex flex-row-reverse items-center justify-between gap-x-5 px-4">
          <div className="flex items-center justify-center gap-x-5 ">
            <UtilButton
              icon={<BiArrowBack />}
              color="blue-600"
              title="Back"
              onClick={() => router.back()}
            />
            <Link href={`/admin/categories/view/${cat?.slug}`}>
              <UtilButton icon={<BsEye />} color="green-500" title="View" />
            </Link>
          </div>
          <h1 className="poppins font-bold text-2xl">
            Edit Category | {cat?.title}
          </h1>
        </div>
        <form action="" className="w-full flex gap-6 flex-col md:flex-row">
          <div className="flex flex-col mx-auto gap-6 mt-5 w-[40%]">
            <ImageUploader
              image={image}
              setImage={setImage}
              setImageURI={setImageURI}
              className="h-full"
            />
          </div>
          <div className=" py-10 w-[50%] flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="poppins font-medium text-base">
                Title
              </label>
              <div className="flex w-full items-center border-b-2 border-blue-200 ">
                <MdDriveFileRenameOutline className="text-primary" />
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter category title"
                  className=" rounded-md px-2 py-1 focus:outline-none focus:border-active-bg w-full pl-5 "
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                    generateSlug(e);
                  }}
                />
              </div>
              <p className="text-sm text-gray-400 font-medium">{slug}</p>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="color" className="poppins font-medium text-base">
                Color
              </label>
              <div className="flex w-full items-center relative ">
                {showColorPicker ? (
                  <div className="flex z-10  ">
                    <SketchPicker
                      onChangeComplete={changeColor}
                      color={color}
                      className="absolute left-0 z-10"
                    />
                    <div
                      className=" px-5 py-2 mt-4 border-2 rounded-full border-primary text-primary cursor-pointer absolute right-0 "
                      onClick={() => setShowColorPicker(false)}
                    >
                      Done
                    </div>
                  </div>
                ) : (
                  <div
                    className="flex items-center gap-4 cursor-pointer"
                    onClick={() => setShowColorPicker(true)}
                  >
                    <MdOutlineColorLens
                      style={{
                        color: color,
                      }}
                      className="text-xl"
                    />
                    <input
                      color={color}
                      type="button"
                      placeholder={"Select Color"}
                      value={color == "#000" ? "Select Color" : color}
                      style={{
                        color: color,
                      }}
                      className="poppins font-bold cursor-pointer"
                    />

                    <div
                      className="border-black border-2 w-4 h-4"
                      style={{
                        backgroundColor: color,
                      }}
                    ></div>
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-5">
              <label
                htmlFor="description"
                className="poppins font-medium text-base"
              >
                Description
              </label>
              <div className="flex w-full  border-b-2 border-blue-200 ">
                <div className="block pt-4 h-max">
                  <BsTextCenter className="text-primary " />
                </div>
                <textarea
                  name="description"
                  id="description"
                  cols={40}
                  rows={7}
                  placeholder="Enter category description"
                  className=" rounded-md px-2 focus:outline-none focus:border-active-bg resize-none w-full pl-5 "
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center justify-start gap-x-5">
              <Button
                icon={
                  !loading ? (
                    <MdOutlineAddCircleOutline />
                  ) : (
                    <BiLoaderCircle className="animate animate-spin" />
                  )
                }
                text={loading ? "Updating....." : "Update Category"}
                disabled={loading}
                shape="rounded-md"
                onClick={editCategory}
              />
              <Button
                icon={<BiReset />}
                text={"Reset Form"}
                shape="rounded-md"
                onClick={resetForm}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditC;
