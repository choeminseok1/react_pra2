import React from 'react'

function RockScissorsPaper({url,state}) {
  return (
    <div>
        <div className='me'>
            <div className='name'>me</div>
            <div className='imgBox'>
                <img src={url}/>
            </div>
            <div className='state'>
                {state}
            </div>
        </div>
    </div>
  )
}

export default RockScissorsPaper