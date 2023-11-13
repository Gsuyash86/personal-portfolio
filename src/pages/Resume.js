import React from 'react'
import '../styles/Resume.css'
import resumePdf from '../assets/resume.pdf'

const Resume = () => {
  return (
    <div className="resumeContainer"
    >   
    <button className="download-button">
      <a
        href={resumePdf}
        download="downloadFile"
        target="_blank"
        rel="noreferrer"
      >
        Download Resume
      </a>
      </button>
    </div>
  )
}

export default Resume