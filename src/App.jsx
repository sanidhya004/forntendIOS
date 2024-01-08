import React, { useState } from "react";
import { useEffect } from "react";
import Slides from "./components/Slides.jsx";
import Navbar from "./components/Navbar.jsx";
import data from '../src/assets/data.json'
import { Button, message, Space } from 'antd';


const App = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Location tab added Swipe right',
    });
  };
  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'Feature not implementable',
    });
  };
  const [time, setTime] = useState("");
  const [state, setState] = useState(11);
  const tempdata=data.messages
  const [messages,setMessages]=useState(tempdata)
  const Timehandler = () => {
    const date = new Date();
    const temp = `${date.getHours()}:${date.getMinutes()}`;

    setTime(temp);
  };
  const handleState = (id) => {
    setState(id)
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        
        inline: "start",
      });

    
    }
  };

  useEffect(() => {
    Timehandler();
    setInterval(Timehandler, 10000);
  }, [time]);

 
  const handleMessages=(arr,id,key)=>{
    
    const temp=[]
     messages.map((item)=>{
        if(item.id==key){
        
          item.nested.push(arr);

        }
        temp.push(item)

     })

    setMessages(temp)
    success()
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        left: element.scrollWidth,
        block: 'nearest',
        behavior: 'smooth',
      });
    }
    

    
    
     
  }
  return (
    <div className="bg scroll sm:h-screen bg-pan-left min-h-[100dvh] relative">
      {contextHolder}
      <div className="sm:hidden fixed  left-9 w-fit z-0">
        <div className="text-9xl  text-gray-600 opacity-10 inbox_text font-light">
            Review <br/> Inbox
          </div>
      </div>
      <div className="float relative h-fit w-screen   sm:px-20 pt-10 flex flex-col gap-5 px-3 z-30">
        {/* Header bg */}
        <div className=" sm:flex justify-between hidden ">
          <div className=" sm:text-9xl text-xl text-gray-600 opacity-10 inbox_text font-light">
            Review Inbox
          </div>
          <div className="text-sm text-gray-900 " onClickCapture={success}>{time}</div>
        </div>
      
        <div className="flex  sm:max-h-6/12 sm:flex-row flex-col  ">  
        {/* Navbar */}
          <div className="text-gray-500 w-2/5  max-h-full sm:static fixed bottom-0" >
            <Navbar message={messages} setState={handleState} state={state} error={error} />
          </div>
        {/* Carousel */}
          <div className="sm:w-3/5 w-full  h-fit">
            <Slides message={messages} state={state} handleMessages={handleMessages}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
