import React from 'react'
import Chat from './components/Chat'
import SignIn from './components/SignIn'
import {auth} from '../../src/firebase'
import {useAuthState} from 'react-firebase-hooks/auth'

const App=()=> {
    const [user] = useAuthState(auth)
    return (
        <div>
            {user ? <Chat/> : <SignIn/> }
        </div>
    )
}

export default App
