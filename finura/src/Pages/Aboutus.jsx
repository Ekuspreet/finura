import React from 'react'
import Navigation from '../Components/Navigation'
import chandan from '../Assets/Members/chandan.jpg'
import { Image, link } from '@nextui-org/react'
import insta from '../Assets/Socials/instagram.png'
import linkedin from '../Assets/Socials/linkedin.png'
import gmail from '../Assets/Socials/gmail.png'
const members = [
   {
    name: 'Chandan Bir Singh',
    position : 'Vector Artist',
    age: '21',
    intro : ' Chandan Bir Singh is a talented Vector Artist, showcasing his creative prowess at the youthful age of 21. With a vibrant personality and a passion for artistic expression, Chandan introduces himself as a dynamic individual, bringing life to his artistry. ',
    hobbies : ['Dance','Photography','Videography'],
    email : 'singhchandanbir@gmail.com',
    img : chandan,
    instagram : "https://www.instagram.com/singh_chandanbir",
    linkedin : ""

   },
   {
    name: 'Ekuspreet Singh',
    position : 'Logo & Typographic Designer',
    age: '21',
    intro : ' Ekuspreet Singh is a talented Vector Artist, showcasing his creative prowess at the youthful age of 21. With a vibrant personality and a passion for artistic expression,Ekus introduces himself as a dynamic individual, bringing life to his artistry. ',
    hobbies : ['Dance','Photography','Videography'],
    email : 'singhchandanbir@gmail.com',
    img : chandan,
    instagram : "https://www.instagram.com/singh_chandanbir",
    linkedin : ""

   },
   {
    name: 'Inderpreet Singh',
    position : 'Logo & Typographic Designer',
    age: '21',
    intro : ' Ekuspreet Singh is a talented Vector Artist, showcasing his creative prowess at the youthful age of 21. With a vibrant personality and a passion for artistic expression,Ekus introduces himself as a dynamic individual, bringing life to his artistry. ',
    hobbies : ['Dance','Photography','Videography'],
    email : 'singhchandanbir@gmail.com',
    img : chandan,
    instagram : "https://www.instagram.com/singh_chandanbir",
    linkedin : ""

   },
]
const Aboutus = () => {
  return (
    <>
    <Navigation/>
    <div className="relative Hero py-2 md:py-8  mx-8  flex flex-col items-center text-center text-2xl md:text-4xl  text-finuradark font-bold" > About Us</div>

    
      <div className="  pb-8  mx-8 text-xl font-semibold md:text-2xl text-center" > Currently, Team <span className='font-bold text-transparent bg-clip-text bg-gradient-to-br from-finuradark via-finuramain to-finuradark'>Finura is {members.length} </span>  Member{members.length>1 && 's'} Strong</div>
    

    <div className='members   px-8 mb-20 md:w-full flex flex-col items-center gap-8'>
      {
        members.map( (member,index)=>(
          <div key={index} className="member rounded-3xl  flex border-2 w-9/12 ">
            <Image className='w-[25em] rounded-3xl shadow-lg shadow-finuradark shadow-'  src={member.img} alt={member.name} />
            <div className="details pt-10 pl-10 pb-5 w-7/12 text-justify">
              <h1 className='text-4xl font-bold text-finuramain -mx-1'>{member.name}</h1>
              <h3 className='text-2xl font-semibold text-gray-500'>{member.position}</h3>
              <p className='mt-4 text-md leading-6'>
                {member.intro}
              </p>
              <h3 className=' mt-4 text-lg'>My Hobbies Include..</h3>
              <div className="hobbies flex gap-3 ">
                
              {member.hobbies.map((hobby,index)=>(
                <div id={index} className='hobby border-2 border-finuracontrast py-1 px-2 rounded text-finuradark font-semibold'>{hobby}</div>
              ))}
              
             </div>
              <h3 className=' mt-4 text-lg'>Connect With Me</h3>
                <div className="socials flex gap-5">
                  <a href={member.instagram}><img className='w-9' src={insta} alt="" /></a>
                  <a href={member.linkedin}><img className='w-9' src={linkedin} alt="" /></a>
                  <a href={`mailto:${member.email}?body=Hello%2C%20${member.name}`}><img className='w-9' src={gmail} alt="" /></a>
                </div>
            </div>
          </div>
        )

        )
      }
    </div>
    </>
  )
}

export default Aboutus