import React from 'react'
import { auth } from '../../firebase'

const LogOut=()=> {
    return (
        <div className='logout-btn-container'>
            <button class='logout-btn' onClick={()=>auth.signOut()}>LOG OUT</button>
        </div>
    )
}


export default LogOut
