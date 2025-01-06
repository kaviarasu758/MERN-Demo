import React from 'react'
import './App.css'
// import UnorderedList from '../components/list'
import Jayaanth from '../components/home'
import Navbar from "../components/navbar";
import About from "../components/about";
import Project from "../components/project";
import Contact from "../components/contact";
import im from '../src/assets/ajyajaya.jpg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from '../components/footer';
import Usestate from '../components/usestate';
import Useref from '../components/Useref';
import UseContext from '../components/Usecontext';
import Usememo from '../components/Usememo';


function App() {
  // var arr=[Jayaanth,Jana];
  return (
    <>
      <div style={{
        backgroundImage: `url(${im})`,
        backgroundSize: 'cover ',
        // backgroundPosition: 'center',
        height: '100vh'
      }}>
        <Navbar Name="FULL STACK" />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Jayaanth />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/usestate" element={<Usestate />} />
            <Route path="/useref" element={<Useref/>}/>
            <Route path="/usecontext" element={<UseContext/>}/>
            <Route path='/usememo' element={<Usememo/>}/>

          </Routes>
        </BrowserRouter>
        
      </div>
    </>
  )
}

export default App
