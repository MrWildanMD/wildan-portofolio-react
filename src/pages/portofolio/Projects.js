/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

function Projects({ project }) {
  const { projectImage, projectName, projectDesc, projectLink } = project;
  return (
    <div className='card bg-base-100 shadow-xl'>
      <figure className='px-10 pt-10'>
        <img className='w-1/2' src={projectImage} alt='project image' />
      </figure>
      <div className='card-body items-center text-center'>
        <h2 className='card-title'>{projectName}</h2>
        <p>{projectDesc}</p>
        <div className='card-actions'>
          <Link
            to={projectLink}
            target='_blank'
            className='btn btn-base-100 border-solid border-white text-primary'
          >
            Show Me
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Projects;
