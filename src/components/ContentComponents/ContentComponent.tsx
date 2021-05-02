import React from "react"
import { Link, Route } from "react-router-dom"
import { ROUTE } from "../../constants/constants"
import { GO_TO_GALLERY, MINI_GALLERY, TEXT_DESCRIPTION_FIRST } from "../../constants/labels"

import './ContentComponent.scss'

const ContentComponent: React.FC = () => {
  return (
    <div className='f-c'>
      <div className='content'>
        {/** Block with left image position */}
        <div className='description-block left-img f-c'>
          <div className='description-image'></div>
          <div className='description-text'><p>{TEXT_DESCRIPTION_FIRST}</p></div>
        </div>

        {/** Block with right image position */}
        <div className='description-block right-img f-c'>
          <div className='description-text'><p>{TEXT_DESCRIPTION_FIRST}</p></div>
          <div className='description-image'></div>
        </div>

        {/** Block with left image position */}
        <div className='description-block left-img f-c'>
          <div className='description-image'></div>
          <div className='description-text'><p>{TEXT_DESCRIPTION_FIRST}</p></div>
        </div>

        <div className='mini-gallery'>
          <div className='header f-c'><p>{MINI_GALLERY}</p></div>
          <div className='gallery f-c'>
            <div className='mini-item'></div>
            <div className='mini-item'></div>
            <div className='mini-item'></div>
            <div className='mini-item'></div>
          </div>
          <div className='row f-c'><Link to={ROUTE.GALLERY}><button>{GO_TO_GALLERY}</button></Link></div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(ContentComponent)