import React from "react";
import { Suspense } from "react";

import {
  FaEnvelope,
  FaBackspace,
  FaMapMarkerAlt,
  FaLocationArrow,
} from "react-icons/fa";
import { Divider } from "antd";
import LazyLoad from "react-lazy-load";
import { LazyLoadImage } from "react-lazy-load-image-component";
import LoadGlimmer from "./LoadGlimmer";

const Mapview = ({ title, from, isLarge, handleisLarge,purpose,subtext }) => {
  return (
    <div className="h-full  text-[#333232] relative w-screen mr-9 bg-[#F9F8F8] rounded-xl">
      {/* header */}
      <div className="bg-[#F3F2F2] w-full px-10 h-3 py-6 flex items-center justify-between rounded-t-xl">
        <div className="flex gap-2 items-center">
          {" "}
          {isLarge && <FaBackspace onClick={handleisLarge} />}{" "}
          <FaMapMarkerAlt />
          <p className="font-extrabold">{title}</p> | <p>{from}</p>
        </div>
      </div>
      {/* main */}
      <div className=" flex flex-col">
        <div className="flex flex-col gap-3">
          <div className="w-full ">
          <Suspense loading={<LoadGlimmer/>}>
            <iframe
               loading="lazy"
              width="100%"
              
              height="100%"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=delhi+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              
            </iframe>
             
            </Suspense>
          </div>
        </div>
        <div className="sm:w-2/5 sm:text-wrap px-10">
          <p className="font-extrabold capitalize py-9">{title}</p>
          <div className="flex flex-col">
          <p>{purpose}</p>
          <p>{subtext}</p>
          </div>
          
        </div>
      </div>
      {/* Footer */}
      <div className="absolute  bottom-4 px-10 w-full">
        <Divider
          className="mb-[-7px] text-[#6E6F6F] "
          style={{ fontWeight: "bolder" }}
        />
        <div className="flex  py-4 gap-2  text-[#6E6F6F] overflow-x-hidden text-sm font-extrabold  ">
          <button className="bg-[#EEEFEE] pl-5  pr-7 py-2 rounded-3xl flex justify-start items-center gap-2 ">
            <div>
              <FaLocationArrow />
            </div>
            <div className="text-left">
              <p>Get Directions</p>{" "}
              <p className="text-[0.75rem] font-extralight mt-[-5px] opacity-60">
                Enable location
              </p>
            </div>
          </button>
          <button className="bg-[#EEEFEE] px-4 py-2 rounded-3xl">
            Forward
          </button>
          <button className="bg-[#EEEFEE] px-4 py-2 rounded-3xl">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Mapview;
