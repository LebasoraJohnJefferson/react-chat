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
        <div className='send-container'>
            <form onSubmit={sendMessage} class='form'>
                <input class='sent-input' value={msg} onChange={(e)=>setMsg(e.target.value)} placeholder='Send Message...'/>
                <button class='sent-btn' type="submit"><i class="far fa-paper-plane"></i></button>
            </form>
        </div>
    )
}

export default SendMessages
