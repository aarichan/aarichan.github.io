import './home.css'

import React from "react"

import portrait from './ProPortrait.jpeg'

function Home() {
  return(
    <div className="App" id='Home'>
      <header className="App-header">
        <h1>Aaric Han</h1>
        <br/>
        <img src={portrait} className="App-logo" alt="logo" />
        <br/>
        <h1>Problem Solver <span>&#183;</span> Solution Builder <span>&#183;</span> Lifelong Learner</h1>
      </header>
    </div>
  )
}
export default Home;