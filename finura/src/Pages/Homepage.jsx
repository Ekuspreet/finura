import {React,useEffect,useState} from 'react'
import finura_icon from '../Assets/finura_icon.png'
import finura from '../Assets/logo.png'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Image} from "@nextui-org/react";
import SoftwareBox from '../Components/SoftwareBox';
const Homepage = () => {

    const [username,setUsername] = useState("Guest")
    // useEffect(
    // {    if (usname != ""){
    //         setUsername(usname)
    //     }
    // },[])
   
  return (
    <div>
        <Navbar className='py-2'>
            <NavbarBrand className='mt-2'>
               <Image src={finura_icon} width={45} isBlurred></Image>
                
            </NavbarBrand>
            <NavbarContent justify='right'>
                <NavbarItem>
                    <Link>
                    <Button size='md' className='bg-transparent hover:border-1 border-finuramain  text-finuradark font-bold'>About Us</Button>
                    
                    </Link>
                </NavbarItem>
                <NavbarItem>
                <Link>
                    <Button size='md' className=' sticky top-0  bg-gradient-to-tr from-finuracontrast  to-finuramain text-white font-bold'>Hire Us</Button>
                    
                    </Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>



        <div className="relative Hero py-8 text-xl md:gap-3 md:text-2xl flex flex-col items-center text-center" >
            {/* <Image className='absolute' width={100} height={100} src='https://storage.pixteller.com/designs/designs-images/2019-03-27/05/love-and-passion-background-backgrounds-romantic-1-5c9b9945866ba.png' ></Image> */}
            <div className='text-2xl md:text-4xl '>Welcome,<span className=' font-bold text-transparent bg-clip-text bg-gradient-to-br from-finuradark via-finuramain to-finuradark' > {username}</span></div>
            <br />
            <Image className='' src={finura} width={500}></Image>
            <br />
            <div className='sm:w-6/12 w-11/12 text-justify mt-2 md:mt-0 '>is a graphic design and branding studio based in Ludhiana, Punjab, India. We specialize in adding nuance and meaning to the designs that satisfy<span className=' font-bold text-transparent bg-clip-text bg-gradient-to-br from-finuradark via-finuramain to-finuradark' > your </span>requirements.</div>
        </div>

        <hr />


        <div className="softwares text-center py-8">
        <div className="heading text-xl font-bold text-finuradark md:text-2xl">
            Softwares We Work In
        </div>

        <div className="software-content">
                <SoftwareBox/>
        </div>
        </div>




    </div>
  )
}

export default Homepage