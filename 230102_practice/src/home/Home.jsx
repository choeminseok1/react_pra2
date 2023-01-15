import React from 'react';

function Home() {
  
  return (
    <div className='home_wrap'>
        <div className='home_header'>불가능, 그것은 아무것도 아니다.</div>
        <div className='video_wrap'>
          <iframe width="50%" height="500px" src="https://www.youtube.com/embed/oKB-2Ny824?autoplay=1&mute=1&amp;playlist=oKB-2Ny824k&loop=1"
          title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;
          clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
          </iframe>
        </div>
    </div>
  )
}

export default Home