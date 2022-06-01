import { FaSearch } from "react-icons/fa";
import React from "react";

interface Props{
  className?: string
}
const SearchBar:React.FC<Props> = ({className}) => {
  return (
    <div className="w-[95%] md:w-[80%] my-10 p-2 flex justify-center  bg-white">
      <div className="flex w-full items-center justify-around">
        <input
          type="text"
          name="search"
          id="search"
          className="border pr-1 pl-2  md:pl-5 border-gray-300 outline-none w-[80%] md:w-[90%] md:h-10 h-8 md:text-lg text-sm"
          placeholder="ENHANCED BY Google"
        />
        <div className="h-8 md:h-10 w-[15%] md:w-[8%] items-center flex justify-start">
        <button className="bg-blue-600 p-2 text-white text-sm justify-center  items-center flex  h-[90%] w-full rounded-sm">
            <FaSearch />
        </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
