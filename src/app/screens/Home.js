import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/css/home.css'


export default () => {
  return (
    <div id="home">
      <h1>Welcome to our Bike Rental Shop</h1>
      <p>Please navigate to our products page to begin shopping:</p>
      <Link className="custom-button" to="/products"><button>Products</button></Link>
      <hr />
      <h2>Thank you for evaluating this App!</h2>
      <h3>Tech Stack</h3>
      <div className="tech-stack">
        <h4>React/Redux</h4>
        <h4>HTML</h4>
        <h4>CSS</h4>
      </div>
      <hr />
      <h3>Please Note Limitations</h3>
      <h4>This is a tech demo that was to be completed in ~2 hours. As such, this app has some limitations.<br />They include, but are not limited to the following:</h4>
      <ul>
        <li>The Cart does not persist on refresh.</li>
        <li>None of the form fields are required. We can assume they would be required and validated in production.</li>
        <li>The Address fields assume shipping and billing address are the same.</li>
      </ul>
      <hr />
      <h3>Features to Note</h3>
      <ul>
        <li>The Cart warns a user if their cart is empty and prompts them to add Products.</li>
        <li>The App will not allow a user to see the Checkout if there isn't at least one bike in the Cart.</li>
        <li>There are breakpoints for desktop, tablet (smaller nav links), and mobile (hamburger menu).</li>
        <li>The Cart is cleared upon successful checkout.</li>
        <li>The Products page has a Loading component that will display if the call to our database is slow.</li>
        <li>There is a 404 page.</li>
        <li>The copyright year in the footer will update each year automatically.</li>
      </ul>
    </div>
  )
}
