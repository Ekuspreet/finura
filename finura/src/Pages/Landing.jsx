import React from 'react';
// import herobg from "../Assets/herobg.jpg";
import logo from "../Assets/logo.png"
import {Input,Button} from "@nextui-org/react";
const Landing = () => {

  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <>

      <div className="content z-1 mt-4">

        <div className="brandlogo">
          <img src={logo} alt="" className='mt-2 w-10/12 max-w-68 md:max-w-80 mx-auto' />
        </div>


        <div className="welcome font-main text-2xl md:text-4xl mt-8  font-bold  md:leading-snug  text-center px-10 ">
          Hey, Wanderer! <br /> <span className='text-4xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-br from-teal-600 via-cyan-700 to-emerald-600 '> Dreaming Big? </span>
          <br /> Let's make it real together!!
        </div>



        <form className="input mt-8 md:mt-10 flex flex-col items-center">
        <Input type="email" label="Enter Your Name Here!"  classNames={{
          base:"w-9/12 mx-auto max-w-[50em] h-16 ",
          inputWrapper:["bg-white-100 border-1"],
          label:" text-finuradark text-md font-semibold",
          input:"text-lg"
        }}/>
              <Button  className="border-2 bg-finuramain text-white font-medium w-2/4 max-w-[30em]  ">
        Let's Dive In!
      </Button>
        
        </form>
      



      </div>



    </>
  )
}

export default Landing
