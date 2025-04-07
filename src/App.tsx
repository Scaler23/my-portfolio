import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./assets/components/Landing page/LandingPage"
import MySkill from "./assets/components/About us/mySkill/mySkill"
import "./index.css"
function App() {
  return (
   <BrowserRouter>
   <Routes>
        <Route path="/" element={<LandingPage/>}>          
        <Route path="/mySkill" element={<MySkill/>}/>
        </Route>
   </Routes>
   </BrowserRouter>
  )
}
export default App
