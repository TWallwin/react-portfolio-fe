import React from 'react';


export default class Coding extends React.Component{

    render() { 
        return <div className='page'>
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
              >click here</a
            >
            to view it.

            <a
              className="external-link"
              href="https://github.com/TWallwin/fe-nc-news"
              >Click here</a
            >
            for the github repo.
          </p>
          <iframe
            src="https://player.vimeo.com/video/699496078?h=feb410f928" title ="new website"
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
              >Click here</a
            >
            for the github repo.
          </p>

          <iframe
            src="https://player.vimeo.com/video/696132854?h=7c654efa9d"
                    title="video app"
          ></iframe>
        </div>
      </div>
    }
}