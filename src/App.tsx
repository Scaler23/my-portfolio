import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./assets/components/Landing page/LandingPage"
import "./index.css"
function App() {
  return (
   <BrowserRouter>

   <Routes>
        <Route path="/" element={<LandingPage/>}/>          
   </Routes>
   </BrowserRouter>
  )
}
export default App
