# Responsive Ecommerce React App Demo

http://responsive-checkout.herokuapp.com/

### Thank you for evaluating this App!

#### Tech Stack

* React/Redux
* HTML
* CSS

#### Please Note Limitations
##### This is a tech demo that was to be completed in ~2 hours. As such, this app has some limitations.<br />They include, but are not limited to the following:

* The Cart does not persist on refresh.
* None of the form fields are required. We can assume they would be required and validated in production.
* The Address fields assume shipping and billing address are the same.


#### Features to Note

* The Cart warns a user if their cart is empty and prompts them to add Products.
* The App will not allow a user to see the Checkout if there isn't at least one bike in the Cart.
* There are breakpoints for desktop, tablet (smaller nav links), and mobile (hamburger menu).
* The Cart is cleared upon successful checkout.
* The Products page has a Loading component that will display if the call to our database is slow.
* There is a 404 page.
* The copyright year in the footer will update each year automatically.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
