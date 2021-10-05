import React from 'react'
import firebase from 'firebase'
import {auth} from '../../firebase'

const SignIn=()=> {
    const signInWithGoogle = ()=>{
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }

    return (
        <div style={container}>
            <i style={logo} class="far fa-comments"></i>
            <button style={button} onClick={signInWithGoogle}>Sign In With Google</button>
        </div>
    )
}

const container={
    display:'flex',
    position:'fixed',
    top:'0', left:'0',
    width:'100%',
    height:'100%',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#0a0b32',
    flexDirection:'column',
}

const logo={
    fontSize:'10rem',
    color:'#0a7932',
}

const button={
    border:'none',
    outline:'none',
    color:'white',
    fontWeight:'bold',
    fontSize:'1.5rem',
    backgroundColor: '#05ffb0',
    padding:'20px',
    borderRadius:'20px',
    cursor:'pointer',
}

export default SignIn
