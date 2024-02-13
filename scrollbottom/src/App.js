import './App.css';
import React, {useEffect} from 'react'
import defaultSound from './components/defaultSound';
import listensAudio from './components/listensAudio';
import differentLibraries from './components/differentLibrariesForMultipleAdio';
import userEvent from '@testing-library/user-event';
import { fireEvent } from '@testing-library/react';

function App() {

  const array = []
  let value = 0


  
  while(true){
    if(value === 10){
      break
    }
    array.push(value++)
  }


  function incriment(){
    array.push(value++)
    const div = document.getElementById('1')
    const ul = document.getElementById('ul')
    array.map((ar)=>{
      const li = document.createElement('li')
      li.innerHTML = `${ar}`
      ul.appendChild(li)
    })
    
    div.scrollTo(0, div.scrollHeight)
    PlaySound()
    
    // const link = document.getElementById('change')
    // const head = document.getElementById('head')
    // console.log(link)
    // link.href = "%PUBLIC_URL%/favicon.ico"
    // head.append(link)

  }

  function PlaySound(){
    // var sound = document.getElementById("sound1")
    // console.log(sound)
    // sound.srcObject.play()
    // try{
    //   const sound = new Audio("score.wav")
    //   sound.srcObject.play()
    // }catch(err){
    //   console.log(err)
    // }

    // const soundobj = new MediaRecorder()
    // const sound = document.getElementById("sound")
    // sound.play()
    const sound = new Audio(require("./score.wav"))
    // sound.src = 'score.wav'
    // sound.preload = 'metadata'
    // sound.src = 'C:/H5SH/Other Projects/React-Scroll-Bottom/scrollbottom/src/score.wav'
    // sound.play()
    differentLibraries(sound)
    
  }


  window.setInterval(()=>{
    incriment()
  },7000)

  useEffect(()=>{
    incriment()
  },[])



  

  return (
    <div id='body'>
     <div style={{width: '50%', height: '500px', overflow: 'scroll', marginLeft: '20%', marginTop: '10%'}} id='1' className="App">
      <ul id='ul'>

      </ul>
      
    </div>
    {/*<audio muted={true} id='sound'>
      <source src='score.wav' />
  </audio>*/}
    {/* <embed src='score.wav' autoStart="false" width='0' height="0" id='sound' muted={true}></embed>/ */}
     {/* <button onClick={incriment}>Change Icon</button>  */}
    </div>
  );
}

export default App;
