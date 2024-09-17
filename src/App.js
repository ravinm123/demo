import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [path,setPah]=useState('')
  const [keyword,setKeyword]=useState('')
  const [folder,setFolder]=useState('')
  function handChange(e){
    setPah(e.target.value)
  }
  function handChangekeys(e){
    setKeyword(e.target.value)
  }

  function handChangeFolder(e){
    setFolder(e.target.value)
  }


  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      file_path: path,
      keywords: keyword.split(',').map(k => k.trim()), // Convert string to array
      folder_name: folder
    };
  
    axios.post('https://w3r5mr3n-8000.inc1.devtunnels.ms/orgnize/', data)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }
  

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor='name'>Filepath</label>
            <input type='text' name='filepath' value={path} onChange={handChange}/>
          
        </div>
        <div>
        <label htmlFor='name'>keyword</label>
            <input type='text' name='keywords' value={keyword} onChange={handChangekeys}/>
          
        </div>
        <div>
        <label htmlFor='name'>Folder</label>
            <input type='text' name='folder' value={folder} onChange={handChangeFolder}/>
        </div>
        <button type='submit'> Submit </button>
      </form>
    </div>
  );
}

export default App;
