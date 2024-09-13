import { createContext, useState } from "react";
import Aboutus from "./Pages/Aboutus";
import Hireus from "./Pages/Hireus";
import Homepage from "./Pages/Homepage";
import Landing from "./Pages/Landing";
import { Routes, Route } from "react-router-dom";

const UserContext = createContext();
function App() {
  const [username, setUsername] = useState();

  return (
    <>
      <UserContext.Provider value={[username, setUsername]}>
        <Routes>
          <Route path="/" element={<Landing />} exact />
          <Route path="/homepage" element={<Homepage />} exact />
          <Route path="/about" element={<Aboutus />} exact />
          <Route path="/hire" element={<Hireus />} exact />
          {/* <Homepage/> */}
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
export { UserContext };
