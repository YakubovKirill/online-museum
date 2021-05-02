import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { Redirect } from "react-router"
import { USERNAME_LENGTH, PASSWORD_LENGTH, ROUTE } from "../../../constants/constants"
import { LOGIN, USER_NOT_FOUND, WRONG_USERNAME_OR_PASSWORD } from "../../../constants/labels"
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

const LoginComponent: React.FC = () => {
  const [userName, setUserName] = useState<string>('guest')
  const [password, setPassword] = useState<string>('')
  const [loggedIn, setLoggedIn] = useState<boolean>(false)
  const [error, setError] = useState<LoginError>({
    hasError: false,
    message: ''
  })
  const dispatch = useDispatch()

  const isCorrectString = (inputStr: string): boolean => {
    if(inputStr.split(' ').join('').length !== inputStr.length) return false
    return true
  }

  const login = (e: React.FormEvent): void => {
    e.preventDefault()
    if (isCorrectString(userName) && isCorrectString(password)) {
      if (userName === testAdminUser.name && password === testAdminUser.password) {
        const user: User = {
          id: 1,
          userName: userName,
          role: ROLES.ADMIN
        }
        setError({
          hasError: false,
          message: ''
        })
        
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
    const hasUser = (localStorage.getItem('user') === null) ? false: true;
    const user = JSON.parse(localStorage.getItem('user') || JSON.stringify(guest))
    setLoggedIn(hasUser)
    setUserName(user.name)
}, [])

  const changeName = (e: React.FormEvent<HTMLInputElement>): void => {
    setUserName(e.currentTarget.value)
  }

  const changePassword = (e: React.FormEvent<HTMLInputElement>): void => {
    setPassword(e.currentTarget.value)
  }

  if(loggedIn) return <Redirect to={ROUTE.DEFAULT} />

  return (
    <div className='login-wrap f-c'>
      <form onSubmit={login}>
        <input
          type="text"
          name="userName"
          id="userName"
          maxLength={USERNAME_LENGTH}
          minLength={3}
          required
          onChange={changeName}
        />
        <input
          type="password"
          name="password"
          id="password"
          maxLength={PASSWORD_LENGTH}
          minLength={3}
          required
          onChange={changePassword}
        />
        <button type="submit">{LOGIN}</button>
      </form>
    </div>
  )
}

export default React.memo(LoginComponent)