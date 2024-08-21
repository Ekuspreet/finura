import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Image,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import { Finura } from "../Contants";

const Navigation = () => {
  return (
    <>
      <Navbar shouldHideOnScroll className="py-2">
        <Link to={"/homepage"}>
          <NavbarBrand className="mt-2">
            <Image src={Finura} width={45} isBlurred />
          </NavbarBrand>
        </Link>
        <NavbarContent justify="right">
          <NavbarItem>
            <Link to={"/about"}>
              <button
                size="md"
                className="box-border rounded-lg border-finuramain bg-transparent p-2 font-bold text-finuradark hover:border-1"
              >
                About Us
              </button>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link to={"/hire"}>
              <button
                size="md "
                className="sticky top-0 rounded-lg bg-gradient-to-tr from-finuracontrast to-finuramain p-2 font-bold text-white transition duration-300 hover:bg-gradient-to-bl hover:from-finuracontrast hover:to-finuramain"
              >
                Hire Us
              </button>
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default Navigation;
