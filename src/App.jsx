import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header"
import DesktopRoutes from "./components/routers/DesktopRoutes";
import { useDesktopMediaQuery } from "./helpers/mediaQueryHelpers";
import MobileRoutes from "./components/routers/MobileRoutes";
import React from 'react';

function App() {
  const isDesktop = useDesktopMediaQuery()

  const refs = {
    about : React.createRef(), 
    coding : React.createRef(),
    contact : React.createRef(),
  }
  

  return (
    <BrowserRouter>
      <div className="App" >
        <Header refs={refs}/>
        <main>
        <div className='pages'>
            {isDesktop ? <DesktopRoutes refs={refs} /> : <MobileRoutes />}
          </div>
          </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
