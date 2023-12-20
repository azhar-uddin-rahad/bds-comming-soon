import React, { useEffect, useRef, useState } from "react";
import banner from "../assets/placeholder.png";
import { FaRegCirclePlay } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import BDS from "../assets/BDs.mp4"
const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    if (showVideo && videoRef.current) {
      videoRef.current.play().catch(error => {
        // Handle any autoplay issues here.
      });
    }
  }, [showVideo,showModal]);

  
  const handlePlayVideo = () => {
    setShowVideo(true);
    setShowModal(true)
  };
  return (
    <div>
      <div className="relative">
        <div className="w-full 2xl:h-[600px] xl:h-[500px] lg:h-[400px] lg:w-full sm:h-[70%] h-[300px] pt-[100px] rounded-xl">
         <img className="w-full h-full border-[10px] border-solid border-[#fff] rounded-xl" src={banner} alt="" />
        </div>
        <button
          className="absolute lg:top-[60%]  sm:left-[45%] top-[60%] left-[40%]"
          onClick={handlePlayVideo} 
        >
          <span class="relative flex h-11 w-11">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fff] opacity-75 "></span>
            <span class="relative inline-flex rounded-full text-5xl text-[#fff]">
              <FaRegCirclePlay></FaRegCirclePlay>
            </span>
          </span>
        </button>
      </div>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between lg:p-5 p-2 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="lg:text-3xl text-lg font-semibold">
                    Bangla Drop Shipping
                  </h3>
                  <button
                    className="p-1 ml-auto bg-[#000] border-0 text-[#fff] rounded-full float-right text-xl lg:text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <IoClose></IoClose>{" "}
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <video ref={videoRef} width="550" height="400" controls autoplay loop>
                    <source src={BDS} type="video/mp4" />
                  </video>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      
    </div>
  );
};

export default VideoPlayer;
