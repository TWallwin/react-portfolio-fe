import { pages } from "../pages/index"
const{About, Coding, Contact} = pages

export default function MobileRoutes() {
    return <><About />
        <Contact />
        <Coding isMobile/>
    </>
}