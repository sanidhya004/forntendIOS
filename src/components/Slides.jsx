import React from 'react'
import Slider from "react-slick";
import Card from './Card';
import { Carousel } from 'antd';
import { Suspense } from 'react';
import LoadGlimmer from './LoadGlimmer';


const Slides = ({message=[],state,handleMessages}) => {
  var settings = {
    dots: false,
    
    speed: 900,
    initialSlide:1,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    infinite: false,
    
    
    
  };
  
 
    
  return (
  
    <div className='flex flex-col p-3   overflow-y-hidden scroll  lg:h-[650px]  h-[500px] ' >
      <Suspense fallback={<LoadGlimmer/>}>
     {message.map((item,id)=>{
      console.log("out",item)
            return(
              <Slider {...settings} className="sidecas" >
                
                    <div id={item.id} className="card_cont " key={item.id}><Card title={item.title} from={item?.from} message={item.message} handleMessages={handleMessages} id={id} /></div>
                    {
                       item.nested.length!=0 && item?.nested.map((item,id)=>{
                        console.log(item)
                        if(item.location){
                          return(
                            <div id={id} className=" "  key={item.id}><Card title={item.title} loc={item?.location} message={item.message} handleMessages={handleMessages} id={id} purpose={item.purpose} subtext={item.subtext} /></div>
                            )

                        }
                        else{
                          return(
                            <div id={item.id} className=" "  key={item.id}><Card title={item.title} from={item?.from} message={item.message} handleMessages={handleMessages} id={id} /></div>
                            )
                        }
                        
                       })
                    }
               </Slider>
              
            )
        })}
        </Suspense>
    </div>
    
  )
}

export default Slides
