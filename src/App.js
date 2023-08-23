import React, { useState, useEffect } from 'react';
import './App.css';
import BlogForm from './components/blogForm';
import BlogList from './components/blogList';

function App() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch('/blogs');
    const data = await response.json();
    setPosts(data);
  };

  const handlePostSubmit = async (post) => {
    await fetch('/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    });
    fetchPosts();
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="App">
      <h1>Mini Blog App</h1>
      <BlogForm onPostSubmit={handlePostSubmit} />
      <h2>Posts</h2>
      <BlogList posts={posts} />
    </div>
  );
}

export default App;
