import React from 'react'

function comment(item) {
  return (
    <div>
      <div className='comment_recommendation'>
        {item.item.choice ? <>추천</> : <>비추천</>}
      </div>
      <div className='comment_name'>
        {item.item.title}
      </div>
      <div className="comment_price">
        {item.item.price}
      </div>
      <div className="comment_newold">
        {item.item.new ? <>신제품</> : <>구제품</>}
      </div>
  </div>
  )
}

export default comment