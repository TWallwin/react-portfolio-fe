import React from "react";
import { Link } from "react-router-dom";

export default class Header extends React.Component{
    render() {
        return <><h1>Tom Wallwin</h1>
                 {["about", "coding", "contact"].map((str, index) => {
        return (
          <Link
            key={index}
            to={`/${str}`}
          >
            {str}
          </Link>
        );
                 })}
            </>
    }
}