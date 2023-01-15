import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ImgCard from '../components/ImgCard';
import Comment from '../components/Comment';

function Detail() {
  const [idData,setIdData] = useState({})
  const [loading,setLoading] = useState(true)
  let {id} = useParams()

  useEffect(()=>{
    fetch(`https://my-json-server.typicode.com/hongyungeun/react-router-practice/products/${id}`)
    .then((response)=>response.json())
    .then((response)=>{
      setIdData(response)
      setLoading(false)
    })
  },[])

  return (
    <div className='content_detail_wrap'>
      {loading ? <>로딩중</> : <>
        <ImgCard item={idData.img}/>
        <div className='content_detail_right'>
          <Comment item={idData}/>
          <select name="" id="">
                    <option hidden>사이즈 선택</option>
                    {idData.size.map((size)=>
                        <option>{size}</option>
                    )}
          </select>
        </div>
      </>}
    </div>
  )
}

export default Detail