import React from 'react'
import '../../assets/css/footer.css'
import getYear from '../../assets/js/lib/get-year'


export default () => {
  return (
    <div id="footer">
      <div className="footer-row">
        <div className="social-icon">
          <a href="https://github.com/josh-feinstein/responsive-checkout" target="_blank" rel="noopener noreferrer"><img src="/images/github.svg" alt="github logo" width="20px" /></a>
        </div>
      </div>
      <div className="footer-row">
          <p>&copy; {`${getYear()}`}</p>
          <p>&nbsp;|&nbsp;</p>
          <p><a href="http://joshfeinstein.com" target="_blank" rel="noopener noreferrer">Josh Feinstein</a></p>
      </div>
    </div>
  )
}
