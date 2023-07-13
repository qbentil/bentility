import { FaUserCog, FaUserTag } from "react-icons/fa";
import {
  MdOutlineAddCircleOutline,
  MdOutlineAlternateEmail,
} from "react-icons/md";
import { Navbar, Sidenav } from "../../../components/Admin";
import React, { useState } from "react";
import { removeImage, uploadImage } from "../../../firebase";

import { ADD_ADMIN } from "../../../util/admins";
import { BiLoaderCircle } from "react-icons/bi";
import Button from "../../../components/Button/";
import { CgNametag } from "react-icons/cg";
import Head from "next/head";
import ImageUploader from "../../../components/ImageUploader";
import { SiAboutdotme } from "react-icons/si";
import { SketchPicker } from "react-color";
import { User } from "../../../types";
import Usertype from "../../../components/Selectors/usertype";
import { toast } from "react-toastify";
import { useStateValue } from "../../../context/StateProvider";

const NewCategory = () => {
  const [{ user }, dispatch] = useStateValue();
  const [image, setImage] = useState("");
  const [imageURI, setImageURI] = useState("");
  const [username, setUsername] = useState("");
  const [about, setAbout] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState({ value: 'writer', label: 'Writer' });
  const [loading, setLoading] = useState(false);

  const clearFields = () => {
    setName("");
    setEmail("");
    setUsername("");
    setAbout("");
    setImage("");
    setImageURI("");
    setRole({ value: 'writer', label: 'Writer' });
  };

  //Add category to database here
  const adduser = () => {
    setLoading(true);
    // validate fields
    const userData = {
      name,
      email,
      username,
      about,
      avatar: '',
      role: role.value,
    };
    // console.log(userData)
    if (!name || !email || !username || !image || !role.value) {
      toast.error("Please fill in all fields");
      return;
    }
    // upload user photo
    uploadImage(imageURI, "users", async (url: string) => {
      userData.avatar = url;
      // save to database
      toast.promise(ADD_ADMIN(user?.access_token, userData, (data: User) => {
        dispatch({
          type: "ADD_USER",
          user: data,
        })
        toast.success("User added successfully🎉");
        setLoading(false);
        clearFields();
      }), {
        pending: "Adding user...",
      }, {
        toastId: "addUser",
      });
    })
  };

  return (
    <div>
      <Head>
        <title>Bentility| Admin | New Category</title>
        <meta name="description" content="Bentility Admin | New Category" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="bg-gray-200 w-screen h-screen ">
        <div className="">
          <Navbar />
          <div className="flex">
            <Sidenav page="Users" />
            <div className="min-h-[90vh] h-[90vh] overflow-y-auto w-[80%] py-3 px-5">
              <div className="bg-white w-full min-h-full rounded-md shadow-md p-5 flex flex-col gap-8">
                <h1 className="poppins font-bold text-2xl">New User</h1>
                <form
                  className="w-full flex gap-6 flex-col md:flex-row"
                  autoComplete="off"
                >
                  <div className="flex flex-col mx-auto gap-6 mt-5 w-[40%]">
                    <ImageUploader
                      image={image}
                      setImage={setImage}
                      setImageURI={setImageURI}
                      className="w-[20px] h-[50px]"
                    />
                  </div>
                  <div className=" py-10 w-[60%] flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="name"
                        className="poppins font-medium text-base"
                      >
                        Full Name
                      </label>
                      <div className="flex w-full items-center border-b-2 border-blue-200 ">
                        <CgNametag className="text-primary" />
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Enter category title"
                          className=" rounded-md px-2 py-1 focus:outline-none focus:border-active-bg w-full pl-5 "
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="username"
                        className="poppins font-medium text-base"
                      >
                        Username
                      </label>
                      <div className="flex w-full items-center border-b-2 border-blue-200 ">
                        <FaUserCog className="text-primary" />
                        <input
                          type="text"
                          name="username"
                          id="username"
                          placeholder="Enter username"
                          className=" rounded-md px-2 py-1 focus:outline-none focus:border-active-bg w-full pl-5 "
                          value={username}
                          onChange={(e) => {
                            setUsername(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="email"
                        className="poppins font-medium text-base"
                      >
                        Email ID
                      </label>
                      <div className="flex w-full items-center border-b-2 border-blue-200 ">
                        <MdOutlineAlternateEmail className="text-primary" />
                        <input
                          type="text"
                          name="email"
                          id="email"
                          placeholder="Enter email"
                          className=" rounded-md px-2 py-1 focus:outline-none focus:border-active-bg w-full pl-5 "
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="email"
                        className="poppins font-medium text-base"
                      >
                        User Type
                      </label>
                      <div className="flex gap-x-3 w-full items-center border-b-2 border-blue-200 ">
                        <FaUserTag className="text-primary" />
                        <div className="w-full">
                          <Usertype onChange={setRole} />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 mt-5">
                      <label
                        htmlFor="description"
                        className="poppins font-medium text-base"
                      >
                        About
                      </label>
                      <div className="flex w-full  border-b-2 border-blue-200 ">
                        <div className="block pt-4 h-max">
                          <SiAboutdotme className="text-primary " />
                        </div>
                        <textarea
                          name="about"
                          id="about"
                          cols={40}
                          rows={4}
                          placeholder="Enter category about"
                          className=" rounded-md px-2 focus:outline-none focus:border-active-bg resize-none w-full pl-5 "
                          value={about}
                          onChange={(e) => setAbout(e.target.value)}
                        />
                      </div>
                    </div>

                    <Button
                      icon={
                        !loading ? (
                          <MdOutlineAddCircleOutline />
                        ) : (
                          <BiLoaderCircle className="animate animate-spin" />
                        )
                      }
                      text={loading ? "Adding....." : "Add User"}
                      disabled={loading}
                      shape="rounded-md"
                      onClick={adduser}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NewCategory;
