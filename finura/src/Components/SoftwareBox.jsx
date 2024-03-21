import React from 'react'
import {Card, CardBody, Image} from "@nextui-org/react";
const SoftwareBox = ({index, name, url}) => {
  return (
    <div>
    <Card key={index} className="py-4 px-2 w-fit">
    
    <div className=' text-tiny md:text-large font-semibold '>{name}</div>
    <CardBody className="overflow-visible py-2">
      <Image
        alt="Card background"
        className="object-cover rounded-xl w-20 md:w-36 "
        src={url}
        
      />
    </CardBody>
  </Card>
  </div>
  )
}

export default SoftwareBox