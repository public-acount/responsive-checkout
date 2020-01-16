import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/css/not-found.css'


export default () => {
  return (
    <div id="not-found">
      <h1>404 Error: Not Found</h1>
      <p>
        Hmmm... We can't seem to find the page you're looking for.<br />
        Please click <Link to="/">here</Link> to go back to the home page.
      </p>
    </div>
  )
}
