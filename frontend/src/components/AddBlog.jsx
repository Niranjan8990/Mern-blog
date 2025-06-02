import React, { useState } from 'react';
import axios from 'axios';

const AddBlog = () => {
  const [form, setForm] = useState({ title: '', content: '', author: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/blogs', form);
    alert('Blog added!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Blog</h2>
      <input name="title" placeholder="Title" onChange={handleChange} required />
      <textarea name="content" placeholder="Content" onChange={handleChange} required />
      <input name="author" placeholder="Author" onChange={handleChange} required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddBlog;