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
              I'm a javascript developer looking for an oppourtunity to continue to build on my skillset.<br/>
              I've got 8 months professional experience as a developer working on a webapp using React and HTML canvas.
              <br/>
              Apart from coding I go outside climbing or running and play
              football.
            </p>
          </div>
        </div>
     </div>
    }
}