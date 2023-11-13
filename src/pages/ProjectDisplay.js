import React from 'react'
import { useParams } from 'react-router-dom'
import { ProjectList } from '../helpers/ProjectList'
import GitHubIcon from '@material-ui/icons/GitHub'
import '../styles/ProjectDisplay.css'

const ProjectDisplay = () => {
    const {id} = useParams()
    const project = ProjectList[id]
  return (
     <div className='project'>
        <h1>{project['name']}</h1>
        <img alt='projectImage' src = {project.image} />
        <p>
         <b>Skills:</b>{project.skills}
         </p>
       <a 
       href={project.gitUrl} 
       target='_blank' 
       rel="noreferrer"
       >
       <GitHubIcon />  
      </a> 
     </div>
  )
}

export default ProjectDisplay