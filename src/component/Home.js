import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import img from './photo.jpg'

const Home = () => {
    return ( 
        <div id="Home">
              <div>
                <h1>Hello,<span> I'm <br/>Bouaziz Salma</span></h1>
                <h6>________ Computer Science Engineering Student</h6><br/>
              </div>
              <p>I have a strong drive and enthusiasm for web development and AI. I thrive on embracing new challenges and rapidly adapting to changes in the field. Being a collaborative team player is something I deeply appreciate, as it allows me to contribute effectively and leverage the collective expertise of my colleagues.</p>
              <div id="contact">
                <h3>Contact details</h3>
                <p><i class="bi bi-house"></i> Rue tunis KM 8 SFAX<br/><i class="bi bi-phone-vibrate"></i> 27 606 586<br/></p>
              </div>
        </div>
        );
}
 
export default Home;