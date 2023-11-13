import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import "../styles/Footer.css"
const Footer = () => {
  return (
    <div className='footer'>
        <div className='socialMedia'>
        <a href='https://www.linkedin.com/in/suyash-gupta-517a90108/'><LinkedInIcon /></a> 
        </div>
        <p> &copy; 2023 suyashtech.com</p>
    </div>
  )
}

export default Footer