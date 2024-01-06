import React, { useEffect, useState } from 'react'
import Mail from './Mail'
import Mapview from './Mapview'
import LazyLoad from 'react-lazy-load';
import {FaPlus} from 'react-icons/fa'
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

const Card = ({title,from,message,handleMessages,id,loc, purpose,subtext}) => {

    const dummy_arr ={id: 1,
        title: "fefef",
        from: "Mary",
        message: `Hey Mansi, my profile got shortlisted on Internshala for the role of full stack developer.
      I have attached my resume for your reference.
      Here are some of my Links:
      `}

      const dummy_arr_rest ={id: 1,
        title: "fefef",
        purpose:"Pasta Company",
        subtext:"good pasta",
        location:"https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=delhi+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"

      }



    const items = [
        {
          key: '1',
          label: (
           <p onClick={()=>{handleMessages(dummy_arr_rest,id)}} >Add Location</p>
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

    <div className={' rounded-xl sm:p-2  overflow-x-hidden flex gap-2   lg:h-[650px]  h-[500px]'}>
     
    <div className={ ' h-full w-full  rounded-xl  scale-down-right flex z-0'}>
      {from &&<Mail title={title} from={from} isLarge={isLarge} handleisLarge={handleisLarge} message={message} /> }
      {loc &&<Mapview title={title} from={from} isLarge={isLarge} handleisLarge={handleisLarge} purpose={purpose} subtext={subtext} />}
    </div>
    <Dropdown
    menu={{
      items,
    }}

  >
    <button   className="bg-[#DCDCDD] h-fit p-3    text-white addbtn rounded-full sm:static absolute left-1/4 z-50 top-5">
   


        <FaPlus/>

 

    </button>
    </Dropdown>
    </div>

  )
}

export default Card
