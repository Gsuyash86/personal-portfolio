import React from 'react'
import { useNavigate } from 'react-router-dom'
const ProjectItem = ({image, name, id}) => {
  console.log("Imahe", image, name)
  const navigate = useNavigate();
  return (
   <div className='projectItem' onClick={() => 
    navigate("/personal-portfolio/projects/" + id)
   }>
    <div style={{backgroundImage : `url(${image})`}}
    className='bgImage' />
    <h1>{name}</h1>
   </div>
  )
}

export default ProjectItem