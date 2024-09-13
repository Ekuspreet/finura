import { useContext, useEffect } from "react";
// import herobg from "../Assets/herobg.jpg";
import logo from "../Assets/logo.png";
import { UserContext } from "../App";
import { Input, Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import Cookie from "js-cookie";
const Landing = () => {
  const [username, setUsername] = useContext(UserContext);
  const nav = useNavigate();
  function toMain() {
    Cookie.set("finura_username", username);
    nav("/homepage");
  }
  useEffect(() => {
    if (Cookie.get("finura_username")) {
      nav("/homepage");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="content z-1 mt-4">
        <div className="brandlogo">
          <img
            src={logo}
            alt=""
            className="max-w-68 mx-auto mt-2 w-10/12 md:max-w-80"
          />
        </div>

        <div className="welcome font-main mt-8 px-10 text-center text-2xl font-bold md:text-4xl md:leading-snug">
          Hey, Wanderer! <br />{" "}
          <span className="bg-gradient-to-br from-finuradark via-finuramain to-finuradark bg-clip-text text-4xl text-transparent md:text-8xl">
            {" "}
            Dreaming Big?{" "}
          </span>
          <br /> Let&rsquo;s make it real together!!
        </div>

        <form className="input mt-8 flex flex-col items-center md:mt-10">
          <Input
            type="email"
            label="Enter Your Name Here!"
            classNames={{
              base: "w-9/12 mx-auto max-w-[50em] h-16 ",
              inputWrapper: ["bg-white-100 border-1"],
              label: " text-finuradark text-md font-semibold",
              input: "text-lg",
            }}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Button
            onClick={toMain}
            className="w-2/4 max-w-[30em] border-2 bg-finuramain font-semibold text-white"
          >
            Let&rsquo;s Dive In!
          </Button>
        </form>
      </div>
    </>
  );
};

export default Landing;
