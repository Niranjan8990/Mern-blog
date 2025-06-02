 import React from 'react'
import '../styles/Addblog.css'
import { useState } from 'react'
import axios from 'axios'


const Addblog= () => {

  const [title,setTitle]=useState('')
  const [author,setAuthor]=useState('')
  const [content,setContent]=useState('')
  const baseUrl = import.meta.env.VITE_API_BASE_URL
  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      const response = await axios.post(`${baseUrl}/addblog`,{
        title,
        author,
        content
      })
      console.log(response.data)
      setTitle('')
      setAuthor('')
      setContent('')
      alert("Blog Created Successfully")

    } catch (error) {
        console.log("Error Creating Blog!!!")
    }
  }
  return (
    <>
    <h1 className='heading'> Create Your Own Blog...</h1>
    <form className='input-blog' onSubmit={handleSubmit}>
        <label htmlFor='title'>Title</label>
        <input 
          type='string' 
          id="title" 
          placeholder='Enter title' 
          required 
          value={title} 
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor='author'>Author</label>
        <input 
          type='string' 
          id='author' 
          placeholder='Enter Author name' 
          required 
          value={author}
          onChange={(e)=>setAuthor(e.target.value)}
        />
        <label htmlFor='content'>Content</label>
        <input 
          type='string' 
          id='content' 
          placeholder='Enter your thoughts' 
          required 
          value={content}
          onChange={(e)=>setContent(e.target.value)}
        />
        <input type='submit' value="CREATE"/>
    </form>
    </>
  )
}

export default Addblog