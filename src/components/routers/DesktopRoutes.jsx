import { Route, Routes } from "react-router-dom";
import { pages } from "../pages/index"
const{About, Coding, Contact} = pages

export default function DesktopRoutes() {
    return  <Routes>
    <Route exact path='/' element={<About />} />
    <Route exact path="/about" element={<About />} />
    <Route exact path="/coding" element={<Coding />} />
    <Route exact path="/contact" element={<Contact />} />
    </Routes>
}