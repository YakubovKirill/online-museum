import React, { useEffect } from "react"

import './Gallery.scss'

const Gallery: React.FC = () => {
  useEffect(() => {
		window.scrollTo({top: 0});
	}, []);
  return (
    <div className='gallery-wrap f-c'>
      <div className='gallery f-c'>
        <div className='item'></div>
        <div className='item'></div>
        <div className='item'></div>
        <div className='item'></div>
        <div className='item'></div>
      </div>
    </div>
  )
}

export default React.memo(Gallery)