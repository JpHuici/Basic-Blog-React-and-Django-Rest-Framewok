import React, {useState, useEffect} from 'react';
import axios from 'axios';
// Components
import Header from './components/header';
import Blogform from './components/Blogform';
import Blogs from './components/Blogs';

function App() {

  const [blogs, setBlogs] = useState([]);
  
useEffect(() => {
  axios.get('/get/')
  .then((response) => {
    setBlogs(response.data)
  }).catch(() => {
    alert('Something went wrong')
  })
}, [])

  return (
    <>
      <Header/>
      <div className='container p-4'>
        <Blogform blogs={blogs} setBlogs={setBlogs}/>
        <Blogs blogs={blogs} setBlogs={setBlogs}/>
      </div>
    </>
  );
}

export default App;
