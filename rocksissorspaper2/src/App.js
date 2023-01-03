import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';
import RockScissorsPaper from './components/RockScissorsPaper';
function App() {
  const [myState,setMyState] = useState()
  const [myUrl,setMyUrl] = useState()
  
  const [comState,setComState] = useState()
  const [comUrl,setComUrl] = useState()

  const [comName,setComName] = useState()
  
  const choice = {
    Rock : {
      "name" : "rock",
      "url" : "https://m.bigfile.co.kr/_template/service/images//07event_images/2016/04_gamezone/gamezone_rps_motion_r.png"
    },
  
    Scissors : {
      "name" : "scissors",
      "url" : "https://blog.kakaocdn.net/dn/HfURw/btqXKvOTNWK/gWTwPXEg9QzSV0ilOuwuak/img.png"
    },
  
    Paper : {
      "name" : "paper",
      "url" : "https://blog.kakaocdn.net/dn/bmjB2s/btqXHhp6kpG/TH14W4U612SxKo9uuR2sB0/img.png"
    }
  }
  
  function rockSissorsPaper(changeUrl) {
    if (changeUrl == 'rock') {
      setMyUrl(choice.Rock.url) 
    } else if (changeUrl == 'scissors') {
      setMyUrl(choice.Scissors.url)
    } else if (changeUrl == 'paper') {
      setMyUrl(choice.Paper.url)
    } 

    comChange()
    setComUrl(comName.url)
    winlose(changeUrl)
  }
  
  function comChange() {
    const a = Object.keys(choice)
    const b = Math.floor(Math.random()*3)
    const c = a[b]

    return setComName(choice[c])
  }

  function winlose(changeUrl) {
    const myKey = changeUrl
    const comKey = comName.name

    if (myKey === comKey) {
      setMyState('tie')
      setComState('tie')
    } else if (myKey == 'rock') {
      if (comKey == 'scissors') {
        setMyState('win')
        setComState('lose')
      } else {
        setMyState('lose')
        setComState('win')
      }
    } else if (myKey == 'scissors') {
      if (comKey == 'paper') {
        setMyState('win')
        setComState('lose')
      } else {
        setMyState('lose')
        setComState('win')
      }
    } else if (myKey == 'paper') {
      if (comKey == 'rock') {
        setMyState('win')
        setComState('lose')
      } else {
        setMyState('lose')
        setComState('win')
      }
    }
  }

  return (
    <div className="App">
      
      <div className='RockPaperScissors'>
        <RockScissorsPaper url={myUrl} state={myState}></RockScissorsPaper>
        <RockScissorsPaper url={comUrl} state={comState}></RockScissorsPaper>
      </div>
      <div className='btn_wrap'>
        <div onClick={()=>{rockSissorsPaper('scissors')}} className='btn scissors'>가위</div>
        <div onClick={()=>rockSissorsPaper('rock')} className='btn rock'>바위</div>
        <div onClick={()=>rockSissorsPaper('paper')} className='btn paper'>보</div>
      </div>
    </div>
  );
}

export default App;
