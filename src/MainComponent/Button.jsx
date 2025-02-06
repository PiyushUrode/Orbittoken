import React from 'react';

const Button = ({ leftText, rightText }) => {
    return (
        <div className='flex flex-row align-middle w-full  py-5 justify-center  '>
            {/* <button className="relative px-5 py-2 phone:px-1 phone:py-1 border-2 border-[#00ffbf92] text-base cursor-pointer bg-black/30 overflow-hidden shadow-[inset_0_0_15px_7px_rgba(0,255,192,0.5)]
 
        [clip-path:polygon(92%_0%,100%_33%,100%_100%,6%_100%,0%_75%,0%_0%)] flex justify-between items-center text-white w-[300px] h-[60px] transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_rgba(0,255,192,0.5),inset_0_0_15px_15px_rgba(0,255,192,0.5)]">
          <div className='flex justify-center flex-row items-center gap-5 h-15 w-1/2 border border-white rounded-full'>  
        <div className='w-2/5 h-15 bg-gradient-to-r from-[#64b3f4] to-[#c2e59c] flex justify-center items-center rounded-full'>
        <span className="z-10">{leftText}</span>
          
           </div>
        <div className='w-3/5 h-20 flex justify-center items-center text-white'> 

        <span className="ml-auto z-10">{rightText}</span>

        </div>
        </div>
      </button> */}

<button className="relative flex items-center justify-between font-semibold border-2 border-black text-base cursor-pointer transition-all duration-300 ease-in-out 
  w-[80%] sm:w-full h-[60px] rounded-xl "
   style={{
    background: "linear-gradient(180deg, rgba(1,108,140,1) 0%, rgba(1,56,73,1) 50%, rgba(0,0,0,1) 100%)",


  }}>
  
  {/* Left side with gradient */}
  <div className="w-1/2 h-full flex items-center justify-center  ">
    <span className="text-white z-10">{leftText}</span>
  </div>

  <div className=" h-full flex items-center justify-center  ">
    <span className="text-white z-10">-</span>
  </div>
  

  {/* Right side with dark background */}
  <div className="w-1/2 h-full flex items-center justify-center ">
    <span className="text-white z-10">{rightText}</span>
  </div>
</button>


        </div>
    );
};

export default Button;
