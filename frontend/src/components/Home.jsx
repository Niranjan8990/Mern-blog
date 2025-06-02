import React from 'react'
import '../styles/Home.css'
import { Link } from 'react-router-dom'



export const Home = () => {
  return (
    <>
    <div className='home-para'>
        
    </div>
    <div className='home-links'>
        <ul>
            <li> <Link to='/viewblogs' className='home-link-1'>View Blogs</Link></li>
            <li> <Link to='/addblog' className='home-link-2'>Create Blog</Link></li>
        </ul>
         
    </div>
    </>
  )
}