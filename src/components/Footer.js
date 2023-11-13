import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import "../styles/Footer.css"
const Footer = () => {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <LinkedInIcon />
        </div>
        <p> &copy; 2023 suyashtech.com</p>
    </div>
  )
}

export default Footer