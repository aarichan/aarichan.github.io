/**
 * projects.js
 * By: Aaric Han
 * 
 * Created: 04/29/21
 * Last Modified: 05/09/21
 */

import './projects.css'
import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import {Card} from 'react-bootstrap'


export default function Projects() {
  return (
    <div className="App" id="Projects">
      <header className="App-header">
        <h1>Projects</h1>
        <br/>
        <Accordion>
          <Card>
            <Accordion.Toggle className="card-head" as={Card.Header} variant="link" eventKey="1">
              Tingjun Chen Lab - Researcher
              <div className="card-head-date-dropdown-hint">
                May 2021 - Present &darr;
              </div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <span>
                  - Research info coming soon
                </span>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle className="card-head" as={Card.Header} variant="link" eventKey="0">
              Parti - Full Stack Developer
              <div className="card-head-date-dropdown-hint">
                Dec 2020 - Present &darr;
              </div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <span>
                  <a href="https://parti.app">Link to Parti</a>
                  <br/>
                  - Founded a start-up focused on connecting event planners with event service providers in an intuitive web app 
                  <br/>
                  - Followed a scrum style development
                  <br/>
                  - Designed and developed the Service Profile, Create Event, and Homepage pages
                  <br/>
                  - Used React, Material UI, JavaScript, HTML, CSS, and Firebase for frontend and backend development
                  <br/>
                  - Used Git for version control management
                </span>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </header>
    </div>
  );
}
