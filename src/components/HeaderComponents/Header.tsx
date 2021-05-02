import React, { useCallback, useEffect, useState } from 'react';

import './Header.scss'
import { LOGIN } from '../../constants/labels'
import UserLabelComponent from './UserLabelComponenmt/UserLabelComponent';

const Header: React.FC = () => {
    const [isLogedIn, setIsLoggedIn] = useState<boolean>(false)
    const [userName, setUserName] = useState('Guest')

    const login = useCallback((): void => {
        const user = {
            name: 'Admin'
        }
        setUserName(user.name)
        if(!isLogedIn) {
            setUserName('Admin')
            localStorage.setItem('user', JSON.stringify(user))
        } else {
            setUserName('Guest')
            localStorage.removeItem('user')
        }
        setIsLoggedIn(!isLogedIn)
    }, [isLogedIn])

    useEffect(() => {
        const guest = {
            name: 'Guest'
        }
        const hasUser = (localStorage.getItem('user') === null) ? false: true;
        const user = JSON.parse(localStorage.getItem('user') || JSON.stringify(guest))
        setIsLoggedIn(hasUser)
        setUserName(user.name)
    }, [])

    return (
        <header className='f-c'>
            <div className='header-content f-b'>
                <h1>Museum logo</h1>
                <div className='auth-wrap'>
                    {isLogedIn ?
                        (<UserLabelComponent loginChange={login} userName={userName} />)
                        : (<button onClick={login}><p>{LOGIN}</p></button>)
                    }
                </div> 
            </div>
        </header>
    )
}

export default React.memo(Header)