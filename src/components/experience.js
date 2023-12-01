import './experience.css'

const Experience = () => {
    return ( 
        <div className='experience'>
            <p style={{margin:'3%',fontSize:'40px'}}>Experience</p>
            <div className='work'> 
                <span className='des'>Summer Intern </span>
                <span className='company'>@citi</span>
                <p>May 2022 - July 2022 | Internship</p>
                <ul className='content'>
                    <li>Engineered and deployed a File Management System web application for Citi.</li>
                    <li>Improved operational efficiency by streamlining CRUD operations, resulting in a 20% reduction in task completion time.</li>
                    <li>Successfully collaborated with cross-functional teams to ensure the seamless integration of the web application.</li>
                </ul>
                <p className='techStack'>  
                        <img
                            src="https://img.shields.io/badge/AngularJS-E23237?style=for-the-badge&logo=angularjs&logoColor=white"
                            alt="AngularJS"
                        />
                         <img
                            src="https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring&logoColor=white"
                            alt="Spring Boot"
                        />
                         <img
                            src="https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white"
                            alt="Redis"
                        />
                          <img
                            src="https://img.shields.io/badge/REST_API-000000?style=for-the-badge&logo=rest&logoColor=white"
                            alt="REST API"
                        />
                        <img
                            src="https://img.shields.io/badge/Bitbucket-0052CC?style=for-the-badge&logo=bitbucket&logoColor=white"
                            alt="Bitbucket"
                        />
                        <img
                            src="https://img.shields.io/badge/Eclipse-2C2255?style=for-the-badge&logo=eclipse&logoColor=white"
                            alt="Eclipse"
                        />
                        <img
                            src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white"
                            alt="Docker"
                        />
 
                </p>
            </div>
        </div>
    );}



export default Experience;