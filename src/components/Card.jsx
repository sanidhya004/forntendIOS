import React, { useEffect, useState } from 'react'
import Mail from './Mail'
import Mapview from './Mapview'
import LazyLoad from 'react-lazy-load';
import {FaPlus} from 'react-icons/fa'
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

const Card = ({title,from,message,handleMessages,id,loc, purpose,subtext,idp}) => {

 
    const dummy_arr ={id: 1,
        title: "fefef",
        from: "Mary",
        message: `Hey Mansi, my profile got shortlisted on Internshala for the role of full stack developer.
      I have attached my resume for your reference.
      Here are some of my Links:
      `}
      var rand = Math.floor(Math.random() * (901)) + 100;

      const dummy_arr_rest ={ id:rand ,
        title: "fefef",
        purpose:"Pasta Company",
        subtext:"good pasta",
        location:"https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=delhi+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"

      }



    const items = [
        {
          key: '1',
          label: (
           <p onClick={()=>{handleMessages(dummy_arr_rest,rand,idp)}} >Add Location</p>
          ),
        },
        {
          key: '2',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
              2nd menu item (disabled)
            </a>
          ),

          disabled: false,
        },
       
      ];

    const[isLarge,setisLarge]=useState(false)
    const handleisLarge=()=>{
        setisLarge(!isLarge)
    }







  return (
  <>
    <div className={' rounded-xl sm:p-2  overflow-x-hidden sm:flex gap-2   lg:h-[600px]  h-[450px] side  hidden '}>
     
    <div className={ ' h-full w-full  rounded-xl  scale-down-right flex z-0'}>
      {from &&<Mail title={title} from={from} isLarge={isLarge} handleisLarge={handleisLarge} message={message} id={id}/> }
      {loc &&<Mapview title={title} from={from} isLarge={isLarge} handleisLarge={handleisLarge} purpose={purpose} subtext={subtext} id={id}/>}
    </div>
    <div className='absolute left-6/12   top-0'>
    <Dropdown
    menu={{
      items,
    }}

  >
    <button   className="bg-[#DCDCDD] h-fit p-3    text-white addbtn rounded-full ">
   


        <FaPlus/>

 

    </button>
    </Dropdown>
    </div>
    </div>
    <div className={' rounded-xl sm:p-2  overflow-x-hidden flex gap-2   lg:h-[600px]  h-[450px]  sm:hidden   '}>
     
     <div className={ ' h-full w-full  rounded-xl  scale-down-right flex z-0'}>
       {from &&<Mail title={title} from={from} isLarge={isLarge} handleisLarge={handleisLarge} message={message} id={id}/> }
       {loc &&<Mapview title={title} from={from} isLarge={isLarge} handleisLarge={handleisLarge} purpose={purpose} subtext={subtext} id={id}/>}
     </div>
     <div className='absolute left-6/12   top-0'>
     <Dropdown
     menu={{
       items,
     }}
 
   >
     <button   className="bg-[#DCDCDD] h-fit p-3    text-white addbtn rounded-full ">
    
 
 
         <FaPlus/>
 
  
 
     </button>
     </Dropdown>
     </div>
     </div>
    </>

  )
}

export default Card
