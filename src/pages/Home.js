import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import EmailIcon from "@material-ui/icons/Email"
import Github from "@material-ui/icons/GitHub"
import "../styles/Home.css"

const Home = () => {
  return (
    <div className='home'>
      <div className='about'> 
      <h2>Hi, My Name is Suyash</h2>
      <div className='prompt'>
        <p>
        Experienced Software Developer with 4.4 years crafting user-friendly interfaces, skilled in React, Node.js, JavaScript, and front- end SEO optimization for exceptional web experiences
        </p>
       <a href='https://www.linkedin.com/in/suyash-gupta-517a90108/'><LinkedInIcon /></a> 
        <a href='mailto:guptasuyash9@gmail.com'><EmailIcon /></a>
       <a href='https://github.com/Gsuyash86'><Github /></a> 
      </div>
      </div>
     <div className='skills'>
      <h1>Skills</h1>
      <ol className='list'>
        <li className='item'>
          <h2>Front-End</h2>
          <span>React, Angular, Redux, Html, CSS, React Native, MaterialUI, TailwindCSS</span>
        </li>
        <li className='item'>
          <h2>Back-End</h2>
          <span>Nodejs, ExpressJS, AWS S3, Yarn, Bootstrap</span>
        </li>
        <li className='item'>
          <h2>Languages</h2>
          <span>Javascript, C, C++, TypeScript</span>
        </li>
      </ol>
     </div>
    </div>
  )
}

export default Home