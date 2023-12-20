import React, { useState } from "react";
import banner from "../assets/banner_bg.png";
import Timer from "./Timer";
import VideoPlayer from "./VideoPlayer ";

const FlashSale = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${banner})`,
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <div className="lg:max-w-[90%] max-w-[100%] mx-auto h-[100vh] pt-[100px] lg:px-0 px-5">
          <div className="lg:flex  block lg:gap-x-20 items-center ">
            <div className="lg:w-[55%] w-full ">
              <div className="">
                <div>
                  <h3 className="text-[#212529] font-inter font-bold 2xl:text-[55px] lg:text-[40px] sm:text-[48px] text-[20px] mb-2 2xl:leading-[100px] sm:leading-[80px] leading-[50px] capitalize lg:text-start sm:text-center">
                    Join the{" "}
                    <span className="text-[#ff0000]">Bangla Drop Shipping</span>{" "}
                    Revolution, Get Ready for the Launch!
                  </h3>
                </div>
              </div>
              <div className="pt-16 lg:block  flex justify-center items-center">
                <div>
                <Timer></Timer>
                <div className="xl:mt-[60px] lg:mt-[50px] sm:mt-[60px] mt-[30px] flex items-center 2xl:gap-x-[90px] xl:gap-x-[90px] lg:gap-x-[70px] sm:gap-x-[85px] gap-x-12">
                  <p className="text-[#212529] font-inter font-medium xl:text-xl lg:text-base sm:text-xl text-[10px] uppercase lg:pl-6 xl:pl-8 sm:pl-14 pl-4">Days</p>
                  <p className="text-[#212529] font-inter font-medium xl:text-xl lg:text-base sm:text-xl text-[10px]  uppercase">Hours</p>
                  <p className="text-[#212529] font-inter font-medium xl:text-xl lg:text-base sm:text-xl text-[10px]  uppercase">minutes</p>
                  <p className="text-[#212529] font-inter font-medium xl:text-xl lg:text-base sm:text-xl text-[10px]  uppercase">seconds</p>
                </div>
                </div>
              </div>
            </div>
            <div className="lg:w-[45%]  w-full lg:h-full ">
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
