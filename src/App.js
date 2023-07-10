import { Routes,Route } from 'react-router';
import './App.css';
import Navbar from './component/Navbar'
import Home from './component/Home'
import Qualification from './component/Qualification'
import Skills from './component/Skills'
import About from './component/About'

function App() {
  return (
   <div class="container-fluid"  >
     <div class="row">
       <div class="col-3 bg-black">
          <Navbar />
       </div>
       <div class="col-9 bg-warning-subtle justify-content-end">
         <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/Qualification' element={<Qualification />} />
           <Route path='/Skills' element={<Skills/>} />
           <Route path='/About' element={<About/>} />
         </Routes> 
       </div>
    </div>
   </div>
  );
}

export default App;
