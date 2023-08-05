import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

const SearchDiv = () => {
  return (
    <div className="searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-[3rem]">
      <form action="">
        <div
          className="firstDiv flex justify-between items-center rounded-[8px] gap-[10px] 
          p-5 bg-white shadow-lg shadow-greyIsh-700"
        >
          <div className="flex gap-2 items-center">
            <AiOutlineSearch className="text-[25px] icon" />
            <input
              type="text"
              className="bg-transparent text-blue-500 w-[100%] focus:outline-none"
              placeholder="Search by Company..."
            />
            <AiOutlineCloseCircle className="text-[25px] icon" />
          </div>
          <div className="flex gap-2 items-center">
            <BsFillHouseDoorFill className="text-[25px] icon" />
            <input
              type="text"
              className="bg-transparent text-blue-500 w-[100%] focus:outline-none"
              placeholder="Search Job Here..."
            />
            <AiOutlineCloseCircle className="text-[25px] icon" />
          </div>
          <div className="flex gap-2 items-center">
            <CiLocationOn className="text-[25px] icon" />
            <input
              type="text"
              className="bg-transparent text-blue-500 w-[100%] focus:outline-none"
              placeholder="Search by Location..."
            />
            <AiOutlineCloseCircle className="text-[25px] icon" />
          </div>
          <button
            className="h-full p-5 px-10 rounded-[10px] text-white cursor-pointer bg-blueColor
          hover:bg-blue-300"
          >
            Search
          </button>
        </div>
      </form>

      <div className="secDiv flex justify-center items-center gap-10">
        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="relevence" className="font-semibold text-[#808080]">
            Sort By :
          </label>
          <select id="relevence" className="px-4 py-1 rounded-[3px] bg-white">
            <option value="">Relevence</option>
            <option value="">Inclusive</option>
            <option value="">Starts With</option>
            <option value="">Contain</option>
          </select>
        </div>
        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="type" className="font-semibold text-[#808080]">
            Sort By :
          </label>
          <select id="type" className="px-4 py-1 rounded-[3px] bg-white">
            <option value="">Full-time</option>
            <option value="">Part-time</option>
            <option value="">Remote</option>
            <option value="">Contract</option>
          </select>
        </div>
        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="level" className="font-semibold text-[#808080]">
            Sort By :
          </label>
          <select id="level" className="px-4 py-1 rounded-[3px] bg-white">
            <option value="">senior</option>
            <option value="">junior</option>
            <option value="">Intermediate</option>
            <option value="">Advocate</option>
          </select>
        </div>
        <span className="text-black">Clear All</span>
      </div>
    </div>
  );
};

export default SearchDiv;
