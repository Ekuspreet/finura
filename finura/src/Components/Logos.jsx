import React from 'react'
import FetchLogos from './util/FetchLogos'
const Logos = () => {
    
  return (
    <div className='py-8 flex w-screen flex-col items-center gap-4'>
        <div className=" heading text-xl font-bold text-finuradark md:text-2xl text-center">
                Logo Designs
        </div>
        <div className="logos w-10/12 px-5  md:px-20 flex flex-wrap justify-evenly gap-4 md:gap-8">
             {/* <FetchLogos/> */}
            
        </div>
    </div>
  )
}

export default Logos