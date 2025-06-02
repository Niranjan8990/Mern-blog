const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

// Get all blogs
router.get('/', async (req, res) => {
  const blogs = await Blog.find();
  res.json(blogs);
});

// Add a blog
router.post('/', async (req, res) => {
  const { title, content, author } = req.body;
  const blog = new Blog({ title, content, author });
  await blog.save();
  res.status(201).json(blog);
});

module.exports = router;