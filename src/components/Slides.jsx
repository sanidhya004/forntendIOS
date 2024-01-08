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
  
    <div className='flex  p-3   overflow-y-hidden scroll   sm:min-h-[500px] sm:w-full w-[80dvw]  min-h-[450px]  max-h-fit sm:translate-y-[-130px]   ' >
      <Suspense fallback={<LoadGlimmer/>}>
     {message.map((itemout,id)=>{
      console.log(itemout)
            return(
              <Slider {...settings} className="sidecas" >
                
                    <div id={itemout.id} className="card_cont " key={itemout.id}><Card title={itemout.title} from={itemout?.from} message={itemout.message} handleMessages={handleMessages} id={itemout.id} loc={itemout.location} type={itemout.type} time={itemout.time}/></div>
                   
               </Slider>
              
            )
        })}
        </Suspense>
    </div>
    
  )
}

export default Slides
