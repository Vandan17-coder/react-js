import React,{ useState } from 'react'

const App = () => {
  
  const [num, setNum] = useState(25);
  const [username, setUsername] = useState('Rohit');
  const [users, setUsers] = useState([10,20,30])

  function changeNum(){
    setNum(50);
    setUsername('Rahul');
    setUsers([40,45,50])
  }

  return (
    <div>
      <h1>Value of a num is {num} <br/> {users} <br/>Value of user is {username}</h1>
      <button onClick={changeNum}>Click</button>
    </div>
  )
}

export default App 