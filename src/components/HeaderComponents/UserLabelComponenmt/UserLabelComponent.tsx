import React from "react"
import { LOGOUT } from "../../../constants/labels"

import './UserLabelComponent.scss'

interface UserLabelProps {
  userName: string
  loginChange: () => void
}

const UserLabelComponent: React.FC<UserLabelProps> = (props) => {
  return (
    <div className='user-label f-c'>
      <div className='user-name'><p>{props.userName}</p></div>
      <button onClick={props.loginChange} className='logout'><p>{LOGOUT}</p></button>
      <div className='user-image'></div>
    </div>
  )
}

export default React.memo(UserLabelComponent)