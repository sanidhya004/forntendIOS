import React from 'react'
import {FaEnvelope,FaBackspace} from 'react-icons/fa'

const Mail = ({title,from,isLarge,handleisLarge,message}) => {
  return (
    <div className='h-full  text-[#333232] relative w-full bg-[#F9F8F8] rounded-xl  '>
        {/* header */}
      <div className='bg-[#F3F2F2] w-full px-10 h-3 py-6 flex items-center justify-between rounded-t-xl'>
          
          <div className='flex gap-2 items-center'> {isLarge && <FaBackspace onClick={handleisLarge}/>} <FaEnvelope/><p className='font-bold'>{title}</p> | <p>{from}</p></div>
      </div>
      {/* main */}
      <div className='px-10 py-10 flex flex-col'>
       <div className="flex flex-col gap-3">
       <p className='text-xl'>{from}</p>
        <p className=' text-3xl font-extrabold capitalize'>{title}</p>
       </div>
       <div className='sm:w-2/5 sm:text-wrap'>
        <p>{message}</p>
       </div>

       
      

      </div>
      {/* Footer */}
      <div className='flex px-10 py-4 gap-2 text-[#6E6F6F] ' >
           <button className='bg-[#EEEFEE] px-4 py-2 rounded-md'>Reply</button>
           <button className='bg-[#EEEFEE] px-4 py-2 rounded-md'>Forward</button>
           <button className='bg-[#EEEFEE] px-4 py-2 rounded-md'>Delete</button>

      </div>
    </div>
  )
}

export default Mail
