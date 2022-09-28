import { async } from "@firebase/util";
import React, { useState } from "react";
import { BiLoaderCircle } from "react-icons/bi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { toast } from "react-toastify";
import { useStateValue } from "../../context/StateProvider";
import { removeImage, uploadImage } from "../../firebase";
import { User } from "../../types";
import { UPDATE_AVATAR } from "../../util/admins";
import Button from "../Button";
import ImageUploader from "../ImageUploader";
import Quickedit from "./editbox";

const UpdateSettings = () => {
  const [{ user, users }, dispatch] = useStateValue();
  const [image, setImage] = useState(user.avatar);
  const [imageURI, setImageURI] = useState("");
  const [loading, setLoading] = useState(false);
  const updateAvatar = () => {
    setLoading(true);
    if (image === user.avatar) {
      setLoading(false);
      return toast.info("No change detected in avatar");
    }
    if (!image || !imageURI) {
      setImage(user.avatar);
      toast.error("Please select an image");
      return setLoading(false);
      }

      toast.promise(uploadImage(imageURI, "users", async (url: string) => {
        const data = {
          avatar: url,
        };
        console.log(data);
        await UPDATE_AVATAR(user.access_token, data, async (data: User) => {
          await removeImage(user.avatar || "");
          dispatch({
            type: "SET_USER",
            user: data,
          });
        });
      }), {
        pending: "Updating avatar",
        success: "Avatar updated successfully",
        error: "Failed to update avatar",
      }, {
        toastId: "updateProfile",
      })

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

        <Quickedit />
      </div>
    </div>
  );
};

export default UpdateSettings;
