import React, {useState} from 'react'
import firebase from 'firebase'
import {auth, db} from '../../firebase'

const SendMessages=()=> {
    const [msg,setMsg]=useState('');

    async function sendMessage(e){
        e.preventDefault()
        const {uid,photoURL}=auth.currentUser
        console.log('submit')
        await db.collection('messages').add({
            text:msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('');
    }
    return (
        <div style={messagesStyle[0]}>
            <form style={messagesStyle[1]} onSubmit={sendMessage} class='form'>
                <input style={messagesStyle[2]} value={msg} onChange={(e)=>setMsg(e.target.value)} placeholder='Send Message...'/>
                <button style={messagesStyle[3]}  type="submit"><i class="far fa-paper-plane"></i></button>
            </form>
        </div>
    )
}

const messagesStyle=[{
    //0
    display:'grid', 
},{
    //1
    display:'grid',
    gridTemplateColumns:'1fr auto',
    color:'white',
},{
    border:'none',
    outline:'none',
    height:'3rem',
    textIndent:'30px'
},{
    width:'5rem',
    outline:'none',
    border:'none',
    fontSize:'1.5rem',
    backgroundColor:'#49bf54',
    cursor:'pointer',
}]

export default SendMessages
