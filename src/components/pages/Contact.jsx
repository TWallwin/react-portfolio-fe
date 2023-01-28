import React from 'react';


export default class Contact extends React.Component{

    render() { 
        return <> <div className="page" data-page="3">
        <h2 className="page-item subtitle">Find Me</h2>
        <div className="page-item grid">
          <div className="flip-card">
            <div className="flip-card-inner contact-card">
              <div className="contact-text flip-card-front">Github</div>
              <div className="contact-text flip-card-back">
                <a
                  href="https://github.com/TWallwin"
                  className="flip-card-link hover"
                  >Click Here</a
                >
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner contact-card">
              <div className="contact-text flip-card-front">LinkedIn</div>
              <div className="contact-text flip-card-back">
                <a
                  href="https://www.linkedin.com/in/tom-wallwin-73b7531b0/"
                  className="flip-card-link hover"
                  >Click Here</a
                >
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner contact-card">
              <div className="contact-text flip-card-front">Email</div>
              <div className="contact-text flip-card-back">
                <p className="flip-card-link">tom.wallwin@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner contact-card">
              <div className="contact-text flip-card-front">Phone</div>
              <div className="contact-text flip-card-back">
                <p className="flip-card-link">07305544510</p>
              </div>
            </div>
          </div>
        </div>
      </div></>
    }
}