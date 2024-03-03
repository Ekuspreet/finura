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
                            <Button size='md' className='bg-transparent hover:border-1 border-finuramain  text-finuradark font-bold'>About Us</Button>

                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link to={"/hire"}>
                            <Button size='md' className=' sticky top-0  bg-gradient-to-tr from-finuracontrast  to-finuramain text-white font-bold'>Hire Us</Button>

                        </Link>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
            </>
  )
}

export default Navigation