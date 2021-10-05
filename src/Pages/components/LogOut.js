import React from 'react'
import { auth } from '../../firebase'

const LogOut=()=> {
    return (
        <div style={logo[0]}>
            <button style={logo[1]} onClick={()=>auth.signOut()}>LOG OUT</button>
        </div>
    )
}

const logo=[{
    display:'flex',
    justifyContent:'end',
},{
    width:'6rem',
    height:'2rem',
    border:'none',
    borderRadius:'5px',
    margin:'10px',
    color:'white',
    background:'#db0404',
    boxShadow:'0px 0px 2px rgba(0,0,0,.3)',
    fontWeight:'bold'
}]


export default LogOut
