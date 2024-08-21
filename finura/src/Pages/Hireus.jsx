import { useState } from "react";
import Navigation from "../Components/Navigation";
import { Input, Image, Textarea, Button } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";

import Cookie from "js-cookie";

import happyman from "../Assets/Data/happyman.avif";
import axios from "axios";
const Hireus = () => {
  const [formData, setFormData] = useState({
    name: Cookie.get("finura_username"),
  });
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const discordWebhookUrl = `https://discord.com/api/webhooks/${import.meta.env.VITE_WEBHOOK_ID}/${import.meta.env.VITE_WEBHOOK_TOKEN}`;

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
        onOpen();
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
            value: formData.name,
          },
          {
            name: "Email",
            value: formData.email,
          },
          {
            name: "Phone Number",
            value: formData.phone,
          },
          {
            name: "Organisation Name",
            value: formData.orgname,
          },
          {
            name: "Description",
            value: formData.description,
          },
        ],
      },
    ];
    let data = JSON.stringify({ embeds });
    sendMessageToDiscord(data);
  }

  return (
    <>
      <Navigation />

      <div className="heading">
        <div className="Hero relative mx-8 flex flex-col items-center py-2 text-center text-xl md:gap-3 md:py-8 md:text-2xl">
          <div className="text-2xl md:text-4xl">
            {" "}
            We appreciate you for considering us !<br />
            <center>
              <Image src={happyman} className="my-4 w-60"></Image>
            </center>
            Now, Let&rsquo;s know more about{" "}
            <span className="bg-gradient-to-br from-finuradark via-finuramain to-finuradark bg-clip-text font-bold text-transparent">
              Your
            </span>{" "}
            needs.
          </div>
        </div>
      </div>
      <form className="mx-auto mb-20 mt-8 flex w-11/12 flex-col gap-2 rounded-2xl border-1 border-finuradark p-3 py-6 md:w-6/12 md:p-8">
        <Input
          onChange={handleFormChange}
          name="email"
          value={formData.email}
          type="email"
          description="We'll never share your email or phone number with anyone else."
          isRequired
          label="Email"
        />
        <Input
          onChange={handleFormChange}
          name="name"
          value={formData.name}
          type="text"
          isRequired
          label="Name"
        />
        <Input
          onChange={handleFormChange}
          name="phone"
          value={formData.phone}
          type="text"
          min={0}
          className="appearance-none"
          label="Phone Number"
        />
        <Input
          onChange={handleFormChange}
          name="orgname"
          value={formData.orgname}
          type="text"
          label="Organisation Name"
        />
        <Textarea
          value={formData.description}
          onChange={handleFormChange}
          name="description"
          label="Project Description in Brief"
          isRequired
          placeholder="Tell us about your design project in a few words. Briefly share your goals, ideas, and any specific requirements."
        />
        <Button
          className="bg-finuracontrast font-bold text-white"
          onClick={sendData}
        >
          Let&rsquo;s Collaborate
        </Button>
        {/* <Input type='file' isReadOnly classNames={{inputWrapper:"h-20"}} label="Any Reference File(in .pdf, .jpeg, .png)" placeholder=' ' /> */}
      </form>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent className="py-5">
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Thank You !
              </ModalHeader>
              <ModalBody>
                <p>
                  Thank you for reaching out to us with your design request!
                  🎨.We&apos;ll review your request promptly and get back to you
                  as soon as possible. If you have any urgent inquiries, feel
                  free to contact us directly at finurastudios@gmail.com.
                </p>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default Hireus;
