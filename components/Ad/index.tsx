import React from "react";

const Ad = () => {
  return (
    <div className="w-full p-5 flex justify-center items-center bg-white">
      <div className="w-[95%] md:[70%] lg:w-[60%] flex flex-col justify-around min-h-[30vh]">
        <p className="text-2xl font-bold font-sans">Interested in working with us?</p>
        <p className="text-gray-400 text-lg">
          {`We love to work on exciting and innovative projects. Our expertise and
          knowledge can help you deliver your next project, big or small,
          whatever your location. If you're interested in working with us, we'd
          love to know more.`}
        </p>
        <p className="text-gray-400 text-lg">Mail us your details on <a href="mailto:bentilshadrack72@gmail.com" className="text-blue-600">bentility@gmail.com</a></p>
      </div>
    </div>
  );
};

export default Ad;
