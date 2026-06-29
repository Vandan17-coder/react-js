import React,{ useState } from 'react'

const App = () => {

  /*object*/
  const [num , setNum] = useState({user: 'Vandan' , age: '20'});

  const btnClickedObj = () => {
    const newNum = {...num};
    newNum.user = 'Vandan Patel';
    newNum.age = 21;
    setNum(newNum) 
  }

  /*array*/
  const [arr,setArr] = useState([10,20,30])

  const btnClickedArr = () => {
    const newArr = [...arr];
    newArr.push(9);
    setArr(newArr);
  }

  /*using advance useState object*/
  const btnClickedAdvo = () => {
    setNum(prev=>({...prev,age:22}))
  }

  /*using advance useState array*/
  const btnClickedAdvarr = () => {
    setArr(prev=>[...prev,40])
  }

  return (
    <div>
      <h1>{num.user} {num.age}</h1>
      <h1>{arr}</h1>
      <button onClick={btnClickedObj}>Clicked obj</button>
      <button onClick={btnClickedArr}>Clicked arr</button>
      <button onClick={btnClickedAdvo}>Clicked Advobj</button>
      <button onClick={btnClickedAdvarr}>Clicked Advarr</button>
    </div>
  )
}

export default App