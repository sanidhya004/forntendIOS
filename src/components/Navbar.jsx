import React, { useState } from 'react'
import {FaEnvelope,FaPlus,FaMapMarkerAlt} from 'react-icons/fa'
import { Carousel } from 'antd'

const Navbar = ({message=[],setState,state}) => {
   

   
  return (
    <>
    <div  className='sm:flex sm:flex-col gap-5 container cursor-pointer relative  hidden ' >
          <button className= " text-black sm:pr-[18rem] sm:pl-3 py-2  w-2/5 rounded-xl backdrop-blur-3xl  flex justify-start items-center gap-4 text-sm">
             <p><FaPlus/></p> <p className='font-semibold'>New </p>
        </button>
        {message.map((item,id)=>{
            return(
       <button onClick={()=>{setState(id)}} className= {id==state?" scale-up-ver-to text-black sm:pr-[18rem] sm:pl-3 py-2 bg-[#cbcacc] sm:w-2/5 rounded-xl backdrop-blur-3xl border-white/50 border-2 flex justify-start items-center gap-4 text-sm":" sm:pr-[18rem] sm:pl-3 py-2 hover:bg-[#cbcacc] w-2/5 rounded-xl backdrop-blur-2xl hover:border-white/50 hover:border-2 flex justify-start items-center gap-4 text-sm"}>
             <p>
                {item.message && <FaEnvelope/>}
                {!item.message && <FaMapMarkerAlt/>}
             </p> 
             <div className='flex gap-2'><p className='font-semibold'>{item.title}</p>|<p className='font-light'>{item?.from}</p> </div>
        </button> 
            )
        })}
       

    </div>

    <div className='sm:hidden flex  w-screen py-4 scroll justify-end'>
      <ul className='flex overflow-x-auto gap-[30px] w-screen items-end '>
      {message.map((item,id)=>{
            return(
       <li onClick={()=>{setState(id)}} className= {id==state?" text-black flex min-w-fit bg-[#cbcacc] rounded-xl p-4":"flex min-w-fit "}>
             <p>
                {item.message && <FaEnvelope/>}
                {!item.message && <FaMapMarkerAlt/>}
             </p> 
             <div className='flex gap-2'><p className='font-semibold'>{item.title}</p>|<p className='font-light'>{item?.from}</p> </div>
        </li> 
            )
        })}
      
       
      </ul>
     
       
    </div>


    </>

  )
}

export default Navbar
