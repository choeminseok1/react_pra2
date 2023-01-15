import React from 'react'
import { useState,useEffect } from 'react';
import Card from '../components/Card';

function shop() {
    const [sellData,setSellData] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        fetch('https://my-json-server.typicode.com/hongyungeun/react-router-practice/products')
        .then((response)=>response.json())
        .then((response)=>{
            setSellData(response)
            setLoading(false)
        })
    },[])

    return (
        <div className='sellWrap'>
            {loading ? <>로딩중</> : 
                sellData.map((item,i)=>
                (
                <Card props={item}/>
                )
                )
            }
        </div>
    )
}

export default shop
