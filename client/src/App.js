import React from 'react'
import { useRef,useState,useEffect } from 'react';
import "./App.css"
import { uploadFile } from './services/api';


const App = () => {
  const logo = "https://images.pexels.com/photos/2399840/pexels-photo-2399840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const fileInputRef = useRef();
  const [file,setFile]=useState("");
  const [result,setResult]=useState([]);
  
  const onUploadClick = () => {
    fileInputRef.current.click();
  }

   useEffect(()=>{
    const getImage=async ()=>{
      if(file){
        const data=new FormData();
        data.append("name",file.name);
        data.append("file",file);

        let response= await uploadFile(data);
        setResult(response.path);
      }
    }
    getImage();
   },[file])

  return (
    <div>
      <div className='container'>
        <img src={logo} alt='Banner' />
      </div>
      <div className='wrapper'>
        <h3 style={{margin:"10px"}}>Simple File Sharing Application!</h3>
        <p style={{marginTop:"10px", marginBottom:"20px"}}>Upload and Share the download links</p>
        <button style={{borderRadius:"5px"}} onClick={() => onUploadClick()}>Upload</button>
        <input type="file"
          ref={fileInputRef}
          style={{display:"none"}}
          onChange={(e)=>setFile(e.target.files[0])}
        />
      <a href={result}>{result}</a>

      </div>
    </div>
  )
}

export default App;
