import React from 'react'
import './works.css'
import Socket from '../../assets/socket.jpg'
import Crypto from '../../assets/crypto.jpg'

const Works = () => {
  return (
      <section id='works'>
        <h2 className='worksTitle'>
            My Projects
        </h2>
        <span className='worksDesc'>
            Here are some of the projects I’ve worked on. Each project reflects my passion for solving problems through clean code, thoughtful design, and practical functionality.
        </span>
        <div className='worksImgs'>
            <a href="https://github.com/poorvanandanwar/udp-chat-private-messaging" target="_blank" rel="noopener noreferrer">
            <img className='worksImg' src={Socket} alt="socket programming"/></a>
            <a href="https://github.com/poorvanandanwar/CryptoPlace" target="_blank" rel="noopener noreferrer">
            <img className='worksImg' src={Crypto} alt="CryptoPlace"/></a>
        </div>
        <a
        href="https://github.com/poorvanandanwar"
        target="_blank"
        rel="noopener noreferrer">
        <button className='worksBtn'>
            See More
        </button></a>
      </section>
  )
}

export default Works;
