import React from 'react'
import { TextInput } from '../Components/TextInput'
import { Background } from '../Components/Background'
import { herobg } from '../Pages/Assets/herobg.jpg'
import { Logo } from '../Components/Logo'
import '../Pages/Styles/landing.css'

export const Landing = () => {
  return (
    <>
  <div className="body">
    <div className="background">
    <Background image = {herobg} alt = "HeroBG"/>
    </div>
    <div className="header">
    <Logo/>
    
    </div>
   
    <TextInput />
    </div>
    </>
  )
}
