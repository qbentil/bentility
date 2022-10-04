import { async } from "@firebase/util";
import React, { useState } from "react";
import { BiLoaderCircle } from "react-icons/bi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { toast } from "react-toastify";
import { User } from "../../../types";
import { removeImage, uploadImage } from "../../../firebase";
import { CHANGE_AVATAR } from "../../../util/admins";
import Quickedit from "./editbox";
import ImageUploader from "../../../components/ImageUploader";
import Button from "../../../components/Button";
import { useStateValue } from "../../../context/StateProvider";

const UpdateSettings = ({ admin }: { admin: User }) => {
  const [{ user }, dispatch] = useStateValue();
  const [image, setImage] = useState(admin?.avatar);
  const [imageURI, setImageURI] = useState("");
  const [loading, setLoading] = useState(false);
  const updateAvatar = () => {
    setLoading(true);
    if (image === admin?.avatar) {
      setLoading(false);
      return toast.info("No change detected in avatar");
    }
    if (!image || !imageURI) {
      setImage(admin?.avatar);
      toast.error("Please select an image");
      return setLoading(false);
    }

    // upload image
    toast.promise(
      uploadImage(imageURI, "users", async (url) => {
        // update user
        const updated = {
          avatar: url,
        };

        CHANGE_AVATAR(
          user?.access_token || "",
          admin._id || "",
          updated,
          async (data) => {
            setLoading(false);
            toast.success("Avatar updated successfully");
            setImage(data.avatar);
            // dispatch
            dispatch({
              type: "UPDATE_USER",
              user: data,
            });
          }
        );
      }),
      {
        pending: "Uploading image...",
      }
    );

    setLoading(false);
  };
  return (
    <div className="flex items-center justify-center w-full h-ful ">
      <div className="w-full min-h-full grid grid-cols-2 font-sans">
        {/* Update Profile Photo form here */}
        <div className="flex flex-col items-center justify-center gap-y-5">
          <div className="w-[80%] h-[80%] bg-gray-200">
            <ImageUploader
              image={image}
              setImage={setImage}
              setImageURI={setImageURI}
              className="w-full h-[100%] object-cover"
            />
          </div>
          <div className="flex items-center justify-start">
            <Button
              onClick={updateAvatar}
              shape="rounded-md"
              type="button"
              text={loading ? "Changing..." : "Change Avatar"}
              icon={
                loading ? (
                  <BiLoaderCircle className="animate animate-spin" />
                ) : (
                  <RiSecurePaymentLine className="text-white" />
                )
              }
              disabled={loading}
            />
          </div>
        </div>
        {/*  */}

        <Quickedit admin={admin} />
      </div>
    </div>
  );
};

export default UpdateSettings;
