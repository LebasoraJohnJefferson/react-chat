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
        <div style={chat[0]}>
            <LogOut/>
            <div style={chat[1]} id='scroll'>
            {messages.map(({id,text,photoURL,uid})=>{
                return (
                    <div key={id} style={uid===auth.currentUser.uid ? chat[2] : chat[3]}>
                            <img style={chat[4]} src={photoURL} alt="profile" />
                            <p className='text'>{text}</p>
                        </div>
                )
            })}
            </div>
            <SendMessages />
        </div>
    )
}

const chat=[{
    //chat 0
    backgroundColor:'#0a0b32',
    position:'fixed',
    left:'0', top:'0',
    width:'100%',height:'100vh',
    display:'grid',
    gridTemplateRows:'auto 1fr',
    gridTemplateColumns:'1fr',
},{
    //chat 1
    display:'grid',
    overflowY:'scroll',
    gridTemplateColumns:'1fr',
    alignItems:'center',
    borderTop:'3px solid rgba(255,255,255,.3)',
    overflowX:'hidden',
    wordWrap:'break-word',
    overflowWrap:'break-all',
    marginBottom:'6.5rem',

},{
    //chat 2
    backgroundColor:'#23c2c4',
    display:'flex',
    width:'60vw', minHeight:'5rem',
    alignItems:'center',
    margin:'5px 0px 5px 2%',
    borderRadius:'10px',
    
},{
    //chat 3
    backgroundColor:'#137838',
    borderRadius:'10px',
    margin:'5px 0px',
    transform:'translateX(50%)',
    display:'flex',
    width:'60vw', minHeight:'5rem',
    alignItems:'center'
},{
    //chat 4
    width:'2.5rem',
    height:'2,5rem',
    borderRadius:'999px',
    margin:'0px 10px'
}]

export default Chat
