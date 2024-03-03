
import Aboutus from './Pages/Aboutus';
import Hireus from './Pages/Hireus';
import Homepage from './Pages/Homepage'
import  Landing  from './Pages/Landing'
import { Routes, Route } from 'react-router-dom';
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Landing/>} />
      <Route path='/homepage' element={<Homepage/>} />
      <Route path="/about" element={<Aboutus/>} />
      <Route path='/hire' element={<Hireus/>} />
     {/* <Homepage/> */}
     </Routes>
    </>
  )
}

export default App
