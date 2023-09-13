import React from 'react';
import picture from '../../Tom Wallwin.jpg'
import MainWindow from '../game/MainWindow';

export default class About extends React.Component{
  
  componentDidMount() {
    // const sliders = Array.from(document.getElementsByClassName('page-item'))
  
    // console.log(sliders)
    // window.addEventListener('scroll', () => {
    //   if (sliders.length === 0) {
    //     return
    //   }
    //   sliders.forEach((slider) => {
    //     const isHalfShown = window.scrollTop()

    //     // const isHalfShown = true;
        
    //     if (isHalfShown) {
    //       console.log('adding')
    //       slider.classList.add('active')
    //     }
    //   })
    // })
    
    const observer = new IntersectionObserver(onIntersection, {
      root: null, 
      threshold: 0.05 
    })
    
    // callback is called on intersection change
    function onIntersection(entries, opts) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      }
      )
    
    }
    
    
    const sliders = Array.from(document.getElementsByClassName('page-item'))
    
    sliders.forEach(slider=> observer.observe(slider))
  }
  
  render() { 
      return <div className="page">
        <h2 className="page-item subtitle about" ref={this.props.refs?this.props.refs.about:undefined}>About Me</h2>
        <div className="page-item page-body">
          <div className="intro">
                        <img src={picture} className="self-image" alt="" />
            <p className="page-text">
              I'm a javascript developer looking for an opportunity to continue to build on my skillset.<br /> <br />
              Before I was a developer my background in programming was from an undergraduate maths degree. I learned the basics of full stack web development on Northcoders a year ago.
              <br/><br/>
              I've now got 10 months professional frontend experience working as a developer with React and HTML canvas.
              <br/> <br/>
              Apart from coding I go outside climbing or running and play
              football.
            </p>
          </div>
        </div>
        <h2 className="page-item subtitle" ref={this.props.refs?this.props.refs.coding:undefined}>Ball Game</h2>
        <div className="page-item">
          {!this.props.isMobile ? <MainWindow /> : <p className="page-text">You're viewing this from mobile, you can view the game hosted separately <a href='https://tom-wallwin-ball-game.netlify.app/'>here</a>.</p>}
          <p className="page-text">This ball game is a small project I made using HTML canvas, try clicking in the box to add a ball. You might notice the collision system isn't perfect yet.<br/> <br/> This is the github repo: <a href='https://github.com/TWallwin/shapes'>click here</a></p>
        </div>
        <h2 className="page-item subtitle">News Website</h2>
        <div className="page-item">
          <p className="page-text">
            This website allows users to view, vote on and comment on articles
            in a reddit style interface. It is built to be mobile
            responsive.<br /><br />
            I built the front end of this website using React. The backend of
            the site is built using node.js and express which is complete with
            a full test suite using jest. The database is created using PSQL.
            <br />
            <br />
            The website is fully hosted,
            <a
              className="external-link"
              href="https://twallwin-nc-news.netlify.app/"
              > click here </a
            > 
            to view it.

            <a
              className="external-link"
              href="https://github.com/TWallwin/fe-nc-news"
              > Click here </a
            > 
             for the github repo.
          </p>
          <iframe
            src="https://player.vimeo.com/video/699496078?h=feb410f928" title="new website"
        />
        </div>
        <h2 className="page-item subtitle">Video Uploading App - NC Portfolio</h2>
        <div className="page-item">
          <p className="page-text">
            As a group of five we built this app demo which will run on
            android or ios.
            <br /><br />
            The idea for this app was to provide a place for software
            developers to display demo videos of their creations.
            <br /><br />
            We self organised through out, having daily standups and creating
            a trello ticket board to organise our work. We reviewed each
            others code before merging it into the main branch on github.
            <br /><br />
            The front end of this app is built using react-native, the backend
            is built using express and node.js and with integration testing
            using jest. We hosted our videos on cloudinary and built our
            database using PSQL.
            <br />
            <br />
            <a
              className="external-link"
              href="https://github.com/TWallwin/nc-portfolio-fe"
              >Click here </a
            >
            for the github repo.
          </p>

          <iframe
            src="https://player.vimeo.com/video/696132854?h=7c654efa9d"
                    title="video app"
          ></iframe>
        </div>
        <h2 className="page-item subtitle" ref={this.props.refs?this.props.refs.contact:undefined}>Find Me</h2>
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
      </div>
      
    }
}