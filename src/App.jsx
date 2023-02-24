import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header"
import DesktopRoutes from "./components/routers/DesktopRoutes";
import { useDesktopMediaQuery } from "./helpers/mediaQueryHelpers";
import MobileRoutes from "./components/routers/MobileRoutes";

function App() {
  const isDesktop = useDesktopMediaQuery()


  return (
    <BrowserRouter>
      <div className="App" >
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
