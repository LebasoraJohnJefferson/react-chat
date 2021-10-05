import React from 'react'
import {auth} from '../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

const LogOut=()=> {
    const [user] = useAuthState(auth)
    const name=user.displayName
    return (
        <div style={logo[0]}>
            <div>{name}</div>
            <button style={logo[1]} onClick={()=>auth.signOut()}>LOG OUT</button>
        </div>
    )
}

const logo=[{
    display:'flex',
    justifyContent:'end',
    color:'white',
    justifyContent:'space-around',
    alignItems:'center',
},{
    width:'6rem',
    height:'2rem',
    border:'none',
    borderRadius:'5px',
    margin:'10px 0px',
    color:'white',
    background:'#db0404',
    boxShadow:'0px 0px 2px rgba(0,0,0,.3)',
    fontWeight:'bold'
}]


export default LogOut
