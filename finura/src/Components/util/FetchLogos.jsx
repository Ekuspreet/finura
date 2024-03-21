import React, {useEffect, useState} from 'react'

const FetchLogos = () => {
    const [images,setImages] = useState([])

    useEffect( ()=>{
        const importLogos = async () =>{
          const modules = import.meta.glob('/src/Assets/Logos/*', { eager: true})
          const importedImages = await Promise.all(
            Object.keys(modules).map((key) => modules[key])
          );
          setImages(importedImages)
          
        };

        importLogos()

    },[]

    );

    return (
        <>
      {images.map((image, index) => (
        <img width={200} key={index} src={image.default} alt={`Image ${index}`} />
      ))}
    </>

  )
}

export default FetchLogos