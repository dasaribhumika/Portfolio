import React from 'react';
import './blogs.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {SiBlogger} from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";
import blogpost1 from '../img/blog1.jpg';

const Blogs = () => {
    // Dummy blog data for demonstration
    const blogs = [
        {
            title: "Unlocking the Power of DSA: Your Key to a Thriving Tech Career",
            link: "https://dasaribhumika.blogspot.com/2024/05/unlocking-power-of-dsa-your-key-to.html",
            icon: <FaLaptopCode />,
            image: blogpost1,
        },
        
    ];

    return (
        <> <p style={{margin:'3%',fontSize:'40px', fontFamily: 'Montserrat'}}>Blogs</p>
        <div className="q">
            <div className="blog" id='blogs'>
                
                <VerticalTimeline>
                    {blogs.map((blog, index) => (
                        <VerticalTimelineElement
                            key={index}
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'khaki', color: 'black' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            date={blog.date}
                            iconStyle={{ background: 'rgb(20,30,23)', color: 'aqua' }}
                            icon={blog.icon}
                        >
                            <h3 className="vertical-timeline-element-title">{blog.title}</h3>
                            <br />
                           
                            <img src={blog.image} alt="Blog" className='blog-image' />
                            <p style={{flex: 1}}>This blog is a comprehensive guide to mastering Data Structures and Algorithms (DSA) in the context of a career in technology. It covers various aspects of DSA, from its importance and usefulness to practical tips on how to approach learning and practicing DSA effectively.</p>
                            <br/>
                            <a className="gb" href={blog.link} style={{ marginTop: '10%', marginLeft: '40%'}}><SiBlogger size={"30px"} /></a>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
        </div>
        </>
    );
}

export default Blogs;
