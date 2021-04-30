/**
 * about.js
 * By: Aaric Han
 * 
 * Created: 04/29/21
 * Last Modified: 04/29/21
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
          <h1>Under Construction... Please check back later!</h1>
        </header>
      </div>
     );
   }
 }
 
 export default About;
 