import IconCloud from './Componente';
import './skill.css'

const Skill = () => {
    return ( 
        <div className="skil">
            <p style={{margin:'3%',fontSize:'40px'}}>About Me</p>
            <div className='card'>
                <div className='leftCard'>
                    <p>Hello, I'm Dasari Bhumika!!!👋</p>
                    <p>I'm a Graduate student at <a  href="https://www.syracuse.edu/"><u>Syracuse University</u> </a>🍊🧡 pursuing a Master's degree in Computer Science.
                    </p>
                    <p> I'm a full-stack developer and my passion lies in crafting captivating websites and immersive digital experiences.</p>
                    <p>I'm committed to constant learning and growth, exploring new technologies to stay ahead in the dynamic world of technology.</p>
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