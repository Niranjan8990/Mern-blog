 import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AddBlog from './components/AddBlog';
import BlogList from './components/BlogList';

const App = () => (
  <div>
    <nav>
      <Link to="/">All Blogs</Link> | <Link to="/add">Add Blog</Link>
    </nav>
    <Routes>
      <Route path="/" element={<BlogList />} />
      <Route path="/add" element={<AddBlog />} />
    </Routes>
  </div>
);

export default App;