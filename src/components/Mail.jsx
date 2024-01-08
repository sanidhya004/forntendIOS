import React from 'react'
import {FiCommand} from 'react-icons/fi'
import {FaEnvelope,FaBackspace,FaMicrophone} from 'react-icons/fa'

const Mail = ({title,from,isLarge,handleisLarge,message}) => {
  return (
    <div className='h-[550px]  text-[#333232] relative w-6/12 bg-[#F9F8F8] rounded-xl text-wrap  translate-x-[-150px] translate-y-[40px]'>
        {/* header */}
      <div className='bg-[#F3F2F2] w-full px-10 h-3 py-6 flex items-center justify-between rounded-t-xl'>
          
          <div className='flex gap-2 items-center'> {isLarge && <FaBackspace onClick={handleisLarge}/>} <FaEnvelope/><p className='font-bold'>{title}</p> | <p>{from}</p></div>
          <div className='text-[#6E6F6F] '><FaMicrophone /></div>
      </div>
      {/* main */}
      <div className='px-10 py-10 flex flex-col gap-12'>
       <div className="flex flex-col gap-3">
        <div className='flex justify-between items-start'>
        <p className='text-xl'>Marisa Lu</p>
        <p className='text-base font-medium text-[#a8a8a8]'>Just Now</p>
        </div>
      
        <p className=' text-3xl  capitalize font-black'>Coffee?</p>
       </div>
       <div className=' sm:text-wrap truncate text-wrap'>
        <p className='line-clamp-6 flex flex-col gap-9 font-bold'><p>Hey Jason,</p> <p>Was wondering if you'd be interested in meeting my team at Philz Coffee at 11 AM today. No pressure if you can't make it, although I think you guys would really get along!</p> <p>Marisa</p></p>
       </div>

       
      

      </div>
      {/* Footer */}
      <div className='sm:px-10 flex flex-col justify-start gap-6'>
        <hr/>
      <div className='flex  gap-2 text-[#6E6F6F] ' >

           <button className='bg-[#EEEFEE] px-7 py-2 rounded-xl flex justify-center items-center font-bold'>Reply</button>
           <button className='bg-[#EEEFEE] px-7 py-2  rounded-xl justify-center items-center font-bold'>Forward</button>
           <button className='bg-[#EEEFEE] px-7 py-2  rounded-xl justify-center items-center font-bold'>Delete</button>

      </div>
      <div className='flex  gap-2 text-[#6E6F6F]' >

<button className='text-xs flex gap-5 text-[#6E6F6F]'><FiCommand/><p>More Actions</p></button>


</div>
      </div>
    </div>
  )
}

export default Mail
