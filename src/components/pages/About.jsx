import React from 'react';
import picture from '../../Tom Wallwin.jpg'

export default class About extends React.Component{

    render() { 
        return <><h2 className="page-item subtitle">About Me</h2>
        <div className="page-item page-body">
          <div className="intro">
            <div className="img-wrap">
                        <img src={picture} className="self-image" alt="" />
            </div>
            <p className="page-text">
              I've been learning javascript for 3 months. I quit my job in a
              factory to start learning to code full time and this is my
              portfolio website for my programming projects so far.
              <br />
              <br />
              Apart from coding I go outside climbing or running and play
              football.
            </p>
          </div>

        <h2 className="page-item subtitle">About This Website</h2>
          <p className="view-count">0 Views</p>
        </div>
     </>
    }
}