import React from "react";
import {BiAddToQueue} from 'react-icons/bi'
import CategorySelector from "./categorySelector";
import CustomEditor from "./editor";
function NewPost() {
  return (
    <div className="w-full h-full bg-tansparent">
      <form action="" method="post">
        <h1 className="font-bold text-xl uppercase text-active font-sans mb-4">
          Create a New Post
        </h1>
        <div className="flex flex-col mb-3">
          <label
            htmlFor="large-input"
            className="block mb-2 font-medium text-gray-900"
          >
            Title
          </label>
          <input
            type="text"
            id="large-input"
            className="block p-2 px-4 w-full text-gray-900 bg-gray-50 rounded-lg outline-none"
            placeholder="Title"
          />
        </div>
        <div className="flex flex-col mb-3">
          <label
            htmlFor="large-input"
            className="block mb-2 font-medium text-gray-900"
          >
            Category
          </label>
          <CategorySelector className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg outline-none" />
        </div>
        <div className="flex flex-col mb-3">
          <label
            htmlFor="body"
            className="block mb-2 font-medium text-gray-900"
          >
            Body
          </label>
          <CustomEditor />
        </div>
        <div className="flex flex-col mb-3 items-end">
            {/* submit button */}
            <button
                type="submit"
                className="bg-primary flex items-center justify-center gap-3 hover:bg-active text-white font-bold py-2 px-4 rounded-lg w-36 transition-all ease-in-out duration-100"
            >
                <BiAddToQueue />
                New
            </button>

        </div>
      </form>
    </div>
  );
}

export default NewPost;
