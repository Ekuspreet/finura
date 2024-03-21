import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Image } from "@nextui-org/react";
import { Link } from 'react-router-dom';
import finura_icon from '../Assets/finura_icon.png'

const Navigation = () => {
  return (
    <>
     <Navbar shouldHideOnScroll className='py-2'>
                <Link to={"/homepage"}>
                <NavbarBrand className='mt-2'>
                    <Image src={finura_icon} width={45} isBlurred />

                </NavbarBrand>
                </Link>
                <NavbarContent justify='right'>
                    <NavbarItem>
                        <Link to={"/about"}>
                            <button size='md' className='bg-transparent hover:border-1 border-finuramain  text-finuradark font-bold p-2 rounded-lg box-border '>About Us</button>

                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link to={"/hire"}>
                            <button size='md ' className=' sticky top-0 bg-gradient-to-tr from-finuracontrast to-finuramain text-white font-bold p-2 rounded-lg hover:bg-gradient-to-bl hover:from-finuracontrast hover:to-finuramain transition duration-300'>Hire Us</button>

                        </Link>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
            </>
  )
}

export default Navigation