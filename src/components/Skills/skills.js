import React from 'react'
import './skills.css'
import Languages from '../../assets/languages.png'
import Web from  '../../assets/web.png'
import Tools from '../../assets/tools.png'

const Skills = () => {
  return (
      <section id="skills">
        <span className='skillTitle'>
            What I Do
        </span>
        <span className='skillDescription'>
            I design and develop web applications that are functional, responsive, and visually appealing. With experience in full-stack development, UI/UX design, and data-driven projects, I enjoy turning ideas into intuitive digital products. Whether it's building a secure chat system, crafting clean user interfaces, or working with real-time APIs, I focus on writing clean code and creating seamless user experiences.
            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={Languages} alt="languages" className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>Programming Languages</h2>
                        <p>Python, C/C++, Java, JavaScript</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={Web} alt="Web Technologies" className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>Web Technologies</h2>
                        <p>HTML, CSS, React.js, Node.js, Express.js, EJS</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={Tools} alt="Tools" className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>Tools & Libraries</h2>
                        <p>Pandas, Numpy, Matplotlib, Scikit-Learn, TensorFlow, Socket Programming, Figma</p>
                    </div>
                </div>
            </div>
        </span>
      </section>
  )
}

export default Skills
