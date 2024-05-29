import { useState, useEffect } from 'react';
import './navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [color, setColor] = useState(false);

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY > 0) {
                setColor(true);
            } else {
                setColor(false);
            }
        }

        window.addEventListener("scroll", changeColor);

        return () => {
            window.removeEventListener("scroll", changeColor);
        };
    }, []);

    return (
        <div className={color ? "header header-bg" : "header"}>
            <div className="navbar" id='navbar'>
                <a href="/" className="title">Bhumika</a>
                <ul className="ul-list">
                    <Link className="navitem" to="intro" spy={true} smooth={true} offset={300} duration={2500}> About</Link>
                    <Link className="navitem" to="experience" spy={true} smooth={true} offset={-250} duration={2500}> Experience</Link>
                    <Link className="navitem" to="project" spy={true} smooth={true} offset={-240} duration={2500}> Projects</Link>
                    <Link className="navitem" to="blogs" spy={true} smooth={true} offset={-230} duration={2500}> Blogs</Link>
                    <Link className="navitem" to="contact" spy={true} smooth={true} duration={2500}> Contact</Link>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
