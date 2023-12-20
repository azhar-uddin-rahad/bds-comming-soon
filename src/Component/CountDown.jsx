import React, { useEffect, useState } from "react";

const CountDown = ({ days, hours, minutes, seconds }) => {
    const [isSecondNumOne, setIsSecondNumOne] = useState(false);
    const [isDaysNumOne,setIsDaysNumOne]=useState(false);
    const [isHoursNumOne,setIsHoursNumOne]=useState(false);
    const [isMinutesNumOne,setIsMinutesNumOne]=useState(false);
    
    // Check if 'seconds' is not null or undefined before calling toString()
    const secondNumCount = seconds !== null && seconds !== undefined ? seconds.toString() : '';
    const hoursNumCount = hours !== null && hours !== undefined ? hours.toString() : '';
    const daysNumCount = days !== null && days !== undefined ? days.toString() : '';
    const minutesNumCount = minutes !== null && minutes !== undefined ? minutes.toString() : '';

    useEffect(() => {
      if(daysNumCount.length === 1){
        setIsDaysNumOne(true);
      }
      else {
        setIsDaysNumOne(false);
      }
      if(hoursNumCount.length === 1){
        setIsHoursNumOne(true);
      }
      else {
        setIsHoursNumOne(false);
      }

      if(minutesNumCount.length === 1){
        setIsMinutesNumOne(true);
      }
      else {
        setIsMinutesNumOne(false);
      }
      if (secondNumCount.length === 1) {
        setIsSecondNumOne(true);
      }
       else {
        setIsSecondNumOne(false);
      }
     
    }, [days, hours, seconds, minutes]);
  return (
    <div className="flex lg:justify-start items-center justify-center lg:gap-x-5 gap-x-2 mt-10">

      <div>
        <p className="font-inter text-[20px] font-bold leading-7"> <span className="lg:px-5 lg:py-5 xl:px-9 xl:py-10 sm:px-9 sm:py-10 py-5 px-5 lg:text-[40px] xl:text-[56] sm:text-[56px] text-[20px]   bg-[#ff1e1e] rounded-xl text-[#fff]">{isDaysNumOne ? `0${days}` : days}</span></p>
        
      </div>
      <p>:</p>
      <div>
        <p className="font-inter text-[20px] font-bold leading-7"> <span className="lg:px-5 lg:py-5 xl:px-9 xl:py-10 sm:px-9 sm:py-10 py-5 px-5 lg:text-[40px] xl:text-[56] sm:text-[56px] text-[20px]   bg-[#ff1e1e] rounded-xl text-[#fff]">{isHoursNumOne ? `0${hours}` : hours}</span></p>
      {/*   <div className="mt-14">
          <p className="text-2xl text-center">Hours</p>
        </div> */}
        
      </div>
      <p>:</p>
      <div>
        <p className="font-inter text-[20px] font-bold leading-7"> <span className="lg:px-5 lg:py-5 xl:px-9 xl:py-10 sm:px-9 sm:py-10 py-5 px-5 lg:text-[40px] xl:text-[56] sm:text-[56px] text-[20px]   bg-[#ff1e1e] rounded-xl text-[#fff]">{isMinutesNumOne ? `0${minutes}` : minutes}</span></p>
        
      </div>
      <p>:</p>
      <div>
        <p className="font-inter text-[20px] font-bold leading-7"> <span className="lg:px-5 lg:py-5 xl:px-9 xl:py-10 sm:px-9 sm:py-10 py-5 px-5 lg:text-[40px] xl:text-[56] sm:text-[56px] text-[20px]   bg-[#ff1e1e] rounded-xl text-[#fff]">{isSecondNumOne ? `0${seconds}` : seconds}</span></p>
        
      </div>
     </div>
  );
};
CountDown.defaultProps = {
  days: 10,
  hours: 10,
  minutes: 10,
  seconds: 10,
};
export default CountDown;
