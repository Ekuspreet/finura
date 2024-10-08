import React from "react";
import Navigation from "../Components/Navigation";
import chandan from "../Assets/Members/chandan.jpg";
import ekus from "../Assets/Members/ekus.jpg";
import inder from "../Assets/Members/inder.jpg";
import { Image } from "@nextui-org/react";
import insta from "../Assets/Socials/instagram.png";
import linkedin from "../Assets/Socials/linkedin.png";
import gmail from "../Assets/Socials/gmail.png";
const members = [
  {
    name: "Chandan Bir Singh",
    position: "Vector Artist",
    age: "20",
    intro:
      "  I meticulously craft captivating designs with precision and creativity. Transforming ideas into stunning visuals, I specialize in delivering high-quality illustrations with meticulous attention to detail and style. ",
    hobbies: ["Movies", "Photography", "Music"],
    email: "singhchandanbir@gmail.com",
    img: chandan,
    instagram: "https://www.instagram.com/singh_chandanbir",
    linkedin: "https://www.linkedin.com/in/chandanbir-singh/",
  },
  {
    name: "Ekuspreet Singh",
    position: "Logo & Typographic Designer",
    age: "21",
    intro:
      " I create designs that are detail oriented and impactful as I believe that design is the strongest language to convey some meaning. It deeply connects with the audience with ways they may not even understand. Design is Nuance.",
    hobbies: ["Music", "Reading"],
    email: "ekuspreetsingh2@gmail.com",
    img: ekus,
    instagram: "https://www.instagram.com/singh_ekuspreet/",
    linkedin: "https://www.linkedin.com/in/ekuspreet-singh-16734a267/",
  },
  {
    name: "Inderpreet Singh",
    position: "Graphic Designer",
    age: "20",
    intro:
      " You'll get me through my designs as design is the manifestation of one's expression. ",
    hobbies: ["Dance", "Photography", "Videography"],
    email: "singhinderpreet238@gmail.com",
    img: inder,
    instagram: "https://www.instagram.com/_.inderpreet_singh._/",
    linkedin: "https://www.linkedin.com/in/inderpreet-singh13",
  },
];
const Aboutus = () => {
  return (
    <>
      <Navigation />
      {/* <div className="relative Hero py-2 md:py-8  mx-8  flex flex-col items-center text-center text-2xl md:text-4xl  text-finuradark font-bold">
        {" "}
        About Us
      </div> */}

      <div className="mx-8 pb-8 text-center text-xl font-semibold md:text-2xl">
        {" "}
        Currently, Team{" "}
        <span className="bg-gradient-to-br from-finuradark via-finuramain to-finuradark bg-clip-text font-bold text-transparent">
          Finura is {members.length}{" "}
        </span>{" "}
        Member{members.length > 1 && "s"} Strong
      </div>

      <div className="members mb-20 flex flex-col items-center gap-8 px-8 lg:w-full">
        {members.map((member, index) => (
          <div
            key={index}
            className="member flex w-full flex-col items-stretch rounded-3xl border-2 p-2 sm:w-8/12 md:w-6/12 lg:w-10/12 lg:flex-row"
          >
            <div className="image">
              <Image
                classNames={{
                  img: "h-[full] w-96 object-cover rounded-2xl ",
                  wrapper: " h-full w-full lg:w-[25em] mx-auto rounded-3xl",
                }}
                isBlurred
                src={member.img}
                alt={member.name}
              />
            </div>
            <div className="details w-full py-5 pl-5 lg:pl-10 lg:pt-10">
              <h1 className="text-2xl font-bold text-finuramain lg:text-4xl">
                {member.name}
              </h1>
              <h3 className="text-lg font-semibold text-gray-500 lg:text-2xl">
                {member.position}
              </h3>
              <p className="mt-2 text-justify text-base leading-6 lg:mt-4 lg:text-lg">
                {member.intro}
              </p>
              <h3 className="mt-2 text-lg lg:mt-4 lg:text-base">
                My Hobbies Include..
              </h3>
              <div className="hobbies flex flex-wrap gap-3">
                {member.hobbies.map((hobby, index) => (
                  <div
                    key={index}
                    className="hobby rounded border-2 border-finuracontrast px-2 py-1 font-semibold text-finuradark"
                  >
                    {hobby}
                  </div>
                ))}
              </div>
              <h3 className="mt-2 text-lg lg:mt-4 lg:text-base">
                Connect With Me
              </h3>
              <div className="socials flex gap-5">
                <a href={member.instagram}>
                  <img className="w-7" src={insta} alt="Instagram" />
                </a>
                <a href={member.linkedin}>
                  <img className="w-7" src={linkedin} alt="LinkedIn" />
                </a>
                <a
                  href={`mailto:${member.email}?body=Hello%2C%20${member.name}`}
                >
                  <img className="w-7" src={gmail} alt="Email" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Aboutus;
