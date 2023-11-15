import React from 'react'
import { herobg } from '../Pages/Assets/herobg.jpg'
import './Styles/Background.css'
export const Background = (props) => {
  return (
   <img src={props.image} alt={props.alt} className='background'/>
  )
}
