/**
 * about.js
 * By: Aaric Han
 * 
 * Created: 04/26/21
 * Last Modified: 04/30/21
 */

 import './about.css'
 import React from 'react';
 
 class About extends React.Component {
   constructor() {
     super();
     this.state = {};
   }
   render() {
     return (
      <div className="App" id='About'>
        <header className="App-header">
          <h1>About Me</h1>
          <br></br>
          <p>Undergraduate at Duke University interested in learning about next-generation wireless technologies and computer architecture. I am also passionate about user centric web design/development and hope to create meaningful solutions for real world problems.</p>
          <p>My research interests are next-gen wireless technologies and computer architecture.</p>
        </header>
      </div>
     );
   }
 }
 
 export default About;
 