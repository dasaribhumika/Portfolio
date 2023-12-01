import IconCloud from './Componente';
import './skill.css'

const Skill = () => {
    return ( 
        <div className="skil">
            <p style={{margin:'3%',fontSize:'40px'}}>About Me</p>
            <div className='card'>
                <div className='leftCard'>
                    <p>Hello, I'm Dasari Bhumika!!!👋</p>
                    <p>I'm currently a first year student at <a  href="https://www.syracuse.edu/"><u>Syracuse University</u> </a>🍊🧡 pursuing a Master's degree in Computer Science.
                    </p>
                    <p>Seasoned in web development, Machine Learning, Artificial Intelligence, DevOps, and Agile projects.</p>
                    <p>Acknowledged for adept problem-solving and competitive programming skills on <a  href="https://leetcode.com/Bhumika_22/"><u>LeetCode</u></a> &
                        <a  href="https://www.codingninjas.com/studio/profile/a4921363-3bd7-4932-8549-f881240f4abc"> <u>Coding Ninjas.</u></a>👩‍💻
                    </p>

                </div>
                <div className='rightCard'>
                    <IconCloud />
                </div>
            </div>
        </div>

     );
}
 
export default Skill;