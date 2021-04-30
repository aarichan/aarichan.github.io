/**
 * home.js
 * By: Aaric Han
 * 
 * Created: 04/26/21
 * Last Modified: 04/30/21
 */

 import './home.css'
 import React from 'react';
 import portrait from './ProPortrait.jpeg'
 
 class Home extends React.Component {
   constructor() {
     super();
     this.state = {};
   }
   render() {
     return (
      <div className="App" id='Home'>
        <header className="App-header">
          <h1>Aaric Han</h1>
          <br/>
          <img src={portrait} className="App-logo" alt="logo" />
          <br/>
          <h1 className="head-disp">Problem Solver<span id="the-dot"> &#183; </span>Solution Builder<span id="the-dot"> &#183; </span>Lifelong Learner</h1>
        </header>
      </div>
     );
   }
 }
 
 export default Home;
 