import React from "react";
import { AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";

const FooterDiv = () => {
  return (
    <div
      className="footer p-[5rem] mb-4 bg-blueColor rounded-[10px] gap-[8] grid
    grid-cols-5 m-auto justify-center items-center"
    >
      <div>
        <div className="logoDiv">
          <h1 className="logo text-[25px] text-white pb-[1.5rem] ">
            <strong>Job</strong>Search
          </h1>
        </div>
        <p className="text-[15px] opacity-70 pb-[13px] leading-7 text-white">
          We Alwaays Make our Seekers and companies Finds the best job and emploerys and find the
          best candidate.
        </p>
      </div>

      <div className="grid">
        <span className="divTitle text-[18px] font-semibold text-white pb-[1.5rem]">Company</span>
        <div className="grid gap-3">
          <li className="text-white opacity-70 hover:opacity-100">About us</li>
          <li className="text-white opacity-70 hover:opacity-100">News</li>
          <li className="text-white opacity-70 hover:opacity-100">Features</li>
          <li className="text-white opacity-70 hover:opacity-100">FAQ</li>
        </div>
      </div>
      <div className="grid">
        <span className="divTitle text-[18px] font-semibold text-white pb-[1.5rem]">Company</span>
        <div className="grid gap-3">
          <li className="text-white opacity-70 hover:opacity-100">About us</li>
          <li className="text-white opacity-70 hover:opacity-100">News</li>
          <li className="text-white opacity-70 hover:opacity-100">Features</li>
          <li className="text-white opacity-70 hover:opacity-100">FAQ</li>
        </div>
      </div>
      <div className="grid">
        <span className="divTitle text-[18px] font-semibold text-white pb-[1.5rem]">Company</span>
        <div className="grid gap-3">
          <li className="text-white opacity-70 hover:opacity-100">About us</li>
          <li className="text-white opacity-70 hover:opacity-100">News</li>
          <li className="text-white opacity-70 hover:opacity-100">Features</li>
          <li className="text-white opacity-70 hover:opacity-100">FAQ</li>
        </div>
      </div>
      <div className="grid">
        <span className="divTitle text-[18px] font-semibold text-white pb-[1.5rem]">
          Conatct Info
        </span>
        <div>
          <small className="text-[15px] text-white">hrithiknotforryou@gmail.com</small>
          <div className="icons gap-4 flex py-[1rem]">
            <AiFillInstagram className="bg-white  h-[40px] w-[40px] rounded-full icon text-blueColor" />
            <AiFillTwitterCircle className="bg-white  h-[40px] w-[40px] rounded-full icon text-blueColor" />
            <AiFillLinkedin className="bg-white  h-[40px] w-[40px] rounded-full icon text-blueColor" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterDiv;
