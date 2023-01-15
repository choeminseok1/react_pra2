import React from 'react'
import { useState,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { shopAction } from '../redux/action/shopAction';

function Home() {
  let shopItem = useSelector(state=>state.shop)
  let dispatch = useDispatch()
  const [loading,setLoading] = useState(true)

  const shopCall = ()=> {
    dispatch(shopAction.shopItem())
  } 

  useEffect(()=>{
    console.log(shopItem)
    setLoading(false)
    shopCall()
  },[])

  return (
    <div className='content_wrap'>
      <div className='shop_wrap'>
        {loading ? <>기다려주세요</> : shopItem.list.map((item)=>
        <div className='shop_item'>
          <div>
            <img src={item.img}/>
          </div>
          <div>{item.title}</div>
          <div>{item.new ? <>신제품</> : <>없음</>}</div>
          <div>{item.price}</div>
        </div>
      )}
      </div>
    </div>
  )
}

export default Home