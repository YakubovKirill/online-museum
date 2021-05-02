import React from "react"

import './ContentComponent.scss'

const ContentComponent: React.FC = () => {
  return (
    <div className='f-c'>
      <div className='content'></div>
    </div>
  )
}

export default React.memo(ContentComponent)