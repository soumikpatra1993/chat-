import React , {useState} from 'react'
import {Link} from 'react-router-dom'

const Join =() =>{
    const [name, setname] = useState('');
    const [room , setRoom] = useState('');
    return (
  <div className = "joinOuterContainer">
      <div className = "joinInnerContainer">
          <div><input placeholder="name" className = "joinInput" type = "text" onChange ={(event)=>setname(event.target.value)}/></div>
          <div><input placeholder="room" className = "joinInput mt-20" type = "text" onChange ={(event)=>setRoom(event.target.value)}/></div>
        <Link onClick = {event => (!name || !room )? event.preventDefault():null}to = {`/chat?name=${name}&room=${room}`}>
        <button className = "button mt-20" type = "submit">Sign in</button></Link>
      </div>

  </div>
    )
}
export default  Join