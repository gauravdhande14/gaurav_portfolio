import React from 'react'
import './footer.css'
import Logo from './img/github_logo.jpg'
import Logo1 from './img/linkdin_logo.png'
import Logo2 from './img/instagram_logo.png'
import Logo3 from './img/twitter_logo.jpg'
import Logo4 from './img/fb_logo.png'
export default function Footer() {
  return (
    <div>
      <footer>
        
        <p>Author: Gaurav Dhande</p>
        <h2>Follow me on:</h2>
  
        
        <a href="https://github.com/gauravdhande14"><img src= {Logo} alt="GitHub"/></a>
        <a href="https://www.linkedin.com/in/gaurav-dhande-8427a133a/"><img src= {Logo1} alt="LinkedIn"/></a>
        <a href="https://www.instagram.com/gauravdhande_14/"><img src= {Logo2} alt="Instagram"/></a>
        <a href="https://x.com/GauravD83934219"><img src= {Logo3} alt="Twitter"/></a>
        <a href="https://www.facebook.com/gsdking.dhande.9"><img src= {Logo4} alt="Facebook"/></a>
        
  
        <a href="mailto:dhandegaurav14@gmail.com">Email: dhandegaurav14@gmail.com</a>
  
  
      </footer>
    </div>
  )
}
