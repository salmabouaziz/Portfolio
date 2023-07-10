import React, {useState}  from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import img from './photo1.jpg'
import {Link} from 'react-router-dom'

const Navbar = () => {
  // const [elements, setelements]=useState(document.getElementsByClassName("nav-link"))
  // const [elem,setelem]=useState(document.getElementsByClassName("active"))
  //   console.log(elements)
  //   console.log(elem)
  const [hasClass, setHasClass] = useState([true,false,false,false]);
    return ( 
      <div id="containerNavbar">
          <img src={img} alt="photo" />
          <h1 class="text-white my-5 "> <span class="text-warning-subtle">Bouaziz</span> Salma </h1>
          <div  id="Links">
            <Link onClick={()=>{setHasClass([true,false,false,false])}}      class={hasClass[0]? "nav-link active":"nav-link"} to='/'>Home</Link>
            <Link onClick={()=>{setHasClass([false,true,false,false])}}      class={hasClass[1]? "nav-link active":"nav-link"}to='/Qualification'>Qualification</Link>
            <Link onClick={()=>{setHasClass([false,false,true,false])}}      class={hasClass[2]? "nav-link active":"nav-link"}to='/Skills'>Skills</Link>
            <Link onClick={()=>{setHasClass([false,false,false,true])}}      class={hasClass[3]? "nav-link active":"nav-link"}to='/About'>About</Link>
          </div>
          <div class="text-white" id="icon">
          <a class="nav-link" target="_blank" href="https://www.linkedin.com/in/bouaziz-salma-2ba75b252"><i class="bi bi-linkedin"></i></a>
          <a class="nav-link" target="_blank" href="https://github.com/salmabouaziz"> <i class="bi bi-github"></i></a>
          <a class="nav-link" target="_blank" href="mailto:salma.bouaziz@ensi-uma.tn"> <i class="bi bi-envelope-at-fill"></i></a>
          </div>
  
      </div>
     );
}
 
export default Navbar;

{/* <a class="nav-link active" aria-current="page" href="#">Home</a>
          <a class="nav-link"  href="#">About</a>
          <a class="nav-link"  href="#">Skills</a>
          <a class="nav-link"  href="#">Services</a>
          <a class="nav-link"  href="#">Portfolio</a>
          <a class="nav-link"  href="#">Contact</a> */}