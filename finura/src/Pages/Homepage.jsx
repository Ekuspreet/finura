import { React, useEffect, useContext } from "react";
import finura from "../Assets/logo.png";
import SoftwareBox from "../Components/SoftwareBox";
import { useLocation } from "react-router-dom";
import Navigation from "../Components/Navigation";
import { Image } from "@nextui-org/react";
import Logos from "../Components/Logos";
import Cookie from "js-cookie";
const Homepage = () => {
  let username = Cookie.get("finura_username");
 

  const softwares = [
    {
      app_name: "Adobe Photoshop",
      image_link:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1200px-Adobe_Photoshop_CC_icon.svg.png",
    },
    {
      app_name: "GIMP",
      image_link:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/The_GIMP_icon_-_gnome.svg/2048px-The_GIMP_icon_-_gnome.svg.png",
    },
    {
      app_name: "Inkscape",
      image_link:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Inkscape_Logo.svg/1200px-Inkscape_Logo.svg.png",
    },
    {
      app_name: "Adobe Illustrator",
      image_link:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/1200px-Adobe_Illustrator_CC_icon.svg.png",
    },
    {
      app_name: "Canva",
      image_link:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Canva_icon_2021.svg/1200px-Canva_icon_2021.svg.png",
    },
    {
      app_name: "Figma",
      image_link:
        "https://miro.medium.com/v2/resize:fit:1400/1*6XgfDCVn81AYX68Xvd2I-g@2x.png",
    },
    {
      app_name: "Indesign",
      image_link:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Adobe_InDesign_CC_icon.svg/800px-Adobe_InDesign_CC_icon.svg.png",
    },
  ];

  return (
    <div>
      <Navigation />

      <div className="relative Hero py-8 text-xl md:gap-3 md:text-2xl flex flex-col items-center text-center">
        {/* <Image className='absolute' width={100} height={100} src='https://storage.pixteller.com/designs/designs-images/2019-03-27/05/love-and-passion-background-backgrounds-romantic-1-5c9b9945866ba.png' ></Image> */}
        <div className="text-2xl md:text-4xl ">
          Welcome,
          <span className=" font-bold text-transparent bg-clip-text bg-gradient-to-br from-finuradark via-finuramain to-finuradark">
            {" "}
            {username}
          </span>
        </div>
        <br />
        <Image className="" src={finura} width={500}></Image>
        <br />
        <div className="sm:w-6/12 w-10/12 text-justify mt-2 md:mt-0 ">
          We are a graphic design and branding studio based in Ludhiana, Punjab,
          India. We specialize in adding nuance and meaning to the designs that
          satisfy
          <span className=" font-bold text-transparent bg-clip-text bg-gradient-to-br from-finuradark via-finuramain to-finuradark">
            {" "}
            your{" "}
          </span>
          requirements. 
        </div>
      </div>

      <hr />

      <div className="softwares text-center py-8 flex flex-col items-center gap-4">
        <div className="heading text-xl font-bold text-finuradark md:text-2xl">
          Softwares We Work In
        </div>

        <div className="software-content flex gap-5 flex-wrap w-9/12 items-center justify-center">
          {softwares.map((software, index) => (
            <SoftwareBox
              key={index}
              name={software.app_name}
              url={software.image_link}
            />
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default Homepage;
