import React from "react";
import { Link } from "react-router-dom";
import Typed from "react-typed";

const HEADERS =['about', 'coding', 'contact']

export default class Header extends React.Component{
  constructor(props) {
    super(props)
     
    const pathname = window.location.pathname.slice(1).length > 0 ? window.location.pathname.slice(1) : 'about'

    this.state = {
      activeLink: pathname,
      scrolled: window.scrollY > 0
    }
   
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      this.setState({
        ...this.state,
        scrolled: window.scrollY > 0 
      })
    });
  }

  setActiveLink(target) {
    this.setState({
      ...this.state,
      activeLink: target
    })
    this.props.refs[target].current.scrollIntoView({block: "start", behavior: "smooth"})
    }
  
    render() {
      return <div className={`nav-bar ${this.state.scrolled ? 'scrolled':''}`}>
        <Link to='/' className="name-header" onClick={() => this.setActiveLink(HEADERS[0])}>Tom Wallwin</Link>
        <Typed className ="subheader" strings={["Fullstack Developer <br/>Scroll Down..."]} typeSpeed={50} />
        <div className="link-spread-container">
        <div className="link-spread">
                 {HEADERS.map((str, index) => {
        return (
          <div
            className={this.state.activeLink === str ? "link is-active" : "link"}
            key={index}
            onClick={()=>this.setActiveLink(str)}
          >
            {str.toUpperCase()}
          </div>
        );
                 })}
        </div>
        </div>
            </div>
    }
}