import React,{ useState,useEffect } from 'react'
import LogOut from './LogOut'
import SendMessages from './SendMessages'
import {auth, db} from '../../firebase'

const Chat=()=> {
    const [messages,setMessages] = useState([])
    
    useEffect(()=>{
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot=>{
            setMessages(snapshot.docs.map(doc=>doc.data()))
        })
    }, [])
    
    return (
        <div className='content-container'>
            <LogOut/>
            <div className='msg-container' id='scroll'>
            {messages.map(({id,text,photoURL,uid})=>{
                return (
                    <div key={id} className={`${uid===auth.currentUser.uid ? 'sent' : 'receive'}`}>
                            <img src={photoURL} alt="profile" />
                            <p className='text'>{text}</p>
                        </div>
                )
            })}
            </div>
            <SendMessages />
        </div>
    )
}


export default Chat
