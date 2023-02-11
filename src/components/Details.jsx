import React from 'react'

function Details(props) {
  return (
    <div className='details'>
      <div className="details-img">
        <img src={props.songs.img_src} alt="cover" />
      </div>
      <h3 className='details-title'>
      {props.songs.title}
      </h3>
      <h3 className='details-artist'>
      {props.songs.artist}
      </h3>
    </div>
  )
}

export default Details