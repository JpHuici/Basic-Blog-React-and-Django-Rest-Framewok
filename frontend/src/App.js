import React from 'react';
// Components
import Header from './components/header';
import Blogform from './components/Blogform';


function App() {
  return (
    <>
      <Header/>
      <div className='container'>
        <Blogform/>
      </div>
    </>
  );
}

export default App;
