import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { countAction } from './redux/action/countAction'

function App() {

  let counter = useSelector(state=>state.count)
  let dispatch = useDispatch()

  const plus = ()=>{
    dispatch(countAction.countUp(1))
  }
  const minus = ()=>{
    dispatch(countAction.countDown())
  }
  return (
    <div className="App">
      <div>{counter.count}</div>
      <button onClick={plus}>Up</button>
      <button onClick={minus}>Down</button>
    </div>
  )
}

export default App

// 1.UI > action > store(redux)
// 목표 = 카운트 다운 구현
// 값을 저장하는곳을 만들기 위해서 main.js에 Provider store={store} 로 스토어를 생성함
