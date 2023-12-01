import "./project.css"
import ProjectCard from "./ProjectCard";
const Project = () => {
    const data = [
        {   title: ' E-Learning Platform Recommendation using EEG',
            color: 'rgb(149, 125, 173)',
            border: 'rgb(118, 98, 156)',
            description: [
                'Employed advanced EEG signal analysis to evaluate user attention across major e-learning platforms through cluster-basedgrouping.', 
                'Pioneered the development of a recommendation system, enhancing learning outcomes by 70% through personalized platformsuggestions, contributing to a more tailored and effective educational experience.'
            ],
            tech: [
                { name: 'Streamlit', badge: 'https://img.shields.io/badge/Streamlit-FF4F7B?style=for-the-badge&logo=streamlit&logoColor=white' },
                { name: 'Jupyter Notebook', badge: 'https://img.shields.io/badge/Jupyter-F37626?style=for-the-badge&logo=jupyter&logoColor=white' },
            ],
            git: 'https://github.com/dasaribhumika/e-learning-platform-recommendation-using-EEG',
        },
        {   title: ' BookThrift',
            color: 'rgb(210, 145, 188)',
            border: 'rgb(152, 45, 120)',
            description: [
                'Developed a web application with the MEAN Stack.', 
                'Incorporated user authentication, profile management, and seamless buy/sell capabilities.'
            ],
            tech: [
                { name: 'AngularJS', badge: 'https://img.shields.io/badge/AngularJS-E23237?style=for-the-badge&logo=angularjs&logoColor=white' },
                { name: 'Express.js', badge: 'https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white' },
                { name: 'PHP', badge: 'https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white' },
                { name: 'AJAX', badge: 'https://img.shields.io/badge/AJAX-0095D5?style=for-the-badge&logo=ajax&logoColor=white' },
                { name: 'MongoDB', badge: 'https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white' },
                { name: 'Visual Studio Code', badge: 'https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white' },
                { name: 'GitHub', badge: 'https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white' },
            ],
            git: 'https://github.com/dasaribhumika/BookThrift',
            demo: 'https://bookthrift.surge.sh/#!/'
        },
        {   title: ' SSN Blog',
            color: ' rgb(146, 185, 189)',
            border: ' rgb(1, 134, 103)',
            description: [
                'Developed a user-friendly platform for hosting diverse blogs, implementing Flask for seamless functionality.',
                ' Allowed access only through valid college email IDs, ensuring a protected and authenticated blogging environment.'
            ],
            tech:[
                { name: 'Flask', badge: 'https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white' },
                { name: 'Jira - Agile', badge: 'https://img.shields.io/badge/Jira_Agile-0052CC?style=for-the-badge&logo=jira&logoColor=white' },
                { name: 'Visual Studio Code', badge: 'https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white' },
                { name: 'GitHub', badge: 'https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white' },
            ],
            git: 'https://github.com/dasaribhumika/SSN-Blog',
        },
        {   title: ' House Price Predictor',
            color: ' rgb(245, 135, 165)',
            border: ' rgb(221, 102, 102)',
            description: [
                'Spearheaded the development of a House Price Predictor using the Bangalore housing dataset, incorporating advanced techniques such as data cleaning, dimension reduction, outlier removal, and one-hot encoding.',
                'Implemented Grid Search to compare regression, lasso, and decision tree, with regression yielding the highest accuracy at an impressive 84.22%.'
            ],
            tech: [
                { name: 'JavaScript', badge: 'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black' },
                { name: 'Flask', badge: 'https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white' },
                { name: 'Postman', badge: 'https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white' },
                { name: 'Visual Studio Code', badge: 'https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white' },
                { name: 'GitHub', badge: 'https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white' },
            ],
            git: 'https://github.com/dasaribhumika/House-Price-Predictor',
        },
        {   title: 'Tic Tac Toe',
            color: 'rgb(126, 178, 223)',
            border: ' rgb(13, 184, 197)',
            description: [
                'Implemented interactive Tic-Tac-Toe game using React', 
            ],
            tech: [
                { name: 'React', badge: 'https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white' },
                { name: 'Visual Studio Code', badge: 'https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white' },
                { name: 'GitHub', badge: 'https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white' },
            ],
            git: 'https://github.com/dasaribhumika/Tic-Tac-Toe-React-Project',
            demo: 'https://tictactoe-react-project.netlify.app/'
        },
        {   title: 'Timer Challenge Game',
            color: 'rgb(255, 145, 128)',
            border: 'rgb(285, 119, 119)',
            description: ['Programmed Timer Challene Game using React'],
            tech: [
                { name: 'React', badge: 'https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white' },
                { name: 'Visual Studio Code', badge: 'https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white' },
                { name: 'GitHub', badge: 'https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white' },
            ],
            git: 'https://github.com/dasaribhumika/Timer-Challenge',
            demo: 'https://react-timer-challenge.netlify.app/'
        },
        {   title: 'Investment Calculator',
            color: 'rgb(254, 229, 81)',
            border: 'rgb(230, 188, 5)',
            description: ['Coded and deployed Investment Calculator'],
            tech: [
                { name: 'React', badge: 'https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white' },
                { name: 'Visual Studio Code', badge: 'https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white' },
                { name: 'GitHub', badge: 'https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white' },
            ],
            git: 'https://github.com/dasaribhumika/Investment-Calculator-React-Project',
            demo: 'https://investment-calculator-react-project.netlify.app/'
        }
    ]

    return(
        <div className='projects'>
            <p style={{margin:'3%',fontSize:'40px'}}>Projects</p>
            <ProjectCard  data={data}/>
        </div>
    );
}

export default Project;