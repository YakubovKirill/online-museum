import React, { useCallback, useEffect, useState } from 'react';

import './Header.scss'
import {LOGIN, LOGOUT} from '../../constants/labels'

const Header: React.FC = () => {
    const [isLogedIn, setIsLoggedIn] = useState<boolean>(false)

    const login = useCallback((): void => {
        const user = {
            name: 'admin'
        }
        if(!isLogedIn) {
            localStorage.setItem('user', JSON.stringify(user))
        } else {
            localStorage.removeItem('user')
        }
        setIsLoggedIn(!isLogedIn)
    }, [isLogedIn])

    useEffect(() => {
        const hasUser = (localStorage.getItem('user') === null) ? false: true;
        setIsLoggedIn(hasUser)
    }, [])

    return (
        <header className='f-c'>
            <div className='header-content f-b'>
                <h1>Museum logo</h1>
                <div className='auth-wrap'>
                    {isLogedIn ?
                        (<button onClick={login}><p>{LOGOUT}</p></button>)
                        : (<button onClick={login}><p>{LOGIN}</p></button>)
                    }
                </div> 
            </div>
        </header>
    )
}

export default React.memo(Header)