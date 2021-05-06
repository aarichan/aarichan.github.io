/**
 * experience.js
 * By: Aaric Han
 * 
 * Created: 04/26/21
 * Last Modified: 04/30/21
 */

 import './experience.css'
 import React from 'react';
 import Accordion from 'react-bootstrap/Accordion'
 import {Card} from 'react-bootstrap'
 
 class Experience extends React.Component {
   constructor() {
     super();
     this.state = {};
   }
   render() {
     return (
      <div className="App" id="Experience">
        <header className="App-header">
          <h1>Experience</h1>
          <br/>
          <Accordion>
            <Card>
              <Accordion.Toggle className="card-head" as={Card.Header} variant="link" eventKey="0">
                Fidelity Investments - SWE Intern
                <div className="card-head-date-dropdown-hint">
                  Beginning Jun 2021 &darr;
                </div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="card-body">
                  Incoming Full Stack SWE Intern for Fidelity Investments
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle className="card-head" as={Card.Header} variant="link" eventKey="1">
                Duke - CS 250: Computer Architecture UTA
                <div className="card-head-date-dropdown-hint">
                  Jan 2021 - Present &darr;
                </div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="card-body">
                  - Teaching assistant for the Computer Architecture class at Duke (Spring 2021, Summer 2021)
                  <br/>
                  - Taught and developed materials for C, MIPS, RISC-V, processor design, cache, and pipelining concepts
                  <br/>
                  - Resolved students’ questions on programming assignments or computer architecture concepts
                  <br/>
                  - Received top ratings from students on my technical knowledge, communication clarity, and engagement with students in recitation and in office hours
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle className="card-head" as={Card.Header} variant="link" eventKey="2">
                Parti - Full Stack Developer
                <div className="card-head-date-dropdown-hint">
                  Dec 2020 - Present &darr;
                </div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
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
            <Card>
              <Accordion.Toggle className="card-head" as={Card.Header} variant="link" eventKey="3">
                Counter Culture Coffee - Software Developer
                <div className="card-head-date-dropdown-hint">
                  Feb 2020 - Jul 2020 &darr;
                </div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  - Worked with a small team to develop a web app to aid CCC in their analysis of coffee product manufacturing
                  <br/>
                  - Used Google App Script to create the front-end UI and used Google Sheets for data formatting and calculations
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle className="card-head" as={Card.Header} variant="link" eventKey="4">
                Cisco Systems - Program Coordinator Intern
                <div className="card-head-date-dropdown-hint">
                  Mar 2019 - Jul 2019 &darr;
                </div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="4">
                <Card.Body>
                - Coordinated a STEM Externship for high school students, teaching them about Cisco
                <br/>
                - Managed an overall program budget of $10,000 for organizing activities.
                <br/>
                - Presented a capstone presentation to the program sponsor and organizer and ensured more funding and opportunities for future externs
                <br/>
                - Resolved over 50 hardware/software equipment related issues throughout the duration of the program
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </header>
      </div>
     );
   }
 }
 
 export default Experience;
 