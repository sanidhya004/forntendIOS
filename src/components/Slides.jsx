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
  
    <div className='flex flex-col p-3   overflow-y-hidden scroll  lg:h-[650px]  sm:h-[500px] sm:w-full w-[80dvw]  h-[450px] sm:translate-y-[-130px] ' >
      <Suspense fallback={<LoadGlimmer/>}>
     {message.map((itemout,id)=>{
      
            return(
              <Slider {...settings} className="sidecas" >
                
                    <div id={itemout.id} className="card_cont " key={itemout.id}><Card title={itemout.title} from={itemout?.from} message={itemout.message} handleMessages={handleMessages} id={itemout.id} /></div>
                    {
                       itemout?.nested.map((item,id)=>{
                        
                        if(item.id){
                          if(item.location){
                            return(
                              <div id={item.id} className=" "  key={item.id}><Card title={item.title} loc={item?.location} message={item.message} handleMessages={handleMessages} idp={itemout.id} id={item.id} purpose={item.purpose} subtext={item.subtext} /></div>
                              )
  
                          }
                          else{
                            return(
                              <div id={item.id} className=" "  key={item.id}><Card title={item.title} from={item?.from} message={item.message} handleMessages={handleMessages} idp={itemout.id} id={item.id} /></div>
                              )
                          }

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
