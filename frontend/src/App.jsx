 import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import axios from 'axios'
import { Home } from './components/Home'
import { ViewBlogs } from './components/ViewBlogs'
import Addblog from './components/AddBlog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <nav className='navigationbar'>
        <div className='nav-items'>
          <ul>
            <li> <Link to='/' className='nav-link'> Home</Link> </li>
            <li> <Link to='/viewblogs' className='nav-link'>View Blogs</Link></li>
            <li> <Link to='/addblog' className='nav-link'>Create Blog</Link></li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/viewblogs' element={<ViewBlogs/>} />
        <Route path='/addblog' element={<Addblog/>}/>
      </Routes>
      
    </Router>
    </>
  )
}

export default App