const About = () => {
    return ( 
        <div id ="About">
            <h1><span><i class="bi bi-body-text"></i></span>About</h1>
            <div id="BigAbout">
            <div class="Aboutinfo" id="Aboutinfo1">
                <h2>language</h2> 
                <div class="lang">
                   Arabe
                   <div class="langfil">
                       <div class="langfilfil" id="langfilfil1"></div>
                   </div>
                </div >
                <div class="lang">
                   French
                   <div class="langfil">
                       <div class="langfilfil"id="langfilfil2"></div>
                   </div>
                </div >
                <div class="lang">
                   English  
                   <div class="langfil">
                       <div class="langfilfil" id="langfilfil3"></div>
                   </div>
                </div >   
            </div>
            <div class="Aboutinfo" id="Aboutinfo2">
                <h2>Hobbies</h2>
                <ul>
                    <li> Handball</li>
                    <li> Embroidery crafts</li>
                </ul>
            </div>
            <div class="Aboutinfo" id="Aboutinfo3">
                 <h2>Community life</h2>
                 <ul>
                    <li> Member of the IEEE ENSI STUDENT Branch</li>
                    <li> Membre de l'association Robotique ENSI</li>
                </ul>
            </div>
            </div>
        </div>
     );
}
 
export default About;