import React, { useState } from "react";
import banner from '../assets/banner_bg.png'
import Timer from "./Timer";
import VideoPlayer from "./VideoPlayer ";

const FlashSale = () => {
  return (
    <div>
      <div style={{ 
      backgroundImage: `url(${banner})`,
      backgroundPosition: "center",
      width: "100%",
      height: "100%"
      }}>
      <div className="max-w-[80%] mx-auto h-[100vh] pt-[100px] ">
      <div className="lg:flex  block lg:gap-x-20 items-center ">
          <div className="lg:w-[60%] w-full  lg:pr-10">
            <div className="">
              <div>
                <h3 className="text-[#212529] font-inter font-bold lg:text-[48px] text-[30px] mb-2 leading-[50px] lg:leading-[70px] capitalize">
                  Join the <span className="text-[#ff0000]">Bangla Drop Shipping</span> Revolution, Get Ready
                  for the Launch!
                </h3>  
              </div>
            </div>
            <div className="pt-16">
              <Timer></Timer>
            </div>
          </div>
          <div className="lg:w-[40%]  w-full">
            <VideoPlayer></VideoPlayer>
          </div>
        </div>
      </div>

        {/*  */}
      </div>
    </div>
  );
};

export default FlashSale;
