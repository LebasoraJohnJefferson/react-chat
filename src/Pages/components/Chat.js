import React,{ useState,useEffect } from 'react'
import LogOut from './LogOut'
import SendMessages from './SendMessages'
import {auth, db} from '../../firebase'



const Chat=()=> {
    const [messages,setMessages] = useState([])
    useEffect(()=>{
        db.collection('messages').orderBy('createdAt','desc').limit(50).onSnapshot(snapshot=>{
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
                            <div style={chat[5]}>{text}</div>
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
    display:'flex',
    flexDirection:'column-reverse',
    overflowY:'scroll',
    alignItems:'center',
    borderTop:'3px solid rgba(255,255,255,.3)',
    overflowX:'hidden',
    wordWrap:'break-word',
    overflowWrap:'break-all',
    gridGap:'10px',
    marginBottom:'7rem',

},{
    //chat 2
    backgroundColor:'#23c2c4',
    display:'flex',
    width:'85%', 
    transform:'translateX(7%)',
    alignItems:'center',
    padding:'10px 0px',
    borderRadius:'10px',
    
},{
    //chat 3
    transform:'translateX(-7%)',
    backgroundColor:'#137838',
    marginTop:'10px',
    display:'flex',
    width:'85%', padding:'10px 0px',
    alignItems:'center',
    borderRadius:'10px'
},{
    //chat 4
    width:'2.5rem',
    height:'2,5rem',
    borderRadius:'999px',
    margin:'0px 10px',
},{
    //5
    wordBreak:'break-all',
}]

export default Chat
