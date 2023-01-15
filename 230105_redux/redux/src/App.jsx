import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { countAction } from './redux/action/countAction'
import { userAction } from './redux/action/userAction'

function App() {

  let counter = useSelector(state=>state.count)
  let userData = useSelector(state=>state.user)
  let dispatch = useDispatch()

  const plus = ()=>{
    dispatch(countAction.countUp(1))
  }
  const minus = ()=>{
    dispatch(countAction.countDown())
  }
  const dataCall = ()=>{
    dispatch(userAction.call(1))
  }


  return (
    <div className="App">
      <div>{counter.count}</div>
      <button onClick={plus}>Up</button>
      <button onClick={minus}>Down</button>
      <button onClick={dataCall}>data call</button>
      
      <div>
        {/* {userData.list?.map((item)=>
        <>
          <div>{item.id}</div>
        </>
      )} */}
      {userData.list.id}
      </div>
    </div>
  )
}

export default App

// 1.UI > action > store(redux)
// 목표 = 카운트 다운 구현
// 값을 저장하는곳을 만들기 위해서 main.js에 Provider store={store} 로 스토어를 생성함
// index.js에 combineReducers를 사용하고 export default combineReducers({ count: counterReducer }) 로 오브젝트 형식으로 내보낸다
// countAction에서 변화시킬 값을 함수로 제작했고, dispatch로 오브젝트 형식으로 reducer로 내보냈다.
// countReducer에서 initialState는 초기값을 모아놓은것이다.
// initialState를 어떻게 변화 시킬지 적어놓은것이 counterReducer이다. state는 initialState다.
//const counterReducer = (state = initialState,action)=>{
  //let {type,payload} = action
  //switch (type) {
//위를 보면 switch문에서 (type)이 key값이다.
//일일히 action.payload 등등 쓸데없이 찾아오는걸 방지하기 위해서 let {type,payload} = action으로 한번에 묶어줬다.
//type이 COUNT_PLUS인지 COUNT_MINUS인지에 따라 해당 리턴문을 실행한다. type key는 '무조건' 전체 string 대문자
//counterRdducer의 마지막에 default: return {...state}를 사용해준 이유는, 사용된 키값이 모두 일치하지 않을때. 즉 변화가 없을때 기존값을 유지하기 위함이다
//최종적으로 다시 app으로 돌아와서 현재 페이지의 counter가 구독하고 있는 index의 state를 갖고온다. state의 어떤것을? count를.


