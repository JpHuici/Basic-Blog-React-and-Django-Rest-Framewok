import React, {useState, useEffect} from 'react';
import axios from 'axios';
// Components
import Header from './components/Header';
import BlogForm from './components/BlogForm';
import Blogs from './components/Blogs';

// The App function is defined as a component function that returns JSX elements. The state of the blogs is initialized as an empty array using the useState state hook.
function App() {

  const [blogs, setBlogs] = useState([]);

  // The effect hook useEffect is used to make an API call on the server and retrieve the blog data in the mounted component, which is indicated by the second argument of the empty useEffect function []. The retrieved blog data is updated in the state using the setBlogs function.  
useEffect(() => {
  axios.get('/get/')
  .then((response) => {
    setBlogs(response.data)
  }).catch(() => {
    alert('Something went wrong!')
  })
}, [])

  return (
    <>
      <Header/>
      <div className='container p-4'>
        <BlogForm blogs={blogs} setBlogs={setBlogs}/>
        <Blogs blogs={blogs} setBlogs={setBlogs}/>
      </div>
    </>
  );
}

export default App;

