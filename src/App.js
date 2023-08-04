
import react from "react"
import Page from "./Page"
import { useState } from 'react';
import Navbar from "./Navbar"


function App() {
  const [page,setPage]=useState(1)
  const [mode,setMode]=useState("Light");
  const [navBg,setNavBg]=useState("light");
  const [font,setFont]=useState("dark");
  const [pageBg,setPageBg]=useState("")
  
  const changePage=()=>{
    setPage(page+1)
  }
 const modeChanger=()=>{
  if(mode=="Light"){
    setMode("Dark")
    setNavBg("black")
    setFont("light")
    setPageBg("#000033")
  }else{
    setMode('Light')
    setNavBg("light")
    setFont("dark")
    setPageBg("#FFFFFF")
  }
 }
  return (
    <>
    <Navbar modeChanger={modeChanger} bg={navBg} font={font} mode={mode}/>
    
    <Page changePage={changePage} page={page} font={font} pageBg={pageBg}/>
    
    </>
  );
}

export default App;
