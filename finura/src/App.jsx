
import Homepage from './Pages/Homepage'
import  Landing  from './Pages/Landing'
import { Routes, Route } from 'react-router-dom';
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Landing/>} />
      <Route path='/homepage' element={<Homepage/>} />
     {/* <Homepage/> */}
     </Routes>
    </>
  )
}

export default App
