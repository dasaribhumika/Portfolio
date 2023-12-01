
import { ImLinkedin,ImWhatsapp,ImGithub} from "react-icons/im";
import {SiGmail, SiBlogger} from "react-icons/si";
import './contact.css'
const Contact = () => {
    return ( 
        <div className="contact" id="contact">
            <div className="item">
                {/* <a className="gm" href="https://mail.google.com/mail/u/0/?fs=1&to=bhumikadasari0@gmail.com&tf=cm"><SiGmail size={"30px"}/></a> */}
                <a className="gm" href="mailto:bhumikadasari0@gmail.com"><SiGmail size={"30px"}/></a>
                <a className="li" href="https://www.linkedin.com/in/dasari-bhumika-6b45b81b3/"><ImLinkedin size={"30px"}/></a>
                <a className="gb" href="https://github.com/dasaribhumika"><ImGithub size={"30px"}/></a>
                <a className="wp" href="https://dasaribhumika.blogspot.com/"><SiBlogger size={"30px"}/></a>
            </div>
        <p className="source"><a href=""><u>View Source Code</u></a></p>
        <p style={{margin:'2%'}}>  COPYRIGHT © 2023 Dasari Bhumika </p>
        </div>
     );
}
 
export default Contact;