import React from "react";
import { Link } from "react-router-dom";
import Typed from "react-typed";

const HEADERS =['about', 'coding', 'contact']

export default class Header extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      activeLink : 'about'
    }
  }

  setActiveLink(target) {
      this.setState({activeLink: target})
    }
  
    render() {
      return <div className="nav-bar">
        <Link to='/' className="name-header" onClick={() => this.setActiveLink(HEADERS[0])}>Tom Wallwin</Link>
        <Typed className ="subheader" strings={["Fullstack Developer <br/>Scroll Down..."]} typeSpeed={50} />
        <div className="link-spread-container">
        <div className="link-spread">
                 {HEADERS.map((str, index) => {
        return (
          <Link
            className={this.state.activeLink === str ? "link is-active" : "link"}
            key={index}
            to={`/${str}`}
            onClick={()=>this.setActiveLink(str)}
          >
            {str.toUpperCase()}
          </Link>
        );
                 })}
        </div>
        </div>
            </div>
    }
}