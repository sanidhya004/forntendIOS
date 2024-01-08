import React from 'react'
import { Divider } from 'antd';
const Graph = () => {
  return (
    <section class="bar-graph-horizontal bar-graph-one  " style={{background:"gray"}}>
  <div class="bar-one">
    <span class="year">9:41</span>
    <Divider type="vertical" dashed={true} />
    <div class="bar" data-percentage="0"></div>
  </div>
  <div class="bar-two">
    <span class="year text-sm h-[50px]"><div className='flex flex-col relative h-full'><p className='absolute top-0'>11 Am</p> <p  className='absolute bottom-0'>11 Am</p></div></span>
    <Divider type="vertical" dashed={true} />
    <div class="bar h-[50px] bg-blue-300 opacity-90" data-percentage="Cofee With Marisa"></div>
  </div>
  <div class="bar-three">
  <span class="year text-sm  h-[90px]"><div className='flex flex-col relative h-full'><p className='absolute top-0'>11 Am</p> <p  className='absolute bottom-0'>11 Am</p></div></span>
  <Divider type="vertical" dashed={true} />
    <div class="bar h-[100px] bg-gray-300" data-percentage="Meeting wit Dany Trinth"></div>
  </div>
  
</section>
  )
}

export default Graph
