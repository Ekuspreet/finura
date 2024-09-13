import SoftwareBox from "../Components/SoftwareBox";
import Navigation from "../Components/Navigation";
import { Image } from "@nextui-org/react";
import Cookie from "js-cookie";
import { softwares, Finura, Brand_stories } from "../Contants";
import StoryCircle from "../Components/StoryCircle";

const Homepage = () => {
  let username = Cookie.get("finura_username");

  return (
    <div>
      {/* Navbar */}
      <Navigation />

      <div className="Hero relative flex flex-col items-center py-8 text-center text-xl md:gap-3 md:text-2xl">
        {/* <Image className='absolute' width={100} height={100} src='https://storage.pixteller.com/designs/designs-images/2019-03-27/05/love-and-passion-background-backgrounds-romantic-1-5c9b9945866ba.png' ></Image> */}
        <div className="text-2xl md:text-4xl">
          Welcome,
          <span className="bg-gradient-to-br from-finuradark via-finuramain to-finuradark bg-clip-text font-bold text-transparent">
            {" "}
            {username}
          </span>
        </div>
        <br />
        <Image className="" src={Finura} width={500}></Image>
        <br />
        <div className="mt-2 w-10/12 text-justify sm:w-6/12 md:mt-0">
          We are a graphic design and branding studio based in Ludhiana, Punjab,
          India. We specialize in adding nuance and meaning to the designs that
          satisfy
          <span className="bg-gradient-to-br from-finuradark via-finuramain to-finuradark bg-clip-text font-bold text-transparent">
            {" "}
            your{" "}
          </span>
          requirements.
        </div>
      </div>

      <hr />

      <div className="softwares flex flex-col items-center gap-4 py-8 text-center">
        <div className="heading text-xl font-bold text-finuradark md:text-2xl">
          Softwares We Work In
        </div>

        <div className="software-content flex w-9/12 flex-wrap items-center justify-center gap-5">
          {softwares.map((software, index) => (
            <SoftwareBox
              key={index}
              name={software.app_name}
              url={software.image_link}
            />
          ))}
        </div>
      </div>
      <div className="Brand-stories flex flex-col items-center gap-4 py-8 text-center">
        <div className="heading text-xl font-bold text-finuradark md:text-2xl">
          Brands we have worked with
        </div>

        <div className="Stories-content flex w-9/12 flex-wrap items-center justify-center gap-5">
          {Brand_stories.map(
            (brand, index) => (
              console.log(brand), (<StoryCircle brand={brand} key={index} />)
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
