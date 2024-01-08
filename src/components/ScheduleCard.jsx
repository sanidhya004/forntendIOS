import React from 'react'
import {FiCommand} from 'react-icons/fi'
import {FaEnvelope,FaBackspace,FaMicrophone} from 'react-icons/fa'
import Graph from './Graph'

const ScheduleCard = ({title,from,isLarge,handleisLarge,message}) => {
  return (
    <div className='h-[550px]  text-[#333232] relative w-6/12 bg-[#F9F8F8] rounded-xl text-wrap  translate-x-[-150px] translate-y-[40px]'>
    {/* header */}
  <div className='bg-[#F3F2F2] w-full px-10 h-3 py-6 flex items-center justify-between rounded-t-xl'>
      
      <div className='flex gap-2 items-center'> <p className='font-bold'>See my availiblity:today</p></div>
      <div className='text-[#6E6F6F] '><FaMicrophone /></div>
  </div>
  {/* main */}
  <div className='px-10 py-10 flex flex-col gap-12'>
   <div className="flex flex-col gap-0">
    <div className='flex justify-between items-start'>
    <p className=' text-3xl  capitalize font-black'>Available until 1PM</p>
   
    </div>
  
    <p className='text-base font-normal'>Would you like to create <br/> an event for Coffee with Marisa at 11 AM?</p>
   </div>
   <div className=' sm:text-wrap truncate text-wrap overflow-y-scroll bg-gray-200 px-4 py-2 w-1/2 rounded-xl h-[180px]  '>
     <Graph/>
   </div>

   
  

  </div>
  {/* Footer */}
  <div className='sm:px-10 flex flex-col justify-start gap-6'>
    <hr/>
  <div className='flex  gap-2 text-[#6E6F6F] ' >

       <button className='bg-[#EEEFEE] px-7 py-2 rounded-xl flex justify-center items-center font-bold'>Create Calender</button>
       <button className='bg-[#EEEFEE] px-7 py-2  rounded-xl justify-center items-center font-bold'>Full Calender</button>
       <button className='bg-[#EEEFEE] px-7 py-2  rounded-xl justify-center items-center font-bold'>Edit event</button>
       <button className='bg-[#EEEFEE] px-7 py-2  rounded-xl justify-center items-center font-bold'>Dismiss</button>

  </div>
  <div className='flex  gap-2 text-[#6E6F6F]' >

<button className='text-xs flex gap-5 text-[#6E6F6F]'><FiCommand/><p>More Actions</p></button>


</div>
  </div>
</div>
  )
}

export default ScheduleCard
