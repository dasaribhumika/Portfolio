import React, { useState } from 'react';
import './experience.css';
import kollabioLogo from '../img/Kollabio-full-logo-color-transparent.png';
import CitiLogo from '../img/citilogo.png';

const experiences = [
  {
    id: 1,
    title: "Summer Intern - Software Engineer",
    company: "@Kollabio",
    website: "https://www.kollabio.com",
    logo: kollabioLogo, 
    duration: "May 2024 - Present",
    type: "Remote",
    description: [
      "Developing an AI-powered backlog builder, aimed at continuously enhancing team productivity through automated backlog creation processes.",
      "Leading seamless integration features, with a focus on optimizing workflow efficiency and reducing manual backlog management efforts over time.",
      "Actively utilizing Docker for containerization purposes, ensuring consistent application performance across evolving environments.",
    ],
    techStack: [
      {name: 'Vue.js', badge: 'https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D'},
      {name: 'Nest.js', badge: 'https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white'},
      {name: 'AWS', badge: 'https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white'},
      {name: 'Docker', badge: 'https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white'},
    ],
  },
  {
    id: 2,
    title: "Summer Intern - Software Developer",
    company: "@Citi",
    website: "https://www.citi.com",
    logo: CitiLogo, 
    duration: "May 2022 - July 2022",
    type: "Remote",
    description: [
      "Developed a user-friendly internal application with Angular and Spring Boot, enabling 100+ employees to access domain-specific APIs via a dropdown.",
      "Integrated Redis caching, reducing API response times by 30% and enhancing application performance for non-technical users.",
      "Designed and deployed RESTful APIs to dynamically render domain-specific data, improving data retrieval efficiency and reducing server load by 25%"
    ],
    techStack: [
      {name: 'Angular.js', badge: 'https://img.shields.io/badge/angular.js-%23E23237.svg?style=for-the-badge&logo=angularjs&logoColor=white'},
      {name: 'Spring', badge: 'https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white'},
      {name: 'Redis', badge: 'https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white'},
      {name: 'Bitbucket', badge: 'https://img.shields.io/badge/bitbucket-%230047B3.svg?style=for-the-badge&logo=bitbucket&logoColor=white'},
      {name: 'Eclipse', badge: 'https://img.shields.io/badge/Eclipse-FE7A16.svg?style=for-the-badge&logo=Eclipse&logoColor=white'},
      {name: 'Docker', badge: 'https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white'},
    ],
  },
  // Add more experiences here as objects in the array
];

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(experiences[0]);

  const handleExperienceClick = (experience) => {
    setSelectedExperience(experience);
  };

  return (
    <>
      <p style={{margin:'3%',fontSize:'40px', fontFamily: 'Montserrat'}}>Experience</p>
      <div className='experience'>
        <div className='sidebar'>
          <ul>
            {experiences.map(experience => (
              <li key={experience.id} onClick={() => handleExperienceClick(experience)} className={selectedExperience?.id === experience.id ? 'active' : ''}>
                {experience.title}, {experience.company.split('@')[1]}
              </li>
            ))}
          </ul>
        </div>
        <div className='details'>
          {selectedExperience && (
            <div className='card1'>
              <p className='title1'>
                {selectedExperience.title} <span className='company1'>
                  <a href={selectedExperience.website} target='_blank' rel='noopener noreferrer'>
                  {selectedExperience.company}
                    <img src={selectedExperience.logo} alt={`${selectedExperience.company.split('@')[1]} logo`} className='company-logo' />
                    
                  </a>
                </span>
              </p>
              <p className='duration'>{selectedExperience.duration} | {selectedExperience.type}</p>
              <ul>
                {selectedExperience.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
              <div className='tech-stack' >
                {selectedExperience.techStack.map((tech, index) => (
                  <img style={{ marginRight: '5px', padding: '5px' }} key={index} src={tech.badge} alt={tech.name} className='tech-badge' />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Experience;
