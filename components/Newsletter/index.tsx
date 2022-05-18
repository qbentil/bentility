import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full p-5 flex justify-center items-center border border-blue-600">
      <div className="w-[99%] md:[80%] lg:w-[70%] flex flex-col justify-around min-h-[30vh]">
        <p className="md:text-2xl text-xl font-bold font-sans">
          Join our email list and get notified about new content
        </p>
        <p className="text-gray-400 md:text-lg text-sm my-5">
          No worries, I respect your privacy and I will never abuse your email.
          <br />
          <br />
          Every week, on Tuesday, you will receive a list of free tutorials I
          made during the week (I write one every day) and news on other
          training products I create.
        </p>
        <div className="border border-gray-300 md:w-[60%] w-full flex justify-center items-center h-8 md:h-12 rounded-full ">
          <input
            type="email"
            name=""
            placeholder="example@gmail.com"
            id=""
            autoComplete="OFF"
            className="md:w-[65%] bg-transparent border-none outline-none px-1"
          />
          <button className="border md:w-[30%] w-24 border-sky-600 rounded-full py-1 md:py-2 bg-transparent text-sm hover:bg-sky-600 hover:text-white">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
