import './experience.css'

import React from "react";
import Accordion from 'react-bootstrap/Accordion'
import { Card } from 'react-bootstrap'

function Experience() {
  return(
    <div className="App" id="Experience">
      <header className="App-header">
        <h1>Experience</h1>
        <br/>
        <Accordion>
          <Card /* Tingjun Lab */>
            <Accordion.Toggle className="card-head" as={Card.Header} variant="link" eventKey="5">
              Tingjun Chen Lab - Undergraduate Researcher
              <div className="card-head-date-dropdown-hint">
                May 2021 - Present &darr;
              </div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="5">
              <Card.Body>
                <span>
                  - Research info coming soon
                </span>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card /* 250 TA */>
            <Accordion.Toggle className="card-head" as={Card.Header} variant="link" eventKey="4">
              Duke - ECE/CS 250: Computer Architecture TA
              <div className="card-head-date-dropdown-hint">
                Jan 2021 - Present &darr;
              </div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
              <Card.Body className="card-body">
                - Teaching assistant for the Computer Architecture class at Duke (Spring 2021, Summer 2021)
                <br/>
                - Awarded a TA citation from Duke faculty members for the Spring 2021 semester
                <br/>
                - Taught and developed materials for C, MIPS, RISC-V, processor design, cache, and pipelining concepts
                <br/>
                - Resolved studentsâ€™ questions on programming assignments or computer architecture concepts
                <br/>
                - Received top ratings from students on my technical knowledge, communication clarity, and engagement with students in recitation and in office hours
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card /* Fidelity Investments */>
            <Accordion.Toggle className="card-head" as={Card.Header} variant="link" eventKey="3">
              Fidelity Investments - SWE Intern
              <div className="card-head-date-dropdown-hint">
                Jun 2021 - Present &darr;
              </div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body className="card-body">
                - SWE Intern for Fidelity Investments
                <br/>
                - Worked alongside two fellow interns on the cloud onboarding team
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card /* Parti */>
            <Accordion.Toggle className="card-head" as={Card.Header} variant="link" eventKey="2">
              Parti - Full Stack Developer
              <div className="card-head-date-dropdown-hint">
                Dec 2020 - Apr 2021 &darr;
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
          <Card /* Counter Culture Coffee */>
            <Accordion.Toggle className="card-head" as={Card.Header} variant="link" eventKey="1">
              Counter Culture Coffee - Software Developer
              <div className="card-head-date-dropdown-hint">
                Feb 2020 - Jul 2020 &darr;
              </div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                - Worked with a small team to develop a web app to aid CCC in their analysis of coffee product manufacturing
                <br/>
                - Used Google App Script to create the front-end UI and used Google Sheets for data formatting and calculations
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card /* Cisco Program Coordinator */>
            <Accordion.Toggle className="card-head" as={Card.Header} variant="link" eventKey="0">
              Cisco Systems - Program Coordinator Intern
              <div className="card-head-date-dropdown-hint">
                Mar 2019 - Jul 2019 &darr;
              </div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
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
  )
}
export default Experience;