 import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import "../styles/ViewBlogs.css"

export const ViewBlogs = () => {
  const [data,setData]=useState([])
  const [error,setError]=useState(null)
  const baseUrl=import.meta.env.VITE_API_BASE_URL

  useEffect(()=>{
    const fetchData= async() =>{
      try {
        const response= await axios.get(`${baseUrl}/viewblogs`)
        console.log(response.data.Blogs)
        setData(response.data.Blogs)
        if(!response){
          console.log("Error occured")
        }
      } catch (error) {
        console.log("Error occured")
      }
    }
    fetchData()
  },[])
  return (
    <>
    <ul className='blog-list'>
      {data.map((b) => (
        <li key={b._id}>
          <h3 className="blog-title">{b.title}</h3>
          <p className="blog-author"><strong>Author:</strong> {b.author}</p>
          <p className="blog-content">{b.content}</p>
        </li>
      ))}
    </ul>
    </>
  )
}