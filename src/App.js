import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header"
import About from "./components/pages/About"
import Coding from "./components/pages/Coding"
import Contact from "./components/pages/Contact"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/coding" element={<Coding />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
