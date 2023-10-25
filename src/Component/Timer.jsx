import React, { useEffect, useState } from 'react'
import CountDown from './CountDown';

const Timer = () => {
    const [day,setDay]=useState(null);
    const [second,setSecond]=useState(null);
    const [minute,setMinute]=useState(null);
    const [hour,setHour]=useState(null);
    
  
    let interval;
    const startTimer=()=>{
        const countDownDate=new Date("December 25,2023").getTime();
        interval=setInterval(()=>{
            const now=new Date().getTime();
            const distance=countDownDate-now;
            const days=Math.floor(distance / (24 * 60 * 60 * 1000));
            const hours = Math.floor(
                (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
              );
            const minutes= Math.floor((distance% (60 * 60 * 1000)) / (1000 * 60))
            const seconds=Math.floor((distance % (60 * 1000)) / 1000);
            if(distance < 0 ){
                clearInterval(interval.current)
            }
            else{
                setDay(days);
                setHour(hours);
                setMinute(minutes);
                setSecond(seconds)
            }

            
        })
    };
    useEffect(()=>{
        startTimer();
    })
  /*   console.log("day",day);
    console.log("hours",hour);
     */
  return (
    <div>
        <CountDown days={day} hours={hour} minutes={minute} seconds={second}></CountDown>
    </div>
  )
}

export default Timer