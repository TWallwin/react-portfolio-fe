import React from 'react';
import picture from '../../Tom Wallwin.jpg'

export default class About extends React.Component{

    render() { 
      return <div className="page">
        <h2 className="page-item subtitle">About Me</h2>
        <div className="page-item page-body">
          <div className="intro">
            <div className="img-wrap">
                        <img src={picture} className="self-image" alt="" />
            </div>
            <p className="page-text">
              I'm a javascript developer looking for an oppourtunity to continue to build on my skillset.<br /> <br />
              Before I was a developer my background in programming was from an undergraduate maths degree. I learned the basics of full stack web development on Northcoders a year ago.
              <br/><br/>
              I've now got 8 months professional frontend experience as a developer working using React and HTML canvas.
              <br/> <br/>
              Apart from coding I go outside climbing or running and play
              football.
            </p>
          </div>
        </div>
     </div>
    }
}