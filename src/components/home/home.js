/**
 * home.js
 * By: Aaric Han
 * 
 * Created: 04/29/21
 * Last Modified: 04/29/21
 */

 import './home.css'
 import React from 'react';
 import logo from '../../logo.svg'
 
 class Home extends React.Component {
   constructor() {
     super();
     this.state = {};
   }
   render() {
     return (
      <div className="App" id='Home'>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Under Construction... Please check back later!</h1>
        </header>
      </div>
     );
   }
 }
 
 export default Home;
 