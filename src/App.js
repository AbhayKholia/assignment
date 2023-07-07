import React from "react"
import"./App.css"
import Blog from "./components/Blog"
import Community from "./components/Community"
import Explore from "./components/Explore"
import Mentors from "./components/Mentors"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Info from "./components/Info.js"


//npm install react-router-dom@5

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
      
         <Routes>

         <Route path='/' element={<Explore />} />
            
         
            <Route path='/Mentors' element={<Mentors />} />
              
           
            <Route path='/Blog' element={<Blog />} />
              
          
            <Route path='/Community' element={  <Community />} />

         </Routes>
       
      </Router>
      <Info/>
    </div>
  )
}

export default App