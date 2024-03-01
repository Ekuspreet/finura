import React from 'react'
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
const SoftwareBox = ({name, url}) => {
  return (
    <div>
    <Card className="py-4 w-fit">
    <CardHeader className=" mx-auto flex-col items-start">
      
      <h4 className="font-bold text-large text-center">Adobe Photoshop</h4>
    </CardHeader>
    <CardBody className="overflow-visible py-2">
      <Image
        alt="Card background"
        className="object-cover rounded-xl"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/2101px-Adobe_Photoshop_CC_icon.svg.png"
        width={200}
      />
    </CardBody>
  </Card>
  </div>
  )
}

export default SoftwareBox