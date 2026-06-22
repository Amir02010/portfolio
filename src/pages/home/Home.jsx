import React from 'react'
import './home.css'

// ? img
import imgHero from '../../assets/amir-last.jpg'

// ? icons
import { FaTelegramPlane } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { Button } from '../../style/StyleComponent';

const Home = () => {
  return (
    <div className='home'>
      <div className="max-width">

        <section className='c-home display-flex'>
          <div>
            <div>

              <h1>Amir</h1>

              <h2>Front end Developer</h2>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatibus debitis amet repudiandae minus dolore consequatur.
              </p>

              <div className='display-flex h-icons'>
                <Button>
                  Download CV
                </Button>

                <FaTelegramPlane />
                <FaGithub />
                <MdMarkEmailUnread />
              </div>

            </div>
          </div>

          <div>
            <div className="diamond">
              <img src={imgHero} alt="Amir" />
            </div>
          </div>

        </section>

      </div>
    </div>
  )
}




export default Home