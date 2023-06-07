import './App.css';
import { useState } from 'react';

function App() {
  // const[상태값(state),상태값을 바꾸기 위한 함수]=초기값(useState(""))
  const[username,setUsername]=useState("");
  const[password,setPassword]=useState("");
  const onSubmit=(eve)=>{
    console.log(username,password)
    eve.preventDefault();
    // form은 전송 후에 refresh(새로고침)이 됨.
  }
  return (
    <>
  <form onSubmit={onSubmit}>
  <input placeholder='Username' value={username}
  onChange={(eve)=>{setUsername(eve.target.value)}}
  /><br/>
  <input placeholder='Password' value={password}
  onChange={(eve)=>{
    setPassword(eve.target.value)
    console.log(password)}}
  /><br/>
  <button type='submit'>Update</button>
  </form>
    </>
  );
}

export default App;
