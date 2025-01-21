import React from 'react'
import './skill.css'
import Skill from './img/html_logo.png'
import Skill1 from './img/css_logo.png'
import Skill2 from './img/js_logo.png'
export default function Skills() {
  return (
    <section id="skill">
    <div class="skill-container">
      <h1>SKILLS</h1>
      <div class="skills">
        <div class="skill-box">
          <img src= {Skill} alt="" />
        </div>
        <div class="skill-box">
          <img src= {Skill} alt="" />
        </div>
        <div class="skill-box">
          <img src= {Skill} alt="" />
        </div>
        <div class="skill-box">
          <img src= {Skill} alt="" />
        </div>
        <div class="skill-box">
          <img src= {Skill1} alt="" />
        </div>
        <div class="skill-box">
          <img src= {Skill1} alt="" />
        </div>
        <div class="skill-box">
          <img src= {Skill1} alt="" />
        </div>
        <div class="skill-box">
          <img src= {Skill1} alt="" />
        </div>
        <div class="skill-box">
          <img src= {Skill2} alt="" />
        </div>
        <div class="skill-box">
          <img src= {Skill2} alt="" />
        </div>
        <div class="skill-box">
          <img src= {Skill2} alt="" />
        </div>
        <div class="skill-box">
          <img src= {Skill2} alt="" />
        </div>
      </div>
    </div>
  </section>
  )
}
