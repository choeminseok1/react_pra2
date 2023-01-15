import React from 'react'
import ImgCard from './ImgCard';
import Comment from './Comment';
import { useNavigate } from 'react-router-dom';

function Card(dataValue) {
    let navigate = useNavigate()

    function move(id) {
        navigate(`/detail/${id}`)
    }

  return (
    <div>
        <div className='content' onClick={()=>move(dataValue.props.id)}>
            <ImgCard item={dataValue.props.img}/>
            <Comment item={dataValue.props}/>
        </div>
    </div>
  )
}

export default Card