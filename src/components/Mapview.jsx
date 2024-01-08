import React from "react";
import { FiCommand, FiMapPin } from "react-icons/fi";
import {
  FaEnvelope,
  FaBackspace,
  FaMicrophone,
  FaLongArrowAltDown,
  FaLocationArrow,
} from "react-icons/fa";

const Mapview = ({ title, from, isLarge, handleisLarge, message }) => {
  return (
    <div className="min-h-[550px]  text-[#333232] relative w-6/12 bg-[#F9F8F8] rounded-xl text-wrap  translate-x-[-150px] translate-y-[40px]">
      {/* header */}
      <div className="bg-[#F3F2F2] w-full px-10 h-3 py-6 flex items-center justify-between rounded-t-xl">
        <div className="flex gap-2 items-center">
          {" "}
          {isLarge && <FaBackspace onClick={handleisLarge} />}{" "}
          <FaLocationArrow />
          <p className="font-bold">Philz Coffee</p> .{" "}
          <p className="text-gray-400">Location</p>
        </div>
        <div className="text-[#6E6F6F] ">
          <FaMicrophone />
        </div>
      </div>
      {/* main */}
      <div className=" flex flex-col ">
        
          <div className="flex justify-between items-start">
            <iframe
              width="100%"
              height="190"
              frameborder="0"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              
            </iframe>
          </div>
          <div className="px-10 py-10 gap-1">
            <p className=" text-3xl  capitalize font-black">Philz Cafe</p>
         
          <div className=" sm:text-wrap truncate text-wrap">
            <p className="line-clamp-6 flex flex-col gap-3 font-bold">
              <p>Custom-blended java in a casual setting.</p>{" "}
              <p className="text-gray-400 text-sm">
              20686 Stevens Creek Blvd <br/>Cupertino, CA 95014
             
              </p>
             
            </p>
          </div>
          </div>
       
      </div>
      {/* Footer */}
      <div className="sm:px-10 flex flex-col justify-start gap-6">
        <hr />
        <div className="flex  gap-2 text-[#6E6F6F] ">
          <button className="bg-[#EEEFEE] px-7 py-2 rounded-xl flex justify-center items-center font-bold">
            <div className="flex items-center gap-2">
              <FaLocationArrow/>
              <div className="text-left">
                <p>Get Location</p>
                <p className="text-xs text-gray-400">Share location</p>
              </div>

            </div>
          </button>
          <button className="bg-[#EEEFEE] px-7 py-2  rounded-xl justify-center items-center font-bold">
            See details
          </button>
          <button className="bg-[#EEEFEE] px-7 py-2  rounded-xl justify-center items-center font-bold">
            Find more cafes nearby
          </button>
        </div>
        <div className="flex  gap-2 text-[#6E6F6F]">
          <button className="text-xs flex gap-5 text-[#6E6F6F] py-3">
            <FiCommand />
            <p>More Actions</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mapview;
