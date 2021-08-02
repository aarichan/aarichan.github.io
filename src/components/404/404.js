import './404.css'

import React from "react"

import deadmac from './dead-mac.png'

function Page404() {
  return(
    <div className="App">
      <header className="App-header">
        <img src={deadmac} />
        <br />
        404 - Page Not Found
      </header>
    </div>
  )
}
export default Page404;