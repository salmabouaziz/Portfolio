import Education from "./Education";
import React, {useState} from 'react';
import Project from "./Project";

const Qualification = () => {
    const[showEducation,setshowEducation]=useState(true)
    const[showProject,setshowProject]=useState(false)
    return ( 
    <div id ="Qualification">
      <h1><span><i class="bi bi-mortarboard-fill"></i></span> Qualification </h1>
      <div id="Qualification-heding">
         <h3 class={showEducation?"activeheading":""}onClick={()=>{setshowProject(false)
                           setshowEducation(true) }}>Education</h3>
         <h3 class={showProject?"activeheading":""} onClick={()=>{setshowProject(true)
                           setshowEducation(false) }}>Project</h3>
      </div>
      {showEducation&&<Education/>}
      {showProject&&<Project/>}
    </div> );
}
 
export default Qualification;