import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header"
import DesktopRoutes from "./components/routers/DesktopRoutes";
import { useDesktopMediaQuery } from "./helpers/mediaQueryHelpers";
import MobileRoutes from "./components/routers/MobileRoutes";
import useScrollSnap from 'react-use-scroll-snap';
import { useRef } from 'react'

function App() {
  const isDesktop = useDesktopMediaQuery()

  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 100, delay: 50 });

  return (
    <BrowserRouter>
      <div className="App" ref={scrollRef} >
        <Header />
        <main>
        <div className='pages'>
            {isDesktop ? <DesktopRoutes /> : <MobileRoutes />}
          </div>
          </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
