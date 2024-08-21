import { React } from "react";
import finura from "../Assets/logo.png";
import SoftwareBox from "../Components/SoftwareBox";
import Navigation from "../Components/Navigation";
import { Image } from "@nextui-org/react";
import Cookie from "js-cookie";
import Logos from "../Components/Logos";
const Homepage = () => {
  let username = Cookie.get("finura_username") || "Guest";


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
    <div >
      {/* Navbar */}
      <Navigation />
      {/* Heading */}
      <div className="relative Hero py-8 text-xl md:gap-3 md:text-2xl flex flex-col items-center ">

        <br />
        <Image className=" " src={finura} width={500}></Image>
        <br />
        {/* Information */}
        <div className="sm:w-6/12 w-10/12 text-justify mt-2 md:mt-0 ">
          <div className="text-2xl md:text-4xl font-semibold ">
            Welcome
            <span className=" font-bold text-transparent bg-clip-text bg-gradient-to-br from-finuradark via-finuramain to-finuradark">
              {" "}
              {username},
            </span>
          </div>

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
      {/* Softwares We Work In */}
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
      <hr />

      {/* Portfolio Starts Here */}
      {/* Logo Designs */}

      <div className="portfolio  py-8 flex flex-col items-center gap-4 ">
        <div className="heading text-xl  font-bold text-finuradark md:text-2xl">
          Design Portfolio
        </div>
          <section className="px-3 w-9/12 ">
            <div className="heading text-xl font-semibold text-finuracontrast">Logo Designs</div>
            <div className="logos">
              <Logos />
            </div>
          </section>
      </div>
    </div>
  );
};

export default Homepage;
