import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { Redirect } from "react-router"
import { USERNAME_LENGTH, PASSWORD_LENGTH, ROUTE } from "../../../constants/constants"
import { ENTER_PASSWORD, ENTER_USERNAME, LOGIN, USER_NOT_FOUND, WRONG_USERNAME_OR_PASSWORD } from "../../../constants/labels"
import { changeUserAction } from "../../../store/actions"
import { ROLES, User } from "../../../types"

import './LoginComponent.scss'

const testAdminUser = {
  name: 'Admin',
  password: 'Admin'
}

interface LoginError {
  hasError: boolean
  message: string
}

const guest = {
  id: 0,
  name: 'Guest',
  role: ROLES.GUEST
}

const noError = {
  hasError: false,
  message: ''
}

const LoginComponent: React.FC = () => {
  const [userName, setUserName] = useState<string>('guest')
  const [password, setPassword] = useState<string>('')
  const [loggedIn, setLoggedIn] = useState<boolean>(false)
  const [error, setError] = useState<LoginError>(noError)
  const dispatch = useDispatch()

  const isCorrectString = (inputStr: string): boolean => {
    if(inputStr.split(' ').join('').length !== inputStr.length) return false
    return true
  }

  const login = (e: React.FormEvent): void => {
    e.preventDefault()
    if (isCorrectString(userName) && isCorrectString(password)) {
      if (userName === testAdminUser.name && password === testAdminUser.password) {
        // Create user entity
        const user: User = {
          id: 1,
          userName: userName,
          role: ROLES.ADMIN
        }
        setError(noError)
        // Put user to local and redux storage
        localStorage.setItem('user', JSON.stringify(user))
        dispatch(changeUserAction(user))
        setLoggedIn(true)
      } else {
        setError({
          hasError: true,
          message: USER_NOT_FOUND
        })
      }
    } else {
      setError({
        hasError: true,
        message: WRONG_USERNAME_OR_PASSWORD
      })
    }
  }

  useEffect(() => {
    // Set login status after page reload
    const hasUser = (localStorage.getItem('user') === null) ? false: true;
    const user = JSON.parse(localStorage.getItem('user') || JSON.stringify(guest))
    setLoggedIn(hasUser)
    setUserName(user.name)
}, [])

  const changeName = (e: React.FormEvent<HTMLInputElement>): void => {
    setUserName(e.currentTarget.value)
    setError(noError)
  }

  const changePassword = (e: React.FormEvent<HTMLInputElement>): void => {
    setPassword(e.currentTarget.value)
    setError(noError)
  }

  if(loggedIn) return <Redirect to={ROUTE.DEFAULT} />

  return (
    <div className='login-wrap f-c'>
      <form onSubmit={login}>
        <div className='login-header f-c'><p>{LOGIN}</p></div>
        <div className='input-wrap'>
          <input
            type="text"
            name="userName"
            id="userName"
            maxLength={USERNAME_LENGTH}
            minLength={3}
            required
            onChange={changeName}
            placeholder={ENTER_USERNAME}
          />
        </div>
        <div className='input-wrap'>
          <input
            type="password"
            name="password"
            id="password"
            maxLength={PASSWORD_LENGTH}
            minLength={3}
            required
            onChange={changePassword}
            placeholder={ENTER_PASSWORD}
          />
        </div>
        <div className='input-wrap f-c'><button type="submit">{LOGIN}</button></div>
        
        {/** Handle data error */}
        {error.hasError ? <div className='error-text f-c'><p>{error.message}</p></div>: ''}
      </form>
      
    </div>
  )
}

export default React.memo(LoginComponent)