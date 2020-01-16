import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../assets/css/header-mobile.css'


class HeaderMobile extends Component {
  componentDidMount() {
    const navDropdown = document.getElementById('nav-dropdown')
    const hamburgerToggle = document.getElementById('hamburger-toggle')
    const hamburgerToggleOpenIcon = document.getElementById('hamburger-toggle-open')
    const hamburgerToggleCloseIcon = document.getElementById('hamburger-toggle-close')
    const navLink = document.getElementsByClassName('nav-link-mobile')

    hamburgerToggle.addEventListener('click', () => {
      navDropdown.classList.toggle('hidden')
      hamburgerToggleOpenIcon.classList.toggle('hidden')
      hamburgerToggleCloseIcon.classList.toggle('hidden')
    })

    for (let i = 0; i < navLink.length; i++) {
      navLink[i].addEventListener('click', () => {
        navDropdown.classList.toggle('hidden')
        hamburgerToggleOpenIcon.classList.toggle('hidden')
        hamburgerToggleCloseIcon.classList.toggle('hidden')
      })
    }
  }

  render() {
    return (
      <div>
        <div className="nav-items">
          <div className="nav-left">
            <Link to="/"><img width="60px" alt="logo" src="/images/logo.png" /></Link>
          </div>
          <div className="nav-right">
            <div id="hamburger-toggle">
              <img id="hamburger-toggle-open" alt="hamburger-toggle-open-icon" className="nav-link hamburger-toggle" src="/images/hamburger-open.png"/>
              <img id="hamburger-toggle-close" alt="hamburger-toggle-close-icon" className="nav-link hamburger-toggle hidden" src="/images/hamburger-close.png"/>
            </div>
          </div>
        </div>
        <div id="nav-dropdown" className="nav-dropdown hidden">
          <ul>
            <li><Link className="nav-link-mobile" to="/">Home</Link></li>
            <li><Link className="nav-link-mobile" to="/products">All Products</Link></li>
            <li><Link className="nav-link-mobile" to="/bikes">Bikes</Link></li>
            <li><Link className="nav-link-mobile" to="/accessories">Accessories</Link></li>
            <li><Link className="nav-link-mobile" to="/addons">Addons</Link></li>
            <li><Link className="nav-link-mobile" to="/cart">Cart</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default HeaderMobile
