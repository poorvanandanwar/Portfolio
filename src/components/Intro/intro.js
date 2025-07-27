import React from 'react'
import './intro.css'
import bg from '../../assets/photo.png'
import btnImg from '../../assets/resume.png'
import {Link} from 'react-scroll'

const Intro = () => {
  return (
      <section id="intro">
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Poorva</span><br/>Tech Enthusiast
            <p className='introPara'>
                I'm a developer and designer who loves building smart, user-friendly<br/> solutions at the intersection of code and creativity.
            </p>
            
            <a href='/Poorva_Nandanwar_Resume.pdf' download><button className='btn'><img src={btnImg} alt="resume" className='btnImg'/>Download Resume</button></a>
            </span>
            <img src={bg} alt='image' className='bg'/>
        </div>
      </section>
  )
}

export default Intro
