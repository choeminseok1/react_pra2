import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  // 카운트다운
  const [count, setCount] = useState(0)

  function up() {
    setCount(count + 1)
  }
  function down() {
    count > 0 ? setCount(count - 1) : console.log('error') 
  }

// 투두리스트
  // const [value,setValue] = useState()
  // const [list,setList] = useState([
  //   {
  //     id : 0,
  //     name : 'first'
  //   },
  //   {
  //     id : 1,
  //     name : 'second'
  //   }
  // ])

  // function addBtn() {
  // const maxNumber = Math.max((list)=>list.id)
  //   const maxNumber = Math.max(...list.map((highNumber)=>highNumber.id))
  //   setList((listSelf)=>[
  //     {
  //       id : maxNumber + 1,
  //       name : value
  //     },
  //     ...listSelf
  //   ])
  // }

  // function deleteBtn(id) {
  //   setList((changeList)=>
  //     changeList.filter((listId)=>
  //       listId.id !== id
  //     )
  //   )
  // }

  // 가위바위보
  // const [me,setMe] = useState()
  // const [myStatus,setMyStatus] = useState()
  // const [com,setCom] = useState()
  // const [comStatus,setComStatus] = useState()

  // const status = {
  //   Sissors : {
  //     name : 'sissors',
  //     url : 'https://blog.kakaocdn.net/dn/HfURw/btqXKvOTNWK/gWTwPXEg9QzSV0ilOuwuak/img.png'
  //   },
  //   Rock : {
  //     name : 'rock',
  //     url : 'https://m.bigfile.co.kr/_template/service/images//07event_images/2016/04_gamezone/gamezone_rps_motion_r.png'
  //   },
  //   Paper : {
  //     name : 'paper',
  //     url : 'https://blog.kakaocdn.net/dn/bmjB2s/btqXHhp6kpG/TH14W4U612SxKo9uuR2sB0/img.png'
  //   }
  // }

  // function rspStart(chose) {
  //   if (chose == 'rock') {
  //     setMe(status.Rock.url)
  //   } else if (chose == 'sissors') {
  //     setMe(status.Sissors.url)
  //   } else if (chose == 'paper') {
  //     setMe(status.Paper.url)
  //   }

  //   comRandom()
    
  // }

  // function comRandom() {

  // }

  return (
    <div className="App">
      {/* 카운트다운 */}
      {/* <button onClick={up}>UP</button>
      <button onClick={down}>DOWN</button>
      <>{count}</> */}

      {/* todolist */}
      {/* <input type="text" value={value} onChange={(inputValue)=>setValue(inputValue.target.value)}/>
      <button onClick={addBtn}>일정추가</button>
      {...list.map((listData)=>
        <>
          <div>{listData.id}</div>
          <div>{listData.name}</div>
          <button onClick={()=>deleteBtn(listData.id)}>삭제</button>
        </>
      )} */}

      {/* 가위바위보 */}
      <>
        <div className='rsp_wrap'>
          <div className='me'>
            <img src={me} alt="" />
            <div className='me_status'>{myStatus}</div>
          </div>
          <div className='com'>
            <img src={com} alt="" />
            <div className='com_status'>{comStatus}</div>
          </div>
        </div>
        <div className='btn_wrap'>
          <button className='sissors' onClick={()=>rspStart('sissors')}>가위</button>
          <button className='rock' onClick={()=>rspStart('rock')}>바위</button>
          <button className='paper' onClick={()=>rspStart('paper')}>보</button>
        </div>
      </>
    </div>
  )
}

export default App
