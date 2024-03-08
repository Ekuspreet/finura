import React, { useState, useEffect } from 'react'
import Navigation from '../Components/Navigation'
import { Input, Image, Textarea, Button } from "@nextui-org/react";
import happyman from '../Assets/Data/happyman.avif'
import axios from 'axios'
const Hireus = () => {

  const [formData, setFormData] = useState({})
  const discordWebhookUrl = `https://discord.com/api/webhooks/${import.meta.env.VITE_WEBHOOK_ID}/${import.meta.env.VITE_WEBHOOK_TOKEN}`


  function handleFormChange(event) {
    const { name, value } = event.target;

    if (name === "phone") {
      // Remove non-numeric characters and convert to a number
      const numericValue = parseFloat(value.replace(/\D/g, ""));

      // Check if the parsed value is a valid number
      if (!isNaN(numericValue)) {
        setFormData((formData) => ({ ...formData, [name]: numericValue }));
      } else {
        // Handle the case where the input is not a valid number (e.g., set to an empty string)
        setFormData((formData) => ({ ...formData, [name]: "" }));
      }
    } else {
      setFormData((formData) => ({ ...formData, [name]: value }));
    }


  }

  async function sendMessageToDiscord(message) {
    var config = {
      method: "POST",
      url: discordWebhookUrl,
      headers: { "Content-Type": "application/json" },
      data: message,
    };

    //Send the request
    axios(config)
      .then((response) => {
        console.log("Webhook delivered successfully");
        return response;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  }
  function sendData() {
    let embeds = [
      {
        title: "JOB REQUEST",
        color: 5174599,
        fields: [
          {
            name: "Customer Name",
            value: formData.name
          },
          {
            name: "Email",
            value: formData.email
          },
          {
            name: "Phone Number",
            value: formData.phone
          },
          {
            name: "Organisation Name",
            value: formData.orgname
          },
          {
            name: "Description",
            value: formData.description
          },
        ],
      },
    ];
    let data = JSON.stringify({ embeds });
    sendMessageToDiscord(data)
  }
  return (

    <>
      <Navigation />

      <div className="heading  ">
        <div className="relative Hero py-2 md:py-8  mx-8 text-xl md:gap-3 md:text-2xl flex flex-col items-center text-center" >

          <div className='text-2xl md:text-4xl '> We appreciate you for considering us !<br />
            <center>
              <Image
                src={happyman}
                className='w-60 my-4 '></Image>
            </center>

            Now, Let's know more about <span className=' font-bold text-transparent bg-clip-text bg-gradient-to-br from-finuradark via-finuramain to-finuradark' >Your</span> needs.
          </div>
        </div>
      </div>
      <form className='w-11/12 md:w-6/12 mx-auto flex flex-col gap-2 mt-8 mb-20 border-1 p-3 py-6 md:p-8 rounded-2xl border-finuradark'>
        <Input onChange={handleFormChange} name='email' value={formData.email} type="email" description="We'll never share your email or phone number with anyone else." isRequired label="Email" />
        <Input onChange={handleFormChange} name='name' value={formData.name} type="text" isRequired label="Name" />
        <Input onChange={handleFormChange} name='phone' value={formData.phone} type='text' min={0} className='appearance-none' isRequired label="Phone Number" />
        <Input onChange={handleFormChange} name='orgname' value={formData.orgname} type='text' label="Organisation Name" />
        <Textarea
          value={formData.description}
          onChange={handleFormChange}
          name='description'
          label="Project Description in Brief"
          placeholder="Tell us about your design project in a few words. Briefly share your goals, ideas, and any specific requirements."
        />
        <Button className='bg-finuracontrast text-white font-bold' onClick={sendData}>
          Let's Collaborate
        </Button>
        {/* <Input type='file' isReadOnly classNames={{inputWrapper:"h-20"}} label="Any Reference File(in .pdf, .jpeg, .png)" placeholder=' ' /> */}

      </form>
    </>
  )
}

export default Hireus