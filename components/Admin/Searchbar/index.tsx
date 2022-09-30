import React from "react";
import { RiSearch2Line } from "react-icons/ri";
import { FaBlog } from "react-icons/fa";
import Link from "next/link";

interface Props {
  value?: string;
  className?: string;
  onSearch?: (e:string) => void;
  tweek?: boolean
}
const Searchbar = ({ value, className, onSearch, tweek }: Props) => {
  const [search, setSearch] = React.useState(value || "");
  const handleSearch = (e: any) => {
    setSearch(e.target.value);
    if (onSearch) onSearch(e.target.value);
  }
  return (
    <div className="flex w-96 justify-between items-center gap-x-1">
      <div className="bg-active-bg h-10 w-[90%] rounded-full flex items-center px-2 gap-2 ">
        <RiSearch2Line className="text-lg text-active cursor-pointer" />
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search"
          autoComplete="off"
          value = {search}
          onChange = {handleSearch}
          className="bg-transparent text-base focus:outline-none border-0 w-[90%] placeholder:text-active text-active"
        />
      </div>
    {
      tweek && (
        <Link href={"/"}>
        <FaBlog className="text-xl text-active cursor-pointer" />
      </Link>
      )
    }
    </div>
  );
};

export default Searchbar;
