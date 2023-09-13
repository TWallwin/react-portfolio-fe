import { pages } from "../pages/index"
const{About} = pages

export default function DesktopRoutes(props) {
    return  <About refs={props.refs} />
}