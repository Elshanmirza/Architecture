import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/fontawesome-free-brands'



const Footer = () => {
  return (
    <div className='footer d-flex align-items-center justify-content-around'>
      <div className="footerText">
        <p>Copyright &copy; 2022, ITBrains - All Rights Reserved</p>
      </div>

      <div className="icons">
        <FontAwesomeIcon id='icon' icon={faFacebookF} />
        <FontAwesomeIcon id='icon' icon={faInstagram} />
        <FontAwesomeIcon id='icon' icon={faTwitter} />
      </div>
    </div>
  )
}

export default Footer