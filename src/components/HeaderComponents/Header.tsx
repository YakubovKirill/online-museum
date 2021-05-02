import React, { useCallback, useEffect, useState } from 'react';

import './Header.scss'
import { LOGIN } from '../../constants/labels'
import UserLabelComponent from './UserLabelComponenmt/UserLabelComponent';
import { Link } from 'react-router-dom';
import { ROUTE } from '../../constants/constants';
import { ROLES, User } from '../../types';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { changeUserAction } from '../../store/actions';

const guest: User = {
    id: 0,
    userName: 'Guest',
    role: ROLES.GUEST
}

const Header: React.FC = () => {
    const [isLogedIn, setIsLoggedIn] = useState<boolean>(false)
    const [userName, setUserName] = useState('')
    const user = useSelector((user: RootStateOrAny) => user.user)
    const dispatch = useDispatch()

    const logout = useCallback((): void => {
        if(isLogedIn) {
            localStorage.removeItem('user')
            setIsLoggedIn(false)
            dispatch(changeUserAction(guest))
        }
    }, [isLogedIn, dispatch])

    useEffect(() => {
        const hasUser = (localStorage.getItem('user') === null) ? false: true;
        if(hasUser) {
            const userStor = JSON.parse(localStorage.getItem('user') || JSON.stringify(guest))
            const user: User = {
                id: userStor.id,
                userName: userStor.userName,
                role: userStor.role
            }
            dispatch(changeUserAction(user))
        }
        setIsLoggedIn(hasUser)
    }, [dispatch])

    useEffect(() => {
        const hasUser = (localStorage.getItem('user') === null) ? false: true;
        setIsLoggedIn(hasUser)
        setUserName(user.userName)
    }, [user])

    return (
        <header className='f-c'>
            <div className='header-content f-b'>
                <Link to={ROUTE.DEFAULT}><h1>Museum logo</h1></Link>
                <div className='auth-wrap'>
                    {isLogedIn ?
                        (<UserLabelComponent loginChange={logout} userName={userName} />)
                        : (<button> <Link to={ROUTE.LOGIN}><p>{LOGIN}</p></Link></button>)
                    }
                </div> 
            </div>
        </header>
    )
}

export default React.memo(Header)