import React, { useState } from "react";
import { Menu, Segmented } from "antd";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { AiFillPicture } from "react-icons/ai";
import { MdFavorite } from "react-icons/md";
import img from "../assets/Icon.png";

const Sidebar = ({ collapse, current, setCurrent }) => {
  return (
    <div
      className={`transition-all shadow-xl md:flex fixed flex-col hidden  text-black h-screen bg-white w-40 ${
        collapse ? "left-0" : "-left-40"
      }`}
    >
      <div className="my-4 w-full flex flex-col items-center">
        <div className="w-full">
          <img src={img} className="m-auto mb-4" />
          <hr className="shadow" />
        </div>
        <div className="flex flex-col gap-3 my-8">
          <div
            className={` shadow border flex  py-2 px-6 transition-colors rounded-md ${
              current == 1
                ? "bg-orange-400 text-white font-semibold"
                : "cursor-pointer hover:bg-slate-50 active:bg-slate-100"
            }`}
            onClick={() => setCurrent(1)}
          >
            <GiPerspectiveDiceSixFacesRandom className="text-xl mr-3" />
            Random
          </div>
          <div
            className={` shadow border flex  py-2 px-6 transition-colors rounded-md ${
              current == 2
                ? "bg-orange-400 text-white font-semibold"
                : "cursor-pointer hover:bg-slate-50 active:bg-slate-100"
            }`}
            onClick={() => setCurrent(2)}
          >
            <AiFillPicture className="text-xl mr-2" />
            Grayscale
          </div>
          {/* <div
            className={` shadow border flex  py-2 px-6 transition-colors rounded-md ${
              current == 3
                ? "bg-orange-400 text-white font-semibold"
                : "cursor-pointer hover:bg-slate-50 active:bg-slate-100"
            }`}
            onClick={() => setCurrent(3)}
          >
            <MdFavorite className="text-xl mr-2" />
            Favourites
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
