import React, { useContext, useState } from "react";
// import herobg from "../Assets/herobg.jpg";
import logo from "../Assets/logo.png";
import { UserContext } from "../App";
import { Input, Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
const Landing = () => {

  const [username, setUsername] = useContext(UserContext);
  const nav = useNavigate()
  function toMain(){
    nav('/homepage' )
  }
  return (
    <>
      <div className="content z-1 mt-4">
        <div className="brandlogo">
          <img
            src={logo}
            alt=""
            className="mt-2 w-10/12 max-w-68 md:max-w-80 mx-auto"
          />
        </div>

        <div className="welcome font-main text-2xl md:text-4xl mt-8  font-bold  md:leading-snug  text-center px-10 ">
          Hey, Wanderer! <br /> <span className='text-4xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-br from-finuradark via-finuramain to-finuradark '> Dreaming Big? </span>
          <br /> Let's make it real together!!
        </div>

        <form className="input mt-8 md:mt-10 flex flex-col items-center">
        <Input type="email" label="Enter Your Name Here!"  classNames={{
          base:"w-9/12 mx-auto max-w-[50em] h-16 ",
          inputWrapper:["bg-white-100 border-1"],
          label:" text-finuradark text-md font-semibold",
          input:"text-lg"
        }}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
              <Button  onClick={toMain} className="border-2 bg-finuramain text-white font-semibold w-2/4 max-w-[30em]   ">
        Let's Dive In!
      </Button>
        
        </form>
      </div>
    </>
  );
};

export default Landing;
